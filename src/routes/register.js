const express = require("express");
const {
  registerGetController,
  registerPostController,
} = require("../controllers/baseControllers");
const { registerUserValidationMW } = require("../middlewares/userValidationMW");
const { redirectUserPageMW } = require("../middlewares/redirectMw");

const router = express.Router();

// GET /register
router.get("/", redirectUserPageMW, registerGetController);

// POST /register
/*
{
    "userName": "Hello",
"userEmail" : "nishchay@gmail.com",
"userPassword" : "hello",
"userConfirmPassword": "hello"
}
*/
router.post(
  "/",
  redirectUserPageMW,
  registerUserValidationMW,
  registerPostController
);

module.exports = router;
