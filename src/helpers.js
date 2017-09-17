import { getContext } from 'pd-spserverajax';
import { getURLOrigin } from 'pd-sputil';
import { MeteredRequestProcessor } from 'pd-meteredrequestprocessor';
import axios from 'axios';

const invalidFileList = "files passed to function are not the correct datatype, the files property must be a instance of FileList";
const noUploadType = "a type must be specified to start the upload process";
const invalidListItemId = "list item ids must be a number";
const maxFileSize = 2147483648;
export const library = 'library';
export const list = 'list';
let uploadProperties = null;

function getFileBuffer(file) {
	return new Promise((resolve, reject) => {
		var reader = new FileReader();
		reader.onloadend = function (e) {
			resolve(e.target.result);
		};
		reader.onerror = function (e) {
			reject(e.target.error);
		};
		reader.readAsArrayBuffer(file);
	});
}
function getUploadContext(props) {
	return getContext(props)
		.then(response => {
			return response.data.FormDigestValue;
		});
}
function createUploadObjects(files, uploadUrl, context) {
	let totalFiles = files.length,
		toUpload = [],
		filesToBig = [];

	for (var ii = 0; ii < totalFiles; ii++) {
		let singleFile = files.item(ii);

		if (singleFile.size > maxFileSize) {
			filesToBig.push(singleFile.name);
			continue;
		}
		toUpload.push({
			url: uploadUrl,
			file: singleFile,
			context: context
		});
	}
	return {
		toUpload,
		filesToBig
	};
}
function uploadUrlBase(props) {
	let origin = props.origin || getURLOrigin();
	return `${origin}${props.url}/_api/web`;
}
function createLibraryUrl(props) {
	let url = uploadUrlBase(props);
	return `${url}/GetFolderByServerRelativeUrl('${props.folder}')/Files/add(url='{fileName}',overwrite=true)`;
}
function createListUrl(props) {
	let url = uploadUrlBase(props);
	if (props.listGUID) {
		return `${url}/lists(guid'${props.listGUID}')/items(${props.itemId})/AttachmentFiles/add(FileName='{fileName}')`;
	} else {
		return `${url}/lists/getbytitle('${props.listTitle}')/items(${props.itemId})/AttachmentFiles/add(FileName='{fileName}')`;
	}
}
function setupUpload(props) {
	if (props.type === library) {
		uploadProperties = {
			totalToUpload: 3,
			url: createLibraryUrl(props)
		};
	} else if (props.type === list) {
		uploadProperties = {
			totalToUpload: 1,
			url: createListUrl(props)
		};
	} else {
		throw new Error(noUploadType);
	}
}
export function listIdTypeChecker(ids) {
	let allNumbers = true;

	ids.some(id => {
		if (typeof id !== 'number') {
			allNumbers = false;
			return true;
		}
	});

	if (!allNumbers) {
		throw new Error(invalidListItemId);
	}
}
export function startUploadProcess(props) {
	if (!(props.files instanceof FileList)) {
		throw new Error(invalidFileList);
	}
	setupUpload(props);

	//get context
	return getUploadContext(props)
		.then(ctx => {

			//create objects
			let itemsToProcess = createUploadObjects(props.files, uploadProperties.url, ctx),
				processor = null;

			if (itemsToProcess.filesToBig.length > 0) {
				//user passed a file that was to big to be uploaded
				itemsToProcess.toUpload = null;
				Promise.reject({
					filesToBig: itemsToProcess.filesToBig
				});
			}
			processor = new MeteredRequestProcessor();

			processor.changeConcurrentProcessing(uploadProperties.totalToUpload);

			processor.setPreProcessingCB(function (itemData, index) {
				if (props.itemCreatedCB) {
					props.itemCreatedCB(itemData, index);
				}
				return getFileBuffer(itemData.file)
					.then(buffer => {
						let upUrl = itemData.url.replace("{fileName}", itemData.file.name);
						return axios({
							url: upUrl,
							method: 'POST',
							data: buffer,
							headers: {
								"accept": "application/json;odata=verbose",
								"X-RequestDigest": itemData.context,
								"content-length": buffer.byteLength
							}
						});
					});

			});
			processor.setItemProcessedCB(props.itemCompletedCB);
			return processor.init(itemsToProcess.toUpload);
		});
}