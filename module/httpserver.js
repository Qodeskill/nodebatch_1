// http://localhost:5050/?uname=skilll&upwd=qode
const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);


    const uname = queryObject.uname;
    const upwd = queryObject.upwd;
    uname === "skill" && upwd === "qode" ? res.write("<h1>Login Success</h1>") : res.write("<h1>Login Fail</h1>");
    res.end();
});
server.listen(5050, () => {
    console.log("server listening the port no. 5050");
});