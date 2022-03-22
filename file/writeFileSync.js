var fs = require("fs");
// console.log(typeof fs);
var content = " we're having fun at skillqode write file sync";
fs.writeFileSync("newFile.txt", content, "utf8");


