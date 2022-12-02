const categoryService = require('../services/category.service');

const addCategory = async (req, res) => {
  const categoryData = req.body;
  const { status, data } = await categoryService.createCategory(categoryData);
  return res.status(status).json(data);
};

const getCategories = async (_req, res) => {
  const { status, data } = await categoryService.findAllCategories();
  return res.status(status).json(data);
};

module.exports = {
  addCategory,
  getCategories,
};