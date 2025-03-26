
require('dotenv').config({ path: 'config.env' });
const mongoose = require('mongoose')

const connection = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI
        if (!MONGO_URI) {
            throw new Error("MONGO_URI is undefined. Check your .env file.")
        }
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
}

module.exports = connection
