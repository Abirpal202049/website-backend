const cookie = require("../utils/cookie");
const generate = require("../utils/generate");
const validator = require("../utils/validator");

const getToken = (auth) =>
  auth && auth.split(" ")[0] === "Bearer" && auth.split(" ")[1];

module.exports.login = (req, res) => {
  const clientToken = getToken(req.headers.authorization);
  const serverToken = req.cookies["admin-token"];

  if (validator.serverToken(serverToken) && validator.clientToken(clientToken))
    return res.status(405).json({ error: "Already Logged In" });

  if (req.body.passcode === process.env.adminPass)
    return res
      .status(200)
      .cookie("admin-token", generate.serverToken(), cookie.options())
      .json({ accessToken: generate.clientToken() });

  res.status(406).json({ error: "Authntication Failed" });
};

module.exports.logout = (req, res) => {
  const clientToken = getToken(req.headers.authorization);
  const serverToken = req.cookies["admin-token"];

  res.clearCookie("admin-token", cookie.options(0));

  if (validator.serverToken(serverToken) && validator.clientToken(clientToken))
    return res.status(200).json({ message: "Logged Out Successfully" });

  res.status(405).json({ error: "Already Logged Out" });
};
