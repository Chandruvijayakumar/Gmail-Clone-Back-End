import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/route.js";
import connectDB from "./database/db.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Use API routes
app.use("/", routes);

// Set the port
const PORT = process.env.PORT || 5000; // Use the PORT from .env or default to 5000

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
