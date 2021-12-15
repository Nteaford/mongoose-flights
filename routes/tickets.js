const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// Routes are not prefixed with any path

// GET "/flights/:id/tickets/new" - New Ticket Route
router.get('/flights/:id/tickets/new', ticketsCtrl.new);


// POST "/flights/:id/tickets/new" - Create Ticket Route
router.post('/flights/:id/tickets/', ticketsCtrl.create);



module.exports = router;