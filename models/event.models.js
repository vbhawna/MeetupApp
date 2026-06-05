const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required: true,
        enum: ["marketing", "digital", "AI", "machine-learning", "technology", "startup", "entrepreneurship", "networking", "web-development", "javascript", "react", "cybersecurity", "security", "IT", "health", "fitness", "wellness", "photography", "creative", "art", "finance", "investment", "wealth-management", "environment", "sustainability", "climate"]
    }],
    hostedBy: {
        type: String,
        required: true
    },
    eventStartDateAndTime: {
        type: String,
        required: true,
    },
    eventEndDateAndTime: {
        type: String,
        required: true,
    },
    typeOfEvent: {
        type: String,
        required: true,
        enum: ["Offline", "Online"]
    },
    location: {
        type: String,
        required: true,
    },
    fee: {
        type: Number,
        required: true,
    },
    speakers: [{
        name: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
    }],
    details: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    dressCode: String,
    ageRestrictions: String,
}, 
{
    timestamps: true
}
);

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;

