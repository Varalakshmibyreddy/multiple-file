const fileBrowseButton = document.querySelector(".file-browse-button");
const fileBrowseInput = document.querySelector(".file-browse-input");
const fileUploadBox = document.querySelector(".file-upload-box");

//function to handle selected files
const handleSelectedFiles = (files) =>{
    console.log(files);
}

//function to handle file dragleave
fileUploadBox.addEventListener("drop",(e) =>{
    e.preventDefault();
    handleSelectedFiles(e.dataTransfer.files);
    fileUploadBox.classList.remove("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
});

//function to handle dragover
fileUploadBox.addEventListener("dragover",(e) =>{
    e.preventDefault();
    fileUploadBox.classList.add("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Release to upload or";
});

//function to handle file dragleave
fileUploadBox.addEventListener("dragleave",(e) =>{
    e.preventDefault();
    fileUploadBox.classList.remove("active");
    fileUploadBox.querySelector(".file-instruction").innerText = "Drag files here or";
});

fileBrowseInput.addEventListener("change",(e)  => handleSelectedFiles(e.target.files));
fileBrowseButton.addEventListener("click", () => fileBrowseInput.click());