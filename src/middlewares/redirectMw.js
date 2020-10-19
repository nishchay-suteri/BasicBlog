const redirectLoginPageMW = (req,res,next)=>{
    if(!req.session.userId)
    {
        res.redirect('/login');
    }
    else
    {
        next();
    }
};

const redirectUserPageMW = (req,res, next) =>{
    if(req.session.userId)
    {
        res.redirect('/user');
    }
    else
    {
        next();
    }
}

module.exports = {
    redirectLoginPageMW,
    redirectUserPageMW
}