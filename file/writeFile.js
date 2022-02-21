var fs = require("fs");
var content = " we are fine...";
fs.writeFile("newFile1.txt", content, "utf8", writingFile);
function writingFile(error) {
    if (error) {

        console.log(error);
    }
    else {

        console.log("Writing file completed...");
    }
}