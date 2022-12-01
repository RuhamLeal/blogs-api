const { loginSchema } = require('./validationSchemas');

const loginValidation = (loginData) => {
  const { error } = loginSchema.validate(loginData);
  if (error) {
    return { status: 400, error: error.details[0].message };
  }
  return 'without errors';
};

module.exports = {
  loginValidation,
};