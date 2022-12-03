const Joi = require('joi');

const requiredText = 'Some required fields are missing';

const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .messages({
      'string.empty': requiredText,
      'any.required': requiredText,
    })
    .required(),

  password: Joi.string()
  .required()
  .messages({
    'string.empty': requiredText,
    'any.required': requiredText,
  }),
});

const userSchema = Joi.object({
  displayName: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.min': '"displayName" length must be at least 8 characters long',
      'any.required': requiredText,
    }),
    email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': '"email" must be a valid email',
      'any.required': requiredText,
    }),
    password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': '"password" length must be at least 6 characters long',
      'any.required': requiredText,
    }),
    image: Joi.string(),
});

const categorySchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({
      'string.empty': '"name" is required',
      'any.required': '"name" is required',
    }),
});

const postSchema = Joi.object({
  title: Joi.string()
    .required()
    .messages({
      'string.empty': requiredText,
      'any.required': requiredText,
    }),
  content: Joi.string()
    .required()
    .messages({
      'string.empty': requiredText,
      'any.required': requiredText,
    }),
  categoryIds: Joi.array()
    .required()
    .messages({
      'array.empty': requiredText,
      'any.required': requiredText,
    }),
});

const updatePostSchema = Joi.object({
  title: Joi.string()
    .required()
    .messages({
      'string.empty': requiredText,
      'any.required': requiredText,
    }),
  content: Joi.string()
    .required()
    .messages({
      'string.empty': requiredText,
      'any.required': requiredText,
    }),
});

module.exports = {
  loginSchema,
  userSchema,
  categorySchema,
  postSchema,
  updatePostSchema,
};