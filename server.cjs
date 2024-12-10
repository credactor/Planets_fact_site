const express = require("express");
// const router = require("./routes/router.cjs");
const planetData = require('./config/data.json');
// require("dotenv").config();
// const path = require("path");

const app = express();

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

/** body-parser */
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  // res.setHeader('Content-Type', 'text/html');
  next();
});

// app.use("/", router);

app.get('/planets', (req, res) => {
  res.json(planetData);
});

// app.use("/", express.static(__dirname + "/public"));
