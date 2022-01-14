const express = require('express');
const router = express.Router();

const {admin} = require('../middlewares/authenticate');

const { addNewEvent, allEvent, updateEvent, deleteEvent } = require('../controllers/event')

// Crearte New Event
router.post('/addevent', admin, addNewEvent)

// Read All Events
router.get('/allevents' , allEvent)

// Update a Specific event based on its _id
router.put('/update/:eventId', admin, updateEvent)

// Delete a Specific event based on its _id
router.delete('/delete/:eventId', admin, deleteEvent)


module.exports = router