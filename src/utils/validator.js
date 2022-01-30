const Joi = require("joi");
const jwt = require("jsonwebtoken");

const verify = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch {
    return null;
  }
};

module.exports.event = (event) =>
  Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    form: Joi.string().required(),
    date: Joi.date().required(),
  }).validate(event);

module.exports.serverToken = (token) => verify(token, process.env.serverToken);
module.exports.clientToken = (token) => verify(token, process.env.clientToken);
