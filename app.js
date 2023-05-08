const express = require("express");
const bodyParser = require("body-parser");
const appServer = express();
const cors = require("cors");

// ENABLING CORS - CROSS ORIGIN RESOUIRCE SHARING
appServer.use(cors());

// INJECTING MIDDLEWARE
appServer.use(bodyParser.json());
appServer.use(bodyParser.urlencoded({ extended: true }));

// INJECT ALL THE CONTROLLERS
appServer.use("/auth", require("./Controllers/User.controller"));
appServer.use("/restaurant", require("./Controllers/Restaurant.controller"));
appServer.use("/food", require("./Controllers/Food.controller"));

module.exports = appServer;
