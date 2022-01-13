const jwt = require("jsonwebtoken");
const { nanoid } = require("nanoid");

module.exports.secret = () => {
  process.env.secret = nanoid(256);
};

module.exports.token = () => jwt.sign({}, process.env.secret);
