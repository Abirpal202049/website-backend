const Joi = require("joi");
const jwt = require("jsonwebtoken");

module.exports.event = (event) =>
  Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    form: Joi.string().required(),
    date: Joi.date().required(),
  }).validate(event);

module.exports.jwt = (token) => {
  try {
    jwt.verify(token, process.env.secret);
    return true;
  } catch {
    return false;
  }
};
