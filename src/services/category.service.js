const { Category, sequelize } = require('../models/index');
const newCategoryValidation = require('./validations/categoryValidations');

const findAllCategories = async () => {
  try {
    const response = await Category.findAll();

    const categories = response.map((category) => category.dataValues);

    return { status: 200, data: categories };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
};

const createCategoryInDb = async ({ name }) => {
  const result = await sequelize.transaction(async (transaction) => {
    const newCategory = await Category.create(
      { name },
      { transaction },
    );
    return newCategory;
  });
  return result;
};

const createCategory = async (newCategoryData) => {
  try {
    const validationMessage = newCategoryValidation(newCategoryData);
  
    if (validationMessage !== 'without errors') {
      return { status: validationMessage.status, data: { message: validationMessage.error } };
    }

    const addedCategory = await createCategoryInDb(newCategoryData);

    return { status: 201, data: addedCategory.dataValues };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
};

module.exports = {
  createCategory,
  findAllCategories,
};