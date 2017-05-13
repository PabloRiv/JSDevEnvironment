var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();
var _dirname = 'C:/GitHub/9.TRAINING/9.TRAINING/JavaScriptDevelopmentEnvironment/JDE/JSDevEnvironment';

app.get('/', function(req, res) {
  res.sendFile(path.join(_dirname, '/src/index.html'));
});

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
