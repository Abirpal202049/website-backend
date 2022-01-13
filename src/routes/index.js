const { Router } = require("express");

const admin = require("./admin");

const routes = Router();

routes.use("/admin", admin);

module.exports = routes;
