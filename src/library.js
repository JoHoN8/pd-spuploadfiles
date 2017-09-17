/**
    app name pd-spuploadfiles
 */
import {startUploadProcess, listIdTypeChecker, library, list} from './helpers';

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

    props.type = library;
    return startUploadProcess(props);
}

/**
 * 
 * @param {object} props 
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url 
 * @param {number[]} props.itemIds - array of item ids to upload files to 
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {*} props.files
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