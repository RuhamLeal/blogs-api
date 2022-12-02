const { Category, sequelize } = require('../models/index');
const newCategoryValidation = require('./validations/categoryValidations');

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

    await createCategoryInDb(newCategoryData);

    const addedCategory = await Category.findOne({ where: { name: newCategoryData.name } });

    return { status: 201, data: addedCategory.dataValues };
  } catch (err) {
    return { status: 500, data: { message: err.message } };
  }
};

module.exports = {
  createCategory,
};