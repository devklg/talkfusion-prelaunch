const express = require("express");
const router = express.Router();
const { getEarnings } = require("../controllers/earningsController");
router.get("/:id", getEarnings);
module.exports = router; 