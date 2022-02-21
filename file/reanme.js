var fs = require("fs");
// var content = " we're having fun at skillqode 1";
fs.rename("newFile.txt", "myFile.txt", renamingCompleted);



function renamingCompleted(error) {
    if (error) {

        console.log(error);
    }
    else {

        console.log("File Renamed...");
    }
}