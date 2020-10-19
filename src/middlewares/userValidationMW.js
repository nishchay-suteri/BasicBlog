const {registerUserValidator, loginUserValidator} = require('../validations/user/UserValidation');

const registerUserValidationMW = (req,res,next) => {
    const {value, error} = registerUserValidator(req.body);
    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }
    else
    {
        next();
    }
}

const loginUserValidationMW = (req,res,next) => {
    const {value, error} = loginUserValidator(req.body);
    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }
    else
    {
        next();
    }
}

module.exports = {
    registerUserValidationMW,
    loginUserValidationMW
}