const express = require('express');
const { loginController } = require('../controllers/baseControllers');

const router = express.Router();

// GET /login
router.get('/', loginController);

module.exports = router;