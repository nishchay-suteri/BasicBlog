// Predefined packages
const path = require('path');

// Installed Packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Declared js files
const GLOBALS = require('./constants/globals');
const sessionMw = require('./middlewares/sessionMw');
const { indexRouter , loginRouter, registerRouter, userRouter } = require('./routes/baseRoutes');

// Variables
const app = express();

// Middlewares
app.use(cors({optionsSuccessStatus: 200}));

// CONFIGUURE SESSION
// if running the code behind proxy(Nginx), use following:-
// app.set('trust-proxy', 1); // => Since behind proxy, we'll be using http (NOT https), but our cookie is configured "Secure"(Secure: IN_PROD)

app.use(sessionMw);
app.use(express.static(path.join(__dirname, '../public'))); // To serve static contents
app.use(express.json()); // Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({extended: true})); // Parse URL-encoded bodies (as sent by HTML forms)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Mongoose Warning Resolution
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

// Middlewares - Routes
app.use(indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/user', userRouter);


// DB Connection
/*
* Mongoose creates a default connection when you call mongoose.connect(). 
* You can access the default connection using mongoose.connection.
* The alternative of mongoose.connect() and mongoose.connection combination can be:-
* const conn = mongoose.createConnection((DB_URI). Now conn is same as mongoose.connection in previous eg
* createConnection() is generally used for multiple DB Connections
*/
mongoose.connect(GLOBALS.DB_URI, ()=>{
    console.log(`Connected to DB!`);
    // Server Start
    app.listen(GLOBALS.SERVER_PORT, ()=>console.log(`Server is running on port ${GLOBALS.SERVER_PORT}`));
});