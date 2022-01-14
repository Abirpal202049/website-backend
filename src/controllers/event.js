const Event = require('../models/Event')

// Adding New Event 
exports.addNewEvent = async (req, res) => {
    try {
        const { image, title, description, date, form } = req.body;

        if (!(image && title && description && date && form)) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }
        const event = await Event.create({
            image,
            title,
            description,
            date,
            form
        })

        return res.status(200).json({
            message: "Success",
            event : event 
        })
 
    } catch (error) {
        return res.status(400).json({ 
            error: "Couldn't add Event Successfully" 
        })
    }

}

// Displaying all events
exports.allEvent = async (req, res) => {
    try {
        const allEvent = await Event.find({}, {image : 1, title : 1, description : 1, _id : 1, date : 1, form : 1})
        return res.status(200).json({
            message : 'Success',
            events : allEvent
        })
    } catch (error) {
        return res.status(400).json({ 
            error: "Something Went Wrong" 
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
                message: "Can't find any user like this",
            })
        }

        return res.status(200).json({
            message: "Data Updated Successfully",
            event : event
        })

    } catch (error) {
        return res.status(400).json({ 
            error: "Something Went Wrong",
            message : error.message 
        })
    }
    
}


// Delete the specific event
exports.deleteEvent = async (req, res) => {
    try {
        const eventid = req.params.eventId

        const event = await Event.deleteOne({_id : eventid})

        if (!event) {
            return res.status(400).json({
                message: "Data Can't be Deleted",
            })
        }

        return res.status(200).json({
            message : "Data Deleted Successfully",
            event : event
        })
    } catch (error) {
        return res.status(400).json({ 
            error: "Something Went Wrong",
            message : error.message 
        })
    }
}