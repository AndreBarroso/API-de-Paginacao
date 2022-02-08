const Joi = require('joi');

const validateBody = ({currentPage, quantityPages}) => {
  let decrementCurrentPage = 0;
  if(currentPage && typeof(currentPage) == 'number') decrementCurrentPage = currentPage -1;
  const { error } = Joi.object({
    currentPage: Joi.number().integer().greater(0).required(),
    quantityPages: Joi.number().integer().greater(decrementCurrentPage).required(),
  }).validate({currentPage, quantityPages});
  if (error) return error.details[0].message;
  return false;
};

module.exports = {
  validateBody,
};
