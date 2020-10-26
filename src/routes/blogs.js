const express = require('express');
const {newBlogGetController, newBlogPostController, createdBlogGetController, editBlogGetController, deleteBlogPostController, editBlogPostController} = require('../controllers/baseControllers');

const router = express.Router();

router.get('/new', newBlogGetController);
router.post('/new', newBlogPostController);

router.get('/:blogId', createdBlogGetController);

router.get('/edit/:blogId', editBlogGetController);
router.post('/edit/:blogId', editBlogPostController);

router.post('/delete/:blogId', deleteBlogPostController);

module.exports = router;
