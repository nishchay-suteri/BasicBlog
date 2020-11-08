const BlogDAO = require("../dao/Blog");

const indexController = async (req, res) => {
  const blogs = await BlogDAO.getAllBlogs(req, res);
  res.render(`index`, { blogs: blogs, user: req.session.user });
};

module.exports = indexController;
