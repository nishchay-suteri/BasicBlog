const express = require('express');

const { indexController } = require('../controllers/baseControllers')

const router = express.Router();

// GET /
router.get('/', indexController);

module.exports = router;