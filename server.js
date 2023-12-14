var http = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
let migrations = require('./database/migrations')
let router = require("./routes/router")

const app = express();
const port = 3000;

app.use('/', router);

// Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));



// create table

// con.end(function (err) {
//   if (err) {
//     return console.log(err.message);
//   }
// });

  
  // Start server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });



  // http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});

//   res.write(req.url);
//   res.end('Hello World!');
// }).listen(8080);

//console.log(con);