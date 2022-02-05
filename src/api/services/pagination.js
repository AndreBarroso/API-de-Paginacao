const validations = require('./validations');

const validations = require('../services/validations');

const createArrayWithNumberOfPagination = async (req, res) => {
  const { currentPage, quantityPages } = req.body;

  return res.status(400).json({ message: 'Invalid entries. Try again.' });
 

  res.status(201).json(CreateRecipes);
};

module.exports = {
  createArrayWithNumberOfPagination
};