const indexController = require('./index');
const userController = require('./user');
const {loginPostController, loginGetController} = require('./login');
const {registerGetController, registerPostController} = require('./register');

module.exports = {
    indexController,
    userController,
    loginGetController,
    loginPostController,
    registerGetController,
    registerPostController
}