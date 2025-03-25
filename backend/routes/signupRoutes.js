const express = require("express");
const router = express.Router();
const { getSignups } = require("../controllers/signupController");
router.get("/", getSignups);
module.exports = router; 