const {UserLoginSchema , UserRegisterSchema} = require('./UserSchema');

const registerUserValidator = (data)=>{
    return UserRegisterSchema.validate(data);
}

const loginUserValidator = (data)=>{
    return UserLoginSchema.validate(data);
}

module.exports = {
    registerUserValidator,
    loginUserValidator
};