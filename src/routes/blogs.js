const express = require("express");
const {
  newBlogGetController,
  newBlogPostController,
  createdBlogGetController,
  editBlogGetController,
  deleteBlogPostController,
  editBlogPostController,
} = require("../controllers/baseControllers");
const { redirectLoginPageMW } = require("../middlewares/redirectMw");

const router = express.Router();

router.get("/new", redirectLoginPageMW, newBlogGetController);
router.post("/new", redirectLoginPageMW, newBlogPostController);

router.get("/:blogId", createdBlogGetController);

router.get("/edit/:blogId", redirectLoginPageMW, editBlogGetController);
router.post("/edit/:blogId", redirectLoginPageMW, editBlogPostController);

router.post("/delete/:blogId", redirectLoginPageMW, deleteBlogPostController);

module.exports = router;
