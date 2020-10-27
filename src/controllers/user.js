const userController = (req,res) => {
    res.render('user', {user: req.session.user});
}

module.exports = userController;