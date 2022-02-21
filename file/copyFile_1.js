var fs = require("fs");
// var content = " we're having fun at skillqode 1";
var data = "mytext ";
fs.writeFile("file11.txt", data, "utf8", writeComp);

function writeComp(error) {
    if (error) {
        console.log(error);
    }
    else {
        fs.writeFile("file11_copy.txt", data, "utf8", writingCompleted);
        function writingCompleted(error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("file copied..");
            }
        }
    }
}
