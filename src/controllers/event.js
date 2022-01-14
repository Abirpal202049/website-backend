const Event = require('../models/Event')

// Adding New Event 
exports.addNewEvent = async (req, res) => {
    try {
        const { eventImage, eventDetails, dateofEvent, eventTitle } = req.body;

        if (!(eventImage && eventDetails && dateofEvent && eventTitle)) {
            return res.status(400).json({
                Message: "All fields are required"
            })
        }
        const event = await Event.create({
            eventImage,
            eventTitle,
            eventDetails,
            dateofEvent,
        })

        return res.status(200).json({
            Message: "Success",
            Event : event 
        })
 
    } catch (error) {
        return res.status(400).json({ 
            Error: "Couldn't add Event Successfully" 
        })
    }

}

// Displaying all events
exports.allEvent = async (req, res) => {
    try {
        const allEvent = await Event.find({}, {eventImage : 1, eventTitle : 1, eventDetails : 1, _id : 1, dateofEvent : 1})
        return res.status(200).json({
            Message : 'Success',
            Events : allEvent
        })
    } catch (error) {
        return res.status(400).json({ 
            Error: "Something Went Wrong" 
        })
    }
}

// Updating the specific event based on it's Id
exports.updateEvent = async (req, res) => {
    try {
        const eventid = req.params.eventId
        console.log(eventid);

        const event = await Event.findByIdAndUpdate(eventid, req.body, {
            new : true,
            runValidators : true
        })

        if(! (event)){
            return res.status(400).json({
                Message: "Can't find any user like this",
            })
        }

        return res.status(200).json({
            Message: "Data Updated Successfully",
            Event : event
        })

    } catch (error) {
        return res.status(400).json({ 
            Error: "Something Went Wrong",
            Message : error.message 
        })
    }
    
}