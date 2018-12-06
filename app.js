const express = require('express');
const http    = require('http');
const path    = require('path');

const app     = express();
const port    = 8080;

app.use(express.static(path.join(__dirname, 'docs')));
app.set('port', 8080);

http.createServer(app).listen(port);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs/index.html'));
});

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs/index.html'));
});