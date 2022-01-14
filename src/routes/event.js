const express = require('express');
const router = express.Router();

const { addNewEvent, allEvent, updateEvent } = require('../controllers/event')

// Crearte New Event
router.post('/addevent', addNewEvent)

// Read All Events
router.get('/allevents', allEvent)

// Update a Specific event based on its _id
router.put('/update/:eventId', updateEvent)


module.exports = router