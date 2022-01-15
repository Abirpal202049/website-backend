const eventdb = require("../models/events");

const validator = require("../utils/validator");

module.exports.get = async (req, res) => {
  try {
    const event = await eventdb.findById(
      req.params.id,
      "_id title description image form data"
    );

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: "Cannot Find Event" });
  }
};

// Get All Events
module.exports.getAll = async (req, res) => {
  try {
    const events = await eventdb.find(
      {},
      "_id title description image form data"
    );

    res.status(200).json({ events, length: events.length });
  } catch (error) {
    res.status(500).json({ error: "Cannot Find Events" });
  }
};

// Create New Event
module.exports.add = async (req, res) => {
  try {
    const { error } = validator.event(req.body.event);
    if (error) return res.status(406).json({ error: "Invalid Event Data" });

    const newEvent = await eventdb.create(req.body.event);

    res.status(200).json({ event: newEvent });
  } catch (error) {
    res.status(500).json({ error: "Cannot Create Event" });
  }
};

// Update Specific Event Based On It's ID
module.exports.update = async (req, res) => {
  try {
    const updatedEvent = await eventdb.findByIdAndUpdate(
      req.params.id,
      req.body.event,
      { new: true, runValidators: true }
    );

    if (!updatedEvent)
      return res.status(404).json({ message: "Cannot Find Event" });

    res.status(200).json({ event: updatedEvent });
  } catch (error) {
    res.status(500).json({ error: "Cannot Update Event" });
  }
};

// Dete Specifit Event Based On It's ID
module.exports.delete = async (req, res) => {
  try {
    const deletedEvent = await eventdb.findByIdAndDelete(req.params.id);

    if (!deletedEvent)
      return res.status(404).json({ message: "Cannot Find Event" });

    res.status(200).json({ event: deletedEvent });
  } catch (error) {
    res.status(500).json({ error: "Cannot Delete Event" });
  }
};
