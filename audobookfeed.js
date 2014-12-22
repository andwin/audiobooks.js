'use strict';

var express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs');

app.get('/', function(req, res) {
  fs.readdir('audiobooks', function(err, files) {
    var str = '';
    files.forEach(function(file) {
      if(path.extname(file) === '.mp3') {
        str += file + '\n';
      }
    });

    res.send(str);
  });
})

app.listen(process.env.PORT || 3000);
