const eventdb = require("../models/events");

const validator = require("../utils/validator");

module.exports.get = async (req, res) => {
  try {
    const event = await eventdb.findById(
      req.params.id,
      "_id title description image form date"
    );

    if (!event) return res.status(404).json({ error: "No Events Found" });

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
      "_id title description image form date"
    );

    res.status(200).json({ events, length: events.length });
  } catch (error) {
    res.status(500).json({ error: "Cannot Find Events" });
  }
};

// Create New Event
module.exports.add = async (req, res) => {
  try {
    const { error } = validator.event(req.body);
    if (error) return res.status(406).json({ error: "Invalid Event Data" });

    const newEvent = await eventdb.create(req.body);

    res.status(200).json({
      _id: newEvent._id,
      title: newEvent.title,
      description: newEvent.description,
      image: newEvent.image,
      form: newEvent.form,
      date: newEvent.date,
    });
  } catch (error) {
    res.status(500).json({ error: "Cannot Create Event" });
  }
};

// Update Specific Event Based On It's ID
module.exports.update = async (req, res) => {
  try {
    const { error } = validator.event(req.body);
    if (error) return res.status(406).json({ error: "Invalid Event Data" });

    const updatedEvent = await eventdb.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedEvent)
      return res.status(404).json({ message: "Cannot Find Event" });

    res.status(200).json({
      _id: updatedEvent._id,
      title: updatedEvent.title,
      description: updatedEvent.description,
      image: updatedEvent.image,
      form: updatedEvent.form,
      date: updatedEvent.date,
    });
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

    res.status(200).json({
      _id: deletedEvent._id,
      title: deletedEvent.title,
      description: deletedEvent.description,
      image: deletedEvent.image,
      form: deletedEvent.form,
      date: deletedEvent.date,
    });
  } catch (error) {
    res.status(500).json({ error: "Cannot Delete Event" });
  }
};
