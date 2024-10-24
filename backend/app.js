require("dotenv").config();
const express = require("express");

mongoose = require("mongoose");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// Connect based on the .env file parameters.
mongoose.connect(process.env.MONGODB_CONNECT_STRING);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
  if (err) {
    res.status(500).json({ Error: "Unable to connect with MongoDB." });
  } else {
    console.log("Success: Database connection successful.");
  }
});

// Retrieve controllers
app.get("/", (req, res) => {
  res.send("Server works");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
