const registerGetController = (req,res) => {
    // display form
    res.render('register');
}

const registerPostController = (req,res) => {
    // store to database
    // redirect
    res.redirect('/user');
    // res.render('register');
}

module.exports = {
    registerGetController,
    registerPostController
};