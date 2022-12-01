const { User } = require('../models/index');
const generateToken = require('./authorizations/jwtGenerate');
const { loginValidation } = require('./validations/userValidations');

const logUser = async (loginData) => {
  try {
    const validationMessage = loginValidation(loginData);
  
    if (validationMessage !== 'without errors') {
      return { status: validationMessage.status, data: { message: validationMessage.error } };
    }

    const response = await User.findOne(
      { where: { email: loginData.email, password: loginData.password } },
    );

    if (!response) return { status: 400, data: { message: 'Invalid fields' } };

    return {
      status: 200, data: { token: generateToken({ userId: response.dataValues.id }) },
    };
  } catch (err) {
    return { status: 400, data: { message: err.message } };
  }
};

module.exports = {
  logUser,
};