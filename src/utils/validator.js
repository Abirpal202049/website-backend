const jwt = require("jsonwebtoken");

module.exports.jwt = (token) => {
  try {
    jwt.verify(token, process.env.secret);
    return true;
  } catch {
    return false;
  }
};
