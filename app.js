const express = require("express");
const parser = require("body-parser");
const bodyParser = require("body-parser");
const appServer = express();

// INJECTING MIDDLEWARE
appServer.use(bodyParser.json());
appServer.use(bodyParser.urlencoded({ extended: true }));

// INJECT ALL THE CONTROLLERS
appServer.use("/auth", require("./Controllers/User.controller"));
appServer.use("/restaurant", require("./Controllers/Restaurant.controller"));

module.exports = appServer;
