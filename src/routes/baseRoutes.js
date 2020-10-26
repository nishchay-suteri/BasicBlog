const indexRouter = require('./index');
const loginRouter = require('./login');
const registerRouter = require('./register');
const userRouter = require('./user');
const blogsRouter = require('./blogs');

module.exports = {
    indexRouter,
    loginRouter,
    registerRouter,
    userRouter,
    blogsRouter
};