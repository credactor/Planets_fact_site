const express = require("express");
// const router = require("./routes/router.cjs");
const planetData = require('./config/data.json');
// require("dotenv").config();
const path = require("path");
const cors = require('cors');

const app = express();

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

/** body-parser */
app.use(express.json());
app.use(cors());

// app.use("/", router);
// app.use('/assets', express.static(path.join(__dirname, './config/assets')));
app.get('/planets', (req, res) => {
  res.json(planetData);
});

// app.use("/", express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, "./dist")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./dist", "index.html"));
});