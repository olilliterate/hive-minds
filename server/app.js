// Grab dependencies
const express = require("express");
const cors = require("cors");
const path = require("path");

// Grab routes
const userRoutes = require("./routes/user");
const resultRoutes = require("./routes/result");
const mcqRoutes = require("./routes/mcq");
const gamesRoutes = require('./routes/games')
const flashcardRoutes = require("./routes/flashcard");

//Define app is an express application
const app = express();

//Define middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client")));

//Link end points to router
app.use("/user", userRoutes);
app.use("/result", resultRoutes);
app.use("/mcq", mcqRoutes);
app.use("/games", gamesRoutes);
app.use("/flashcard", flashcardRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

module.exports = app;
