const { createSecretKey } = require("crypto");
var http = require("http");
// // console.log(http);
// var server = http.createServer((r ) => {

// })

var server = http.createServer((request, response) => {
    // console.log("request recieved...");
    response.write("Hello , i am here");
    // // response.end();
    // response.write("Hello , i am here too");
    response.end();
});
server.listen(5050); 