var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hello, world!");
});

app.get("/createUser", function(req, res) {
    res.json({ success: false });
});

app.listen(8080, function() {
    console.log("listening...");
});
