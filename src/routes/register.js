const express = require('express');
const { registerGetController, registerPostController } = require('../controllers/baseControllers');
const { registerUserMiddleware } = require('../middlewares/userValidationMW');

const router = express.Router();

// GET /register
router.get('/', registerGetController);

// POST /register
/*
{
    "userName": "Hello",
"userEmail" : "nishchay@gmail.com",
"userPassword" : "hello",
"userConfirmPassword": "hello"
}
*/
router.post('/', registerUserMiddleware, registerPostController);


module.exports = router;