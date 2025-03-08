const mongoose = require('mongoose');
// require("dotenv").config();
// const dotenv = require('dotenv');
// dotenv.config();


const databaseConnection = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://benokafor67:@cluster0.uqlkm.mongodb.net/"
        );
        console.log('Database connection started successfully');
    } catch (err) {
        console.log('Database connection failed:', err.message);
        process.exit(1);
    }
}

module.exports = databaseConnection;
