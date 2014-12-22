'use strict';

var express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs');

app.set('port', process.env.PORT || 3000);
app.set('audiobooks_dir', process.env.AUDIOBOOKS_DIR || 'audiobooks');

app.get('/', function(req, res) {
  fs.readdir(app.get('audiobooks_dir'), function(err, files) {
    var str = '';
    files.forEach(function(file) {
      if(path.extname(file) === '.mp3') {
        str += file + '\n';
      }
    });

    res.send(str);
  });
})

app.listen(app.get('port'));
