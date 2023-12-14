var http = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
let migrations = require('./database/migrations')
let router = require("./routes/router")
const ejs = require('ejs');

const app = express();
const port = 3000;

app.use('/', router);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

  // Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
