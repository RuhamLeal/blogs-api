const categoryService = require('../services/category.service');

const addCategory = async (req, res) => {
  const categoryData = req.body;
  const { status, data } = await categoryService.createCategory(categoryData);
  return res.status(status).json(data);
};

module.exports = {
  addCategory,
};