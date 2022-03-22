var express = require("express");
var app = express();
app.listen(5151, () => {
    console.log("Sever started at port no. 5151");
});
app.get("/", (req, res) => {
    console.log("req.url    :", req.url);
    console.log("req.method :", req.method);
    console.log("req.headers:", req.headers);
    console.log("req.query  :", req.query);
    console.log("req.body   :", req.body);

    res.header();

    res.write("Hello World");
    res.end();
})