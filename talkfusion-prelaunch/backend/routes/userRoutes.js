const express = require("express");
const router = express.Router();
const { getDashboardData } = require("../controllers/userController");

router.get("/dashboard", getDashboardData);

module.exports = router; 