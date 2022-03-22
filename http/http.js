
var http = require("http");

var server = http.createServer((request, response) => {
    console.log("request recieved...");
    response.setHeader("Content-type", "text/html");
    response.write(" Hello ");
    // response.writeHead(500);

    response.write("<h1>Hello , i am skillqode </h1>");
    // response.write("<h1>course</h1>");
    // response.write("<h1>NodeJS</h1>");
    // response.write("<h1>NodeJS</h1>");
    response.write("Request url" + request.url);
    response.write("Request method" + request.method);
    response.end();
});
server.listen(5050, () => {
    console.log("Listning 5050")
}); 