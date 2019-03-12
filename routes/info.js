const express = require('express');
const router = express.Router();

const petsData = require('../json-data/pet-data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('info', { petsInfo: petsData});
});

module.exports = router;