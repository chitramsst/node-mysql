var express = require('express');
var router = express.Router();

// const bodyParser = require('body-parser');
// const mysql = require('mysql');


// const app = express(); 
router.get('/', (req, res) => {
    res.send('Hai!');
  });

router.get('/xx', (req, res) => {
    res.send('Hello World xx!');
  });

  module.exports = router;
