require("dotenv").config();
const express = require("express");

const cors = require("cors");
const path = require("path");

const SendUserEmail = require("./mail");
const validate = require("./validate");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../front/build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../front/build/index.html"));
});
app.use(cors());

app.post("/api", async (req, res) => {
  const { email, subject, text, name } = req.body;

  const value = validate(email, subject, text, name);

  if (value !== undefined) {
    res.status(400);
    return;
  }

  SendUserEmail(email, subject, text, name, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).json({ msg: err });
    } else {
      res.status(200).json({ msg: "Thank You" });
    }
  });
});

app.listen(process.env.PORT || 8080, console.log("Server running 🐊 ⌛"));
