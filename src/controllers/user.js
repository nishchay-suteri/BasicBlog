const userController = (req,res) => {
    // console.log(req.session.user.userName);
    res.render('user')
}

module.exports = userController;