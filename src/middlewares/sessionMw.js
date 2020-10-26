// Installed Packages
const session = require('express-session');
const mongoose = require('mongoose');
const connectMongo = require('connect-mongo');

// Declared js files
const GLOBALS = require('../constants/globals');

// Variables
const MongoStore = connectMongo(session);

const sessionStore = new MongoStore({
    mongooseConnection: mongoose.connection, // NOTE: this can work before calling mongoose.connect().. But i think better to call connect() first[Not doing currently]
    collection: 'sessions'
});


const sessionMw = session({
    store: sessionStore,
    secret: GLOBALS.SESS_SECRET,
    resave: true,
    saveUninitialized: true,
    name: GLOBALS.SESSION_NAME,
    cookie: {
        maxAge: GLOBALS.SESS_LIFETIME, // Max Age of cookie in milli-seconds
        sameSite: true, // strict is almost same as true
        secure: GLOBALS.IN_PROD, // If this is true, only transfer cookies over https
        httpOnly: true // if true, prevents client side JS from reading the cookie
    }
});

module.exports = sessionMw;