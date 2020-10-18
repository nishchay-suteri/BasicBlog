const loginGetController = (req,res) => {
    // display form
    res.render('login');
}

const loginPostController = (req,res) => {
    // store to database
    // redirect
    res.redirect('/user');
    // res.render('register');
}

module.exports = {
    loginGetController,
    loginPostController
};