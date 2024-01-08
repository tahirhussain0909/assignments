const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const username = req.headers.username;
  const password = req.headers.password;

  try {
    await User.findOne({
      username: username,
      password: password,
    });
    next();
  } catch (error) {
    res.status(403).json({
      msg: "UnAuthorized Wrong username & password",
    });
  }
}

module.exports = userMiddleware;
