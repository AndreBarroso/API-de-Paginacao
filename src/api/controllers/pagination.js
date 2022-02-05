const validations = require('../services/validations');

const createArrayWithNumberOfPagination = async (req, res) => {
  const { currentPage, quantityPages } = req.body;
  const validateBody = validations.validateBody({ currentPage, quantityPages })
  if(validateBody) return res.status(400).json({error: validateBody});

  
 

  res.status(201).json({ message: 'True' });
};

module.exports = {
  createArrayWithNumberOfPagination
};