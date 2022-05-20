import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    checkindate: {
        type: Date,
        required: true
    },
    checkoutdate: {
        type: Date,
        required: true
    },
    checkinTime: {
        type: String,
        required: true
    },
    checkoutTime: {
        type: String,
        required: true
    },
    numberAdults: {
        type: Number,
        required: true
    },
    numberChildren: {
        type: Number,
        required: true
    },
    room: {
        type: Number,
        required: true
    },
    room1Type: {
        type: String,
        required: true
    },
    room2Type: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    }
});


const bookingModel = new mongoose.model("Bookings", bookingSchema, "hotel_bookings");


export default bookingModel;