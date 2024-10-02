// database/db.js
import mongoose from "mongoose";
import dotenv from "dotenv"; // Import dotenv to load environment variables

dotenv.config(); // Load the .env file

const Connection = () => {
  const DB_URI = process.env.DB_URI; // Get the DB_URI from environment variables

  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log("Error while connecting with the database", error.message);
    });
};

export default Connection;
