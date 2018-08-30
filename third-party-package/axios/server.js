const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.json({reason: "ok"});
});

const server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});