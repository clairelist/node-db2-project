const express = require("express");
const server = express();
const carsRouter = require('./cars/carsRouter');

// DO YOUR MAGIC
 server.use(express.json());

 server.use('./cars/cars-router', carsRouter); // --> commented out until I build it

module.exports = server;
