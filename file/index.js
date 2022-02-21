var fs = require("fs");
// fs.readFile('file1.txt', 'utf8', function (err, data) {

//     // Display the file content
//     console.log(err);
//     console.log(data);
// });

fs.readFile("file1.txt", "utf8", receivedFile);
function receivedFile(error, data) {
    if (error)
        console.log(error);
    else
        console.log(data);
}