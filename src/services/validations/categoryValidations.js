const { categorySchema } = require('./validationSchemas');

const newCategoryValidation = (newCategoryData) => {
  const { error } = categorySchema.validate(newCategoryData);
  if (error) {
    return { status: 400, error: error.details[0].message };
  }
  return 'without errors';
};

module.exports = newCategoryValidation;