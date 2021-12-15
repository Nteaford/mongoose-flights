const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// Routes are not prefixed with any path

// POST "/flights/:id/destinations" - Create Destination Route
router.post('/flights/:id/destinations', destinationsCtrl.create);



module.exports = router;