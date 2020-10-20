const bcrypt = require('bcrypt');
const User = require('../models/User');


const registerGetController = (req,res) => {
    // display form
    res.render('register');
}

const registerPostController = async (req,res) => {
    // store to database
    try
    {
        // CHECK IF USER IS ALAREDY THERE
        const emailExist = await User.findOne({userEmail: req.body.userEmail});
        if(emailExist)
        {
            return res.status(400).send(`${req.body.userEmail} already exists`);
        }

        // HASH THE PASSWORD
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.userPassword, salt);

        // CREATE New User
        const user = new User({
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPassword: hashedPassword
        });

        try{
            // SEND DATA TO DB TO STORE USER
            const createdUser = await user.save();
            // redirect
            return res.redirect(`/user`);
        }
        catch(err){
            return res.status(400).send(`Server Error!`);
        }
        
    }
    catch(err)
    {
        return res.status(400).json({message: err});
    }
}

module.exports = {
    registerGetController,
    registerPostController
};