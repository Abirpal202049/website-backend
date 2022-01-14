const jwt = require("jsonwebtoken");
const { nanoid } = require("nanoid");

module.exports.secret = () => {
  process.env.secret = nanoid(256);
};

module.exports.token = (payload = {}) => jwt.sign(payload, process.env.secret);
