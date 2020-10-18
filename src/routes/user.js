const express = require('express');
const { userController } = require('../controllers/baseControllers');

const router = express.Router();

// GET /user
router.get('/', userController);

module.exports = router;