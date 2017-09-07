/**
    app name pd-spuploadfiles
 */
import {meteredRequestProcessor} from 'pd-meteredrequestprocessor';
import {getContext} from 'pd-spserverajax';
import axios from 'axios';
import * as upHelp from './helpers';

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

    //checkData type
    if (!(upHelp.ensureFileList(props.files))) {
        throw new Error(upHelp.invalidFileList);
    }
    
    return getContext(props)
    .then(response => {
        //create url
        let uploadUrl = upHelp.createLibraryUrl(props.folder, props.url, props.origin),
        itemsToUpload = [];
        //create objs for preprocessor {url: string, file: file, arrayBuffer: funcRef}
        let totalFiles = props.files.length;
        for (var ii = 0; ii < totalFiles; ii++) {
            itemsToUpload.push({
                url: uploadUrl,
                file: props.files.item(ii),
                context: response.data.FormDigestValue
            });
        }

        //create preprocessor function
        let meteredUpload = new meteredRequestProcessor();
        meteredUpload.setPreProcessingCB(function(itemData, index) {
            if (props.itemCreatedCB) {
                props.itemCreatedCB(itemData, index);
            }
            return upHelp.getFileBuffer(itemData.file)
            .then(buffer => {
                let upUrl = itemData.url.replace("{fileName}", itemData.file.name);
                let headers = upHelp.setHeaders(buffer, itemData.context);
                return axios({
                    url: upUrl,
                    method: 'POST',
                    data: buffer,
                    headers
                });
            });
            
        });
        meteredUpload.setItemProcessedCB(props.itemCompletedCB);
        //start process
        return meteredUpload.init(itemsToUpload);
    });
    
}

/**
 * 
 * @param {object} props 
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url 
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {*} props.files
 */
export function uploadFileToList(props) {

}