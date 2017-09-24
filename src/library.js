/**
    pd-spuploadfiles is a module to upload files into sharepoint. 
    *
    * The only files it will accept are from the file input of the dom (filelist). 
    * This module will upload as many files as you pass it.
    * The max file size support at this time is 2gb. If a user passes a file that is larger than 2gb the process promise will be rejected and the catch block will receive a object with a filesToBig property. The filesToBig property will contain an array of all file names that were to big. You are responsible for displaying the files to big message to the user. 
    *
    * This module depends on
    * 1. pd-spUtil
    * 2. pd-spserverajax
    * 3. axios
    *
    @module pdspuploadfiles
 */
import {startUploadProcess, listIdTypeChecker, library, list} from './helpers';
/**
 * The index and itemData to process will be passed to this function
 * the order number is your id to locate elements (dom or whatever) based on the specific item processing
 * for creating a front end this is where to create the dom element to update with progress data
 *
 * @callback itemPreProcessing
 * @param {any} itemData
 * @param {number} index
 */
/**
 * The itemProgressProcessing will be passed the progress number and the index to trigger any side effects
 * Index is your id to locate elements (dom or whatever) based on the specific item processing
 * There is a small gap in time once the 100% is recieved and when the server sends the completed event (fyi)
 *
 * @callback itemProgressProcessing
 * @param {number} percentUploaded
 * @param {number} index
 */
/**
 * The processingCompletedCallback will be passed the order number and the process status (success or fail) to trigger any completed side effects
 * The order number is your id to locate elements (dom or whatever) based on the specific item processing
 * This is where you would pass the actions to show item completed uploading
 *
 * @callback itemCompletedProcessing
 * @param {string} status
 * @param {number} index
 */
/**
 * Uploads files to a SharePoint Library. 
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url 
 * @param {string} props.folder - folder to save file in, ex SharedDocuments/folder1
 * @param {filelist} props.files - files in the file input element to be uploaded
 * @param {itemPreProcessing} [props.itemCreatedCB] - this call back is called when an item is added to be processed
 * @param {itemProgressProcessing} [props.itemUploadProgressCB] - this call back is called when the progress event is fired
 * @param {itemCompletedProcessing} [props.itemCompletedCB] - this call back is called when item is completed
 */
export function uploadFilesToLibrary (props) {

    props.type = library;
    return startUploadProcess(props);
}

/**
 * Uploads files to a list item. Will accept multiple items
 * @param {object} props 
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url 
 * @param {number[]} props.itemIds - array of item ids to upload files to 
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {filelist} props.files - files in the file input element to be uploaded
 * @param {itemPreProcessing} [props.itemCreatedCB] - this call back is called when an item is added to be processed
 * @param {itemProgressProcessing} [props.itemUploadProgressCB] - this call back is called when the progress event is fired
 * @param {itemCompletedProcessing} [props.itemCompletedCB] - this call back is called when item is completed
 */
export function uploadFilesToList(props) {
    //only one item and one file
    //set up loop to handle multiple item ids
    if (!Array.isArray(props.itemIds)) {
        props.itemIds = [props.itemIds];
    }
    //check all numbers and setup results object
    if (!props.verified) {
        listIdTypeChecker(props.itemIds);
        props.allResults = {};
        props.allResults.length = 0;
        props.verified = true;
    }

    props.type = list;
    props.processingItem = props.processingItem >= 0 ? props.processingItem + 1 : 0;
    props.itemId = props.itemIds[props.processingItem];

    return startUploadProcess(props)
    .then(items => {
        props.allResults[props.itemId] = items;
        props.allResults.length++;

        if (props.allResults.length < props.itemIds.length) {
            return uploadFilesToList(props);
        }
        return props.allResults;
    });
}