const redirectLoginPageMW = (req, res, next) => {
  if (!req.session.user) {
    res.redirect("/login");
  } else {
    next();
  }
};

const redirectUserPageMW = (req, res, next) => {
  if (req.session.user) {
    res.redirect("/user");
  } else {
    next();
  }
};

module.exports = {
  redirectLoginPageMW,
  redirectUserPageMW,
};
