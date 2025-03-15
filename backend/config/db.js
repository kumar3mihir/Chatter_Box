// /backend/config/db.js

const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`.red.bold);
    process.exit(1); // Stop the server if DB connection fails
  }
};

module.exports = connectDB;




