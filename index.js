var express = require('express');
var app = express();
var path = require('path');

app.use('/synotate-static', express.static(__dirname + '/dist'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(8080);