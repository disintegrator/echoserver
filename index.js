#!/usr/bin/env node

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello');
});

app.get('/env', function (req, res) {
  res.send(JSON.stringify(process.env, null, 2));
});

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
