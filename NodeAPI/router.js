const express = require("express");
const router = express.Router();
const eventsController = require("./controllers/events")

router
    .get("/events",eventsController.list);

module.exports = router;