const express = require("express");
const cors = require("cors");
const path = require("path");
const userRouter = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

module.exports = app;
