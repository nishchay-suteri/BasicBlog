const express = require('express');
const { registerController } = require('../controllers/baseControllers');

const router = express.Router();

// GET /register
router.get('/', registerController);

module.exports = router;