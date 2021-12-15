const Flight = require('../models/flight')
const Ticket = require('../models/ticket')


module.exports = {
    index,
    new: newFlight,
    create,
    show,
};



function create(req,res) {
    if(req.body.departs === '') delete(req.body.departs);
    
    const flight = new Flight(req.body);
    flight.save(function (err) {
        // one way to handle errors
        if (err) {
          console.log(err);
          return res.redirect("/flights/new");
        }
        console.log(flight);
        // for now, redirect right back to new.ejs
        res.redirect("/flights");
      });
}
    
function index(req,res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {title: "All Flights",flights });
    });
}

function newFlight(req,res) {
        res.render('flights/new', {title: "Add Flights"});
    };




function show(req,res) {
    Flight.findById(req.params.id,function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show',
            {title: "Flight Views", flight, tickets });
        })
    });
} 
    
     




