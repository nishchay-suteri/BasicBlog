const express = require("express");
const {
  loginGetController,
  loginPostController,
} = require("../controllers/baseControllers");
const { loginUserValidationMW } = require("../middlewares/userValidationMW");
const { redirectUserPageMW } = require("../middlewares/redirectMw");

const router = express.Router();

// GET /login
router.get("/", redirectUserPageMW, loginGetController); // if user already logged in, redirect to user page

// GET /login
router.post(
  "/",
  redirectUserPageMW,
  loginUserValidationMW,
  loginPostController
);

module.exports = router;
