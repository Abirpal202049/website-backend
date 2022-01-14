const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        eventImage: {
            type: String,
            required: true,
            default: null,
        },
        eventTitle: {
            type: String,
            required: true,
            default: null,
        },
        eventDetails: {
            type: String,
            required: true,
            default: null,
        },
        dateofEvent: {
            type: Date,
            required: true,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Events", eventSchema);
