const mongoose = require('mongoose');
const Ticket = require('../models/Ticket');
const Event = require('../models/Event');

const createTicket = async (req, res) => {
  try {
    const { eventId, price } = req.body;

    console.log("Request body:", req.body); // Log the full request body
    console.log("Event ID:", eventId); // Log the eventId specifically

    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return res.status(400).json({ message: "Invalid event ID format" });
    }

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const ticket = new Ticket({
      event: eventId,
      user: req.user._id,
      price,
      isPaid: false,
    });

    const createdTicket = await ticket.save();
    res.status(201).json(createdTicket);
  } catch (error) {
    console.error("Error creating ticket:", error.message); // Log errors
    res.status(500).json({ message: error.message });
  }
};



const getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user._id }).populate('event');
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTicket, getUserTickets };
