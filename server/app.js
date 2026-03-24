const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

module.exports = app;
