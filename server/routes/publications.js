const express = require("express");
const Router = express.Router();
const { getAllPublications } = require("../controllers/publications");

Router.get("/", getAllPublications);

module.exports = Router;
