const Flight = require('../models/flight')
const Ticket = require('../models/ticket')


module.exports = {
    new: newTicket,
    create,
};



function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
    res.render(`tickets/new`, {flight});
    });   
    }


function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        const ticket = new Ticket(req.body);
            ticket.flight = flight._id;
            ticket.save(function(err) {
                console.log(newTicket);
                res.redirect(`/flights/${flight._id}`);
            });
    });
}