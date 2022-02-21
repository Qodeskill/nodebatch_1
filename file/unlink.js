var fs = require("fs");
// var content = " we're having fun at skillqode 1";
fs.unlink("file11_copy.txt", deleteFile);

function deleteFile(error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("File Deleted...");
    }
}
