const express = require('express');
const { logoutPostController } = require('../controllers/baseControllers');
const { redirectLoginPageMW } = require('../middlewares/redirectMw');

const router = express.Router();

router.post('/', redirectLoginPageMW, logoutPostController);

module.exports = router;