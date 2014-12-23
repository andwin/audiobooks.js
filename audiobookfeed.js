'use strict';

var express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs'),
    RSS = require('rss');

app.set('port', process.env.PORT || 3000);
app.set('audiobooks_dir', process.env.AUDIOBOOKS_DIR || __dirname + '/audiobooks');

app.use('/audiobooks', express.static(app.get('audiobooks_dir')));

var getFileUrl = function(req, file) {
  return req.protocol + "://" + req.get('host') + '/audiobooks/' + file;
};

app.get('/', function(req, res) {
  fs.readdir(app.get('audiobooks_dir'), function(err, files) {
    var feed = new RSS({
      title: 'audiobooks',
    });

    files.forEach(function(file) {
      if(path.extname(file) === '.mp3') {
        feed.item({
          title: path.basename(file, '.mp3'),
          url: getFileUrl(req, file),
          enclosure: {
            url: getFileUrl(req, file),
            file: app.get('audiobooks_dir') + '/' + file
          },
          date: fs.statSync(app.get('audiobooks_dir') + '/' + file).mtime,
        });
      }
    });

    var xml = feed.xml({indent: '  '});
    res.send(xml);
  });
})

app.listen(app.get('port'));
