const { Router } = require("express");

const auth = require("../middlewares/authenticate");

const controller = require("../controllers/events");

const router = Router();

// Get All Events
router.get("/", controller.getAll);

// Create New Event
router.post("/add", auth.admin, controller.add);

// Update Specific Event Based On It's ID
router.put("/update/:id", auth.admin, controller.update);

// Dete Specifit Event Based On It's ID
router.delete("/delete/:id", auth.admin, controller.delete);

module.exports = router;
