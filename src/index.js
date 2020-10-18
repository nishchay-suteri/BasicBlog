// Express Packages
const express = require('express');

// Declared js files
const GLOBALS = require('./constants/globals');
const { indexRouter , loginRouter, registerRouter, userRouter } = require('./routes/baseRoutes');

// Variables
const app = express();

// Middlewares
app.use(express.json());

// Middlewares - Routes
app.use(indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/user', userRouter);

// Server Start
app.listen(GLOBALS.SERVER_PORT, ()=>console.log(`Server is running on port ${GLOBALS.SERVER_PORT}`));