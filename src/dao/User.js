const bcrypt = require('bcrypt');
const User = require('../models/User');

const findUserByEmail = async (req,res) => {
    try{
        const user = await User.findOne({userEmail: req.body.userEmail});
        return user;
    }
    catch(err)
    {
        return res.status(400).json({message: err});
    }
}

const createUser = async (req,res) => {
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
        return createdUser;
    }
    catch(err){
        return res.status(400).send(`Server Error!`);
    }
}

module.exports = {
    findUserByEmail,
    createUser
}