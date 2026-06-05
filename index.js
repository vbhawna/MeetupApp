const express = require("express");
const app = express();
const cors = require("cors");

const { initializeDatabase } = require("./db/db.connect");

const Events = require("./models/event.models");
// const fs = require("fs");

app.use(express.json());

const corsOptions = {
    origit: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

initializeDatabase();

// const jsonData = fs.readFileSync("./events.json", "utf-8");
// const eventsData = JSON.parse(jsonData);

// const seedData = async () => {
//     try {
//         for (const eventData of eventsData) {
//             const newEvent = new Events({
//                 title: eventData.title,
//                 tags: eventData.tags,
//                 hostedBy: eventData.hostedBy,
//                 eventStartDateAndTime: eventData.eventStartDateAndTime,
//                 eventEndDateAndTime: eventData.eventEndDateAndTime, 
//                 typeOfEvent: eventData.typeOfEvent,
//                 location: eventData.location, 
//                 fee: eventData.fee,
//                 speakers: eventData.speakers,
//                 details: eventData.details,
//                 imageUrl: eventData.imageUrl,
//                 dressCode: eventData.dressCode,
//                 ageRestrictions: eventData.ageRestrictions
//             });
//             await newEvent.save();
//             console.log("Event Saved Successfully.", newEvent["title"]);
//         }
//     } catch(error) {
//         console.log("Error in Seeding Data:", error);
//     }
// };

// seedData();

app.get("/events", async (req, res) => {
    try {
        const events = await Events.find();
        if(events.length != 0) {
            res.status(200).json(events);
        } else {
            res.status(404).json({ error: "No events found." });
        }
    } catch(error) {
        res.status(500).json({ error: "Failed to fetch events." });
    }
});

app.get("/events/:eventId", async(req, res) => {
    try {
        const eventData = await Events.findById(req.params.eventId);
        if(eventData) {
            res.status(200).json(eventData);
        } else {
            res.status(404),json({ error: "Event not found." });
        }
    } catch(error) {
        res.status(500).json({ error: "Failed to fetch Event. "});
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
});