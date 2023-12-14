var express = require('express');
var router = express.Router();
const fs = require('fs');
let connection = require('../database/config')

router.get('/', (req, res) => {
    let sql = "SELECT * FROM customers";
    let query = connection.query(sql, (err, rows) => {
        if(err) throw err;
        res.render('index', {
            title : 'Customer Details',
            users : rows
        });
    });
  });

router.get('/xx', (req, res) => {
    res.send('Hello World xx!');
  });

  module.exports = router;
