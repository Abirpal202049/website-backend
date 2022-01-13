const jwt = require("jsonwebtoken");

const cookie = require("../utils/cookie");

const authenticate = (cookieName) => (req, res, next) => {
  const token = req.cookies[cookieName];

  if (!token)
    return res.status(401).json({ error: "Please login to continue" });

  try {
    req.user = jwt.verify(token, process.env.secret);

    next();
  } catch (error) {
    res
      .status(403)
      .clearCookie(cookieName, cookie.options(0))
      .json({ error: "Invalid Token! Login Again" });
  }
};

module.exports.admin = authenticate("admin-token");
