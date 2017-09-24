<a name="module_pdspuploadfiles"></a>

## pdspuploadfiles
pd-spuploadfiles is a module to upload files into sharepoint. The only files it will accept are from the file input of the dom (filelist). This module will upload as many files as you pass it.The max file size support at this time is 2gb. If a user passes a file that is larger than 2gb the process promise will be rejected and the catch block will receive a object with a filesToBig property. The filesToBig property will contain an array of all file names that were to big. You are responsible for displaying the files to big message to the user. This module depends on1. pd-spUtil2. pd-spserverajax3. axios


* [pdspuploadfiles](#module_pdspuploadfiles)
    * _static_
        * [.uploadFilesToLibrary(props)](#module_pdspuploadfiles.uploadFilesToLibrary)
        * [.uploadFilesToList(props)](#module_pdspuploadfiles.uploadFilesToList)
    * _inner_
        * [~itemPreProcessing](#module_pdspuploadfiles..itemPreProcessing) : <code>function</code>
        * [~itemProgressProcessing](#module_pdspuploadfiles..itemProgressProcessing) : <code>function</code>
        * [~itemCompletedProcessing](#module_pdspuploadfiles..itemCompletedProcessing) : <code>function</code>

<a name="module_pdspuploadfiles.uploadFilesToLibrary"></a>

### pdspuploadfiles.uploadFilesToLibrary(props)
Uploads files to a SharePoint Library.

**Kind**: static method of [<code>pdspuploadfiles</code>](#module_pdspuploadfiles)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.folder | <code>string</code> | folder to save file in, ex SharedDocuments/folder1 |
| props.files | <code>filelist</code> | files in the file input element to be uploaded |
| [props.itemCreatedCB] | <code>itemPreProcessing</code> | this call back is called when an item is added to be processed |
| [props.itemUploadProgressCB] | <code>itemProgressProcessing</code> | this call back is called when the progress event is fired |
| [props.itemCompletedCB] | <code>itemCompletedProcessing</code> | this call back is called when item is completed |

<a name="module_pdspuploadfiles.uploadFilesToList"></a>

### pdspuploadfiles.uploadFilesToList(props)
Uploads files to a list item. Will accept multiple items

**Kind**: static method of [<code>pdspuploadfiles</code>](#module_pdspuploadfiles)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> |  |
| [props.origin] | <code>string</code> |  |
| props.url | <code>string</code> | site relative url |
| props.itemIds | <code>Array.&lt;number&gt;</code> | array of item ids to upload files to |
| props.listGUID | <code>string</code> | use either listGUID or listTitle not both |
| [props.listTitle] | <code>string</code> |  |
| props.files | <code>filelist</code> | files in the file input element to be uploaded |
| [props.itemCreatedCB] | <code>itemPreProcessing</code> | this call back is called when an item is added to be processed |
| [props.itemUploadProgressCB] | <code>itemProgressProcessing</code> | this call back is called when the progress event is fired |
| [props.itemCompletedCB] | <code>itemCompletedProcessing</code> | this call back is called when item is completed |

<a name="module_pdspuploadfiles..itemPreProcessing"></a>

### pdspuploadfiles~itemPreProcessing : <code>function</code>
The index and itemData to process will be passed to this functionthe order number is your id to locate elements (dom or whatever) based on the specific item processingfor creating a front end this is where to create the dom element to update with progress data

**Kind**: inner typedef of [<code>pdspuploadfiles</code>](#module_pdspuploadfiles)  

| Param | Type |
| --- | --- |
| itemData | <code>any</code> | 
| index | <code>number</code> | 

<a name="module_pdspuploadfiles..itemProgressProcessing"></a>

### pdspuploadfiles~itemProgressProcessing : <code>function</code>
The itemProgressProcessing will be passed the progress number and the index to trigger any side effectsIndex is your id to locate elements (dom or whatever) based on the specific item processingThere is a small gap in time once the 100% is recieved and when the server sends the completed event (fyi)

**Kind**: inner typedef of [<code>pdspuploadfiles</code>](#module_pdspuploadfiles)  

| Param | Type |
| --- | --- |
| percentUploaded | <code>number</code> | 
| index | <code>number</code> | 

<a name="module_pdspuploadfiles..itemCompletedProcessing"></a>

### pdspuploadfiles~itemCompletedProcessing : <code>function</code>
The processingCompletedCallback will be passed the order number and the process status (success or fail) to trigger any completed side effectsThe order number is your id to locate elements (dom or whatever) based on the specific item processingThis is where you would pass the actions to show item completed uploading

**Kind**: inner typedef of [<code>pdspuploadfiles</code>](#module_pdspuploadfiles)  

| Param | Type |
| --- | --- |
| status | <code>string</code> | 
| index | <code>number</code> | 

