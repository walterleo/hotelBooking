import express  from "express";

const app = express();

const port = 5000;

import './dbConnect.js';
import Bookings from "./models/Bookings.js";

app.use(express.json());


app.get('/', (req, res)=>{
    res.send("Hi Walter from express server");
})

app.post("/hotelbooking", async (req, res) => {
    try {
        const bookingdata = new Bookings(req.body);
        await bookingdata.save();
        res.status(200).send("Data saved into Mongo Succesfully");
    } catch (error) {
        console.log(error);
        res.status(200).send("DB Validation Failed");
    }
});

app.get('/bookings', (req, res)=>{
    res.send("this route takes the bookings from the db and respond back to the UI");
})

app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
})


