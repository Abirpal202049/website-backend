const { Router } = require("express");

const admin = require("./admin");
const events = require("./events");

const router = Router();

router.use("/admin", admin);
router.use("/events", events);

module.exports = router;
