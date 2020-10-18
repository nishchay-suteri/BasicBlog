// Predefined packages
const path = require('path');

// Installed Packages
const express = require('express');
const cors = require('cors');

// Declared js files
const GLOBALS = require('./constants/globals');
const { indexRouter , loginRouter, registerRouter, userRouter } = require('./routes/baseRoutes');

// Variables
const app = express();

// Middlewares
app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static(path.join(__dirname, '../public'))); // To serve static contents
app.use(express.json()); // Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({extended: true})); // Parse URL-encoded bodies (as sent by HTML forms)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// Middlewares - Routes
app.use(indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/user', userRouter);

// Server Start
app.listen(GLOBALS.SERVER_PORT, ()=>console.log(`Server is running on port ${GLOBALS.SERVER_PORT}`));