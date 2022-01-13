const cookie = require("../utils/cookie");
const generate = require("../utils/generate");
const validator = require("../utils/validator");

module.exports.login = (req, res) => {
  const token = req.cookies["admin-token"];

  if (token && validator.jwt(token))
    return res.status(405).json({ error: "Already Logged In" });

  if (req.body.passcode === process.env.adminPass)
    return res
      .cookie("admin-token", generate.token(), cookie.options())
      .sendStatus(200);

  res.sendStatus(406);
};

module.exports.logout = (req, res) => {
  const token = req.cookies["admin-token"];

  res.clearCookie("admin-token", cookie.options(0));

  if (token && validator.jwt(token)) res.sendStatus(200);
  else res.sendStatus(405);
};
