const indexController = require('./index');
const userController = require('./user');
const {loginPostController, loginGetController} = require('./login');
const {logoutPostController} = require('./logout');
const {registerGetController, registerPostController} = require('./register');
const {newBlogGetController, newBlogPostController, createdBlogGetController, deleteBlogPostController, editBlogGetController, editBlogPostController} = require('./blog');

module.exports = {
    indexController,
    userController,
    loginGetController,
    loginPostController,
    registerGetController,
    registerPostController,
    newBlogGetController,
    newBlogPostController,
    createdBlogGetController,
    editBlogGetController,
    editBlogPostController,
    deleteBlogPostController,
    logoutPostController
}