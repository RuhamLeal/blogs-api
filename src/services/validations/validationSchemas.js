const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .messages({
      'string.empty': 'Some required fields are missing',
      'any.required': 'Some required fields are missing',
    })
    .required(),

  password: Joi.string()
  .required()
  .messages({
    'string.empty': 'Some required fields are missing',
    'any.required': 'Some required fields are missing',
  }),
});

module.exports = {
  loginSchema,
};