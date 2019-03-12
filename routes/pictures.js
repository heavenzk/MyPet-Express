var express = require('express');
var router = express.Router();

const petsData = require('../json-data/pet-data.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pictures', {petsInfo: petsData});
});

module.exports = router;
