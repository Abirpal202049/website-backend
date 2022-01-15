const { Router } = require("express");

const admin = require("./admin");
const event = require("./event");

const router = Router();

router.use("/admin", admin);
router.use("/event", event);

module.exports = router;
