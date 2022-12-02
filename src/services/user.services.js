const { User, sequelize } = require('../models/index');
const generateToken = require('./authorizations/jwtGenerate');
const { loginValidation, newUserValidation } = require('./validations/userValidations');

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
    return { status: 500, data: { message: err.message } };
  }
};

const findAllUsers = async () => {
  try {
    const users = await User.findAll();

    const usersWithoutPasswords = users.map(({ id, displayName, email, image }) => (
      { id, displayName, email, image }
    ));

    return { status: 200, data: usersWithoutPasswords };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
};

const createUserInDb = async ({ displayName, password, email, image }) => {
  const result = await sequelize.transaction(async (transaction) => {
    const newUser = await User.create(
      { displayName, password, email, image },
      { transaction },
    );
    return newUser;
  });
  return result;
};

const createUser = async (userData) => {
  try {
    const validationMessage = newUserValidation(userData);
  
    if (validationMessage !== 'without errors') {
      return { status: validationMessage.status, data: { message: validationMessage.error } };
    }

    const userAlreadyExists = await User.findOne(
      { where: { email: userData.email } },
    );

    if (userAlreadyExists) return { status: 409, data: { message: 'User already registered' } };

    await createUserInDb(userData); // VERIFICAR

    return { status: 201, data: { token: generateToken() } };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
};

module.exports = {
  logUser,
  createUser,
  findAllUsers,
};