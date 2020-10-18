const express = require('express');
const { loginGetController, loginPostController } = require('../controllers/baseControllers');
const { loginUserMiddleware } = require('../middlewares/userValidationMW');

const router = express.Router();

// GET /login
router.get('/', loginGetController);

// GET /login
router.post('/', loginUserMiddleware, loginPostController);


module.exports = router;