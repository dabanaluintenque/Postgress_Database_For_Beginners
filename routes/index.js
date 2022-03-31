var express = require('express');
const { dirname } = require('path');
var router = express.Router();
var path = require('path');
const Client = require('pg').Client;

const client = new Client({

  connectionString: process.env.DATABASE_URL
});

client.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books' , function(req, res, next){

  res.sendFile(path.join(-dirname, '..', 'public', 'books.html'));

});

router.get('/booksOut', function(req, res, next){

  client.query('SELECT * FROM book', function(err, result){

    if(err){
      next(err);}
    res.json(result.rows);
    console.log(result.rows);
  });
});

// for Cars

router.get('/cars' , function(req, res, next){

  res.sendFile(path.join(-dirname, '..', 'public', 'cars.html'));

});

router.get('/carsOut', function(req, res, next){

  client.query('SELECT * FROM cars', function(err, result){

    if(err){
      next(err);}
    res.json(result.rows);
    console.log(result.rows);
  });
});


module.exports = router;
