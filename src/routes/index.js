const { Router } = require("express");

const admin = require("./admin");
const event = require("./event");

const routes = Router();

routes.use("/admin", admin);
routes.use("/event", event);

module.exports = routes;
