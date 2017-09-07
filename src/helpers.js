import {getURLOrigin} from 'pd-sputil';
export const invalidFileList = "files passed to function are not the correct datatype, the files property must be a instance of FileList";
export function getFileBuffer(file) {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.onloadend = function (e) {
            resolve(e.target.result);
        }
        reader.onerror = function (e) {
            reject(e.target.error);
        }
        reader.readAsArrayBuffer(file);
    }) ;
}
export function ensureFileList(files) {
	return files instanceof FileList;
}
export function setHeaders(aryBuf, digest) {
    return  {
        "accept": "application/json;odata=verbose",
        "X-RequestDigest": digest
        //"content-length": aryBuf.byteLength
    };
}
export function createLibraryUrl(folder, siteRelativeUrl, siteOrigin) {
    let origin = siteOrigin || getURLOrigin();
    let url = `${origin}${siteRelativeUrl}/_api/web/GetFolderByServerRelativeUrl('${folder}')/Files/add(url='{fileName}',overwrite=true)`;
    return url;
}
export function createListUrl() {
	//http://site url/_api/web/lists/getbytitle('list title')/items(item id)/AttachmentFiles/add(FileName='file name')
}