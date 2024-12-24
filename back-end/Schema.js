const mongoose = require('mongoose');
const { slots, seats } = require('../front-end/src/data');

const TicketSchema = new mongoose.Schema({
    movie:{type:String},
    slots:{type:String},
    seats:{
        A1:{type:Number},
        A2:{type:Number},
        A3:{type:Number},
        A4:{type:Number},
        D1:{type:Number},
        D2:{type:Number}
    }
})

const ticket = mongoose.model('bookmovies',TicketSchema);
module.exports = ticket;