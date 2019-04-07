const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();
const routesApp = require("../routes/index");

// Enable middleware do parse data to json.
app.use(express.json());

// Enable cors on app.
app.use(cors());

// Set routes app.
routesApp(app);

module.exports = app;

