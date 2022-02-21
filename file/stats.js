var fs = require("fs");
// var content = " we're having fun at skillqode 1";
fs.stat("file1.txt", fileStats);

function fileStats(error, stat) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(stat)
    }
}
