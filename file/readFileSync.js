var fs = require("fs");
var data = fs.readFileSync("newFile.txt", "utf8");
console.log(data);