const express = require("express");
const { userController } = require("../controllers/baseControllers");
const { redirectLoginPageMW } = require("../middlewares/redirectMw");

const router = express.Router();

// GET /user
router.get("/", redirectLoginPageMW, userController);

module.exports = router;
