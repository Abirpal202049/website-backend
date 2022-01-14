const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true,
            default: null,
        },
        title: {
            type: String,
            required: true,
            default: null,
        },
        description: {
            type: String,
            required: true,
            default: null,
        },
        date: {
            type: Date,
            required: true,
            required: true,
        },
        form : {
            type: String,
            required: true,
            default: null,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Events", eventSchema);
