var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const { writeFile, readFile } = require('fs');

router.get('/createfile/:filename/:filecontent', function (req, res) {
  const filePath = path.join(__dirname, '../files', req.params.filename);
  writeFile(filePath, req.params.filecontent, (err) => {
    if (err) {
      throw err;
    } else {
      res.send('file created/modified');
    }
  });
});
router.get('/createfolder/:foldername', function (req, res) {
  const filePath = path.join(__dirname, '../files', req.params.foldername);
  fs.mkdir(filePath, (err) => {
    if (err) {
      throw err;
    } else {
      res.send('Folder Created Successfully');
    }
  });
});
router.get('/readfile/:fileName', function (req, res) {
  const filePath = path.join(__dirname, '../files', req.params.fileName);
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});
router.get('/modify/:filename/:filecontent', function (req, res) {
  const filePath = path.join(__dirname, '../files', req.params.filename);
  writeFile(filePath, req.params.filecontent, (err) => {
    if (err) {
      throw err;
    } else {
      res.send('file is modified successfully');
    }
  });
});
router.get('/foldercontents', function (req, res) {
  const folderPath = path.join(__dirname, '../files/');
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      res.json(err);
    } else {
      res.send(files);
    }
  });
});
router.get('/deletefile/:filename', function (req, res) {
  const filePath = path.join('./files/', req.params.filename);
  console.log(filePath);
  fs.unlink(filePath, (e) => {
    if (e) {
      res.json(e);
    }
    res.send('File deleted');
  });
});

module.exports = router;
