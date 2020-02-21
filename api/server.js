const express = require("express");

const projectRouter = require("../router/projectRouter");

const server = express();

server.use(express.json());

server.use("/api/", projectRouter);

module.exports = server;
