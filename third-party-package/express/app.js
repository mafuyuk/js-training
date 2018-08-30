const express = require("express");
const app = express();

// ハローワールドを取得するAPI
app.get('/', function (req, res) {
    res.send('Hello World');
});

// 写真リストを取得するAPI
app.get("/api/photo/list", function(req, res, next){
    // 写真のサンプルデータ
    const photoList = [
        {
            id: "001",
            name: "photo001.jpg",
            type: "jpg",
            dataUrl: "http://localhost:3000/data/photo001.jpg"
        },{
            id: "002",
            name: "photo002.jpg",
            type: "jpg",
            dataUrl: "http://localhost:3000/data/photo002.jpg"
        }
    ];

    res.json(photoList);
});

const server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});