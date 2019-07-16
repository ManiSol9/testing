
const express = require('express');
const path = require('path');
const server = require('http').createServer();
const app = express();


app.use(express.static(path.join(__dirname, '/public')));


app.use("/publish",function (req,res) {
    res.status({
        "mani": 56666
    })
});

server.on('request', app);
server.listen(8080, () => {
    console.log('Server listening on http://localhost:8080');
});
