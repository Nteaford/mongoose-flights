var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

//All routes will already have /flights in their 
router.get('/', flightsCtrl.index);

router.get('/new', flightsCtrl.new);

router.post('/', flightsCtrl.create);

router.post('/', flightsCtrl.create);

router.get('/:id', flightsCtrl.show);


module.exports = router;