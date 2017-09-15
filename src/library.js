/**
    app name pd-spuploadfiles
 */
import {MeteredRequestProcessor} from 'pd-meteredrequestprocessor';
import {getContext} from 'pd-spserverajax';
import {getURLOrigin} from 'pd-sputil';
import axios from 'axios';
import * as upHelp from './helpers';

class MultiUploadBase extends MeteredRequestProcessor {
    constructor() {
        super();
        this._itemsToUpload = [];
    }
    _getContext() {
        return getContext({
            url: this.url
        }).then(response => {
            return response.data.FormDigestValue;
        });
    }
    _createUploadObjects() {
        let totalFiles = this.files.length;
        for (var ii = 0; ii < totalFiles; ii++) {
            this._itemsToUpload.push({
                url: this.uploadUrl,
                file: this.files.item(ii),
                context: this._context
            });
        }
    }
    _uploadUrlBase() {
        let origin = this.origin || getURLOrigin();
        return `${origin}${this.url}/_api/web`;
    }
    _createLibraryUrl() {
        
        let url = this._uploadUrlBase();
        this.uploadUrl = `${url}/GetFolderByServerRelativeUrl('${this.folder}')/Files/add(url='{fileName}',overwrite=true)`;
    }
    _createListUrl() {
        let url = this._uploadUrlBase();
        if (this.listGUID) {
            this.uploadUrl = `${url}/lists(guid'${this.listGUID}')/items(${this.itemId})/AttachmentFiles/add(FileName='{fileName}')`;
        } else {
            this.uploadUrl = `${url}/lists/getbytitle('${this.listTitle}')/items(${this.itemId})/AttachmentFiles/add(FileName='{fileName}')`;
        }
    }
    _getFileBuffer(file) {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.onloadend = function (e) {
                resolve(e.target.result);
            };
            reader.onerror = function (e) {
                reject(e.target.error);
            };
            reader.readAsArrayBuffer(file);
        }) ;
    }
    _ensureFileList(files) {
        return files instanceof FileList;
    }
    urlCreator() {
        throw new Error(upHelp.urlCreator);
    }
    _setHeaders(aryBuf) {
        return  {
            "accept": "application/json;odata=verbose",
            "X-RequestDigest": this._context,
            "content-length": aryBuf.byteLength
        };
    }
    startProcess() {
        if (!(this._ensureFileList(this.files))) {
            throw new Error(upHelp.invalidFileList);
        }
        //create url 
        if (this.type === upHelp.library) {
            this._createLibraryUrl();
        } else {
            this._createListUrl();
        }
        //get context
        return this._getContext()
        .then(ctx => {

            //create objects
            this._context = ctx;
            this._createUploadObjects(this.url, this._context, this.files);

            this.setPreProcessingCB(function(itemData, index) {
                if (this.itemCreatedCB) {
                    this.itemCreatedCB(itemData, index);
                }
                return this._getFileBuffer(itemData.file)
                .then(buffer => {
                    let upUrl = itemData.url.replace("{fileName}", itemData.file.name);
                    return axios({
                        url: upUrl,
                        method: 'POST',
                        data: buffer,
                        headers: this._setHeaders(buffer)
                    });
                });
                
            });
            this.setItemProcessedCB(this.itemCompletedCB);
            return this.init(this._itemsToUpload);
        });
    }
}

/**
 * 
 * @param {object} props 
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url 
 * @param {string} props.folder - folder to save file in
 * @param {*} props.files - files in the dom element to be updated
 * @param {itemPreProcessing} [props.itemCreatedCB] - this call back is called when an item is added to be processed
 * @param {itemCompletedProcessing} [props.itemCompletedCB] - this call back is called when item is completed
 */
export function uploadFilesToLibrary (props) {

    let uploadProcessor = new MultiUploadBase();
    uploadProcessor.type = upHelp.library;
    Object.assign(uploadProcessor, props);
    return uploadProcessor.startProcess();
}

/**
 * 
 * @param {object} props 
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url 
 * @param {number[]} props.itemId - array of item id to upload files to 
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {*} props.files
 */
export function uploadFileToList(props) {
    //only one item and one file
    //set up loop to handle multiple item ids
    let uploadProcessor = new MultiUploadBase();
    uploadProcessor.type = upHelp.list;
    uploadProcessor.changeConcurrentProcessing = 1;
    Object.assign(uploadProcessor, props);
    return uploadProcessor.startProcess();
}