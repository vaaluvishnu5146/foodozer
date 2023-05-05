const express = require("express");
const nodeServer = express();
const PORT = 5000;
const HOST = "localhost";

// INJECTING APP SERVER
nodeServer.use("/", require("./app"));

// CONFIGURE THE MIDDLEWARES

// INJECT NODE APPLICATION

nodeServer.listen(PORT, HOST, () => {
  require("./dbConfig");
});
