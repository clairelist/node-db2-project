const express = require("express");
const server = express();
const carsRouter = require('./cars/carsRouter');

 server.use(express.json());

 server.use('./cars/cars-router', carsRouter);

module.exports = server;
