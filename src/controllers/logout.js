const GLOBALS = require('../constants/globals')
const logoutPostController = async (req,res) => {
    try{
        await req.session.destroy();
        res.clearCookie(GLOBALS.SESSION_NAME);
        return res.redirect('/login');
    }
    catch(err)
    {
        return res.status(400).send(`Server Error`);
    }
}

module.exports = {
    logoutPostController
};