const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();

var router = require('../routes/start');

app.set("views", path.join(__dirname, '../src/'));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use('/', router);

module.exports.handler = serverless(app)