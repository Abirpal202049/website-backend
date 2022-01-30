const cookie = require("../utils/cookie");
const validator = require("../utils/validator");

const getToken = (auth) => auth && auth.split(" ")[1];

const authenticate = (cookieName) => (req, res, next) => {
  const clientToken = getToken(req.headers.authorization);
  const serverToken = req.cookies[cookieName];

  if (!serverToken || !clientToken)
    return res.status(401).json({ error: "Please login to continue" });

  if (
    !validator.clientToken(clientToken) ||
    !validator.serverToken(serverToken)
  )
    return res
      .status(403)
      .clearCookie(cookieName, cookie.options(0))
      .json({ error: "Invalid Token! Login Again" });

  req.user = validator.serverToken(serverToken);

  next();
};

module.exports.admin = authenticate("admin-token");
