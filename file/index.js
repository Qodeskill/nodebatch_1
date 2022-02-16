var fs = require("fs");
// fs.readFile('file1.txt', 'utf8', function (err, data) {

//     // Display the file content
//     console.log(err);
//     console.log(data);
// });

fs.readFile("file1.txt", "utf8", receivedFile);
function receivedFile(error, data) {
    console.log(error);
    console.log(data);
}