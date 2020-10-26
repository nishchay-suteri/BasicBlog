const userController = (req,res) => {
    console.log(req.flash('info'));
    res.render('user', {user: req.session.user});
}

module.exports = userController;