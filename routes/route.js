import express from "express";
import {
  saveSentEmails,
  getEmails,
  moveEmailsToBin,
  toggleStarredEmails,
  deleteEmails,
} from "../controllers/email-controller.js";

const routes = express.Router();

// Route to save sent emails
routes.post("/save", saveSentEmails);

// Route to get emails based on the type (e.g., bin, allmail, starred, etc.)
routes.get("/emails/:type", getEmails);

// Route to save drafts (Note: Reuses the same function as saveSentEmails)
routes.post("/save-draft", saveSentEmails);

// Route to move emails to the bin
routes.post("/bin", moveEmailsToBin);

// Route to toggle starred emails
routes.post("/starred", toggleStarredEmails);

// Route to delete emails
routes.delete("/delete", deleteEmails);

export default routes;
