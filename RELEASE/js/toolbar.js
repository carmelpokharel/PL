
// --------------------------------
// Save as feature for the textarea
// --------------------------------
function saveTextAsFile() {

    var textToWrite = editor.getDoc().getValue();
    var textFileAsBlob = new Blob([textToWrite], {
        type: 'text/plain'
    });
    var fileNameToSaveAs = location.href.split("/").slice(-1).toString();
    var fileNameToSaveAs = "pythonsandladders_" + fileNameToSaveAs.replace(".html", ".txt");

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}
var button = document.getElementById('save');
button.addEventListener('click', saveTextAsFile);
function destroyClickedElement(event) {
    // remove the link from the DOM
    document.body.removeChild(event.target);
}

// --------------------------------
// Clear feature for the output div
// --------------------------------
function clearBox() {
    document.getElementById('dynamicframe').innerHTML = "";
}