var fs = require("fs");
// var content = " we're having fun at skillqode 1";
fs.readdir("d:\\SQ\\SkilQode_NodeBatch1", readDirCompleted);

function readDirCompleted(error, file) {
    if (error) {
        console.log(error);
    }
    else {
        for (var i = 0; i < file.length; i++) {
            console.log(file[i]);
            // console.log(file[i].indexOf(".") > -1 ? "file : " : "folder", " - ", file[i]);
        }
    }
}
