const { Router } = require("express");

const controller = require("../controllers/admin");

const routes = Router();

routes.post("/login", controller.login);

routes.post("/logout", controller.logout);

module.exports = routes;
