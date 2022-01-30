const jwt = require("jsonwebtoken");
const { nanoid } = require("nanoid");

const token = (payload, secret) =>
  jwt.sign(payload, secret, { expiresIn: "24h" });

module.exports.secret = () => {
  process.env.serverToken = nanoid(256);
  process.env.clientToken = nanoid(512);
};

module.exports.serverToken = () =>
  token((payload = {}), process.env.serverToken);
module.exports.clientToken = () =>
  token((payload = {}), process.env.clientToken);
