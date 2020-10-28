const bcrypt = require('bcrypt');
const UserDAO = require('../dao/User');


const loginGetController = (req,res) => {
    // display form
    res.render('login', {serverError : req.flash('serverError'), user: req.session.user});
}

const loginPostController = async (req,res) => {
    try{
        // CHECK IF USER IS ALAREDY THERE
        const user = await UserDAO.findUserByEmail(req,res);
        if(!user)
        {
            req.flash('serverError', `User doesn't exist!`);
            return res.redirect('/login');
        }
        const isValidPassword = await bcrypt.compare(req.body.userPassword,user.userPassword);
        if(!isValidPassword)
        {
            req.flash('serverError', 'Email/password Wrong');
            return res.redirect('/login');
        }
        req.session.user = user;
        return res.redirect('/user');
    }
    catch(err)
    {
        return res.status(400).send(`Server Error`);
    }
}

module.exports = {
    loginGetController,
    loginPostController
};