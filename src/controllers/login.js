const bcrypt = require('bcrypt');
const UserDAO = require('../dao/User');


const loginGetController = (req,res) => {
    // display form
    res.render('login');
}

const loginPostController = async (req,res) => {
    try{
        // CHECK IF USER IS ALAREDY THERE
        const user = await UserDAO.findUserByEmail(req,res);
        if(!user)
        {
            return res.status(400).send(`User doesn't Exist`);
        }
        const isValidPassword = await bcrypt.compare(req.body.userPassword,user.userPassword);
        if(!isValidPassword)
        {
            return res.status(400).send(`Password Wrong`);
        }
        req.session.user = user;
        return res.redirect('/user');
    }
    catch(err)
    {
        return res.json(err);
        // return res.status(400).send(`Server Error`);
    }
}

module.exports = {
    loginGetController,
    loginPostController
};