const express = require("express");
const router = express.Router();
const { getSignups, createSignup } = require("../controllers/signupController");

// GET route for fetching signups
router.get("/", getSignups);

// POST route for form submission
router.post("/", createSignup);

module.exports = router; 