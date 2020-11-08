const Joi = require("joi");

const emailValidationMessage = (errors) => {
  errors.forEach((err) => {
    if (err.code == "string.empty") {
      err.message = "Email is required";
    } else if (err.code == "string.email") {
      err.message = "Please provide a valid email";
    }
  });
  return errors;
};

const passwordValidationMessage = (errors) => {
  errors.forEach((err) => {
    if (err.code == "string.empty") {
      err.message = "Password is required";
    }
  });
  return errors;
};

const usernameValidationMessage = (errors) => {
  errors.forEach((err) => {
    if (err.code == "string.empty") {
      err.message = "Username is required";
    }
  });
  return errors;
};

const confirmPasswordValidationMessage = (errors) => {
  errors.forEach((err) => {
    if (err.code == "any.only") {
      err.message = "Password should match!";
    } else if (err.code == "string.empty") {
      err.message = "Confirm Password is required";
    }
  });
  return errors;
};

const UserLoginSchema = Joi.object({
  userEmail: Joi.string().email().required().error(emailValidationMessage),
  userPassword: Joi.string().required().error(passwordValidationMessage),
});

const UserRegisterSchema = Joi.object({
  userName: Joi.string().required().error(usernameValidationMessage),
  userEmail: Joi.string().email().required().error(emailValidationMessage),
  userPassword: Joi.string().required().error(passwordValidationMessage),
  userConfirmPassword: Joi.string()
    .required()
    .valid(Joi.ref("userPassword"))
    .error(confirmPasswordValidationMessage),
});

module.exports = {
  UserLoginSchema,
  UserRegisterSchema,
};
