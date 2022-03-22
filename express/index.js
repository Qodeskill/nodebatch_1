var express = require("express");
var app = express();
app.listen(5151, () => {
    console.log("Sever started at port no. 5151");
});
app.get("/", (req, res) => {
    res.write("Hello World");
    res.end();
})