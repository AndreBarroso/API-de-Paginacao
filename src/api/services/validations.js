const Joi = require('joi');
const validateBody = ({currentPage, quantityPages}) => {

  const { error } = Joi.object({
    currentPage: Joi.number().integer().greater(0).required(),
    quantityPages: Joi.number().integer().greater(currentPage -1).required(),
  }).validate({currentPage, quantityPages});
  if (error) return error.details[0].message;
 
  return false;
};

module.exports = {
  validateBody,
};