var express = require('express');
var router = express.Router();

const pets = require('../json-data/pet-data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(pets);
});

router.get('/:name', function(req, res, next) {
  const result = pets.filter(pet => pet.name.toUpperCase() === req.params.name.toUpperCase());
  res.send(result);
});

module.exports = router;