const {
  generateArrayThatShowAll,
  generateArrayThatShowParcialStartOrEndPages,
  generateArrayWithcurrentPageInTheMidle
} = require('./utils')
 
const createArrayWithNumberOfPagination =  ({currentPage, quantityPages}) => {
  const QUANTITY_NUMBERS_TO_SHOW = 5;
  let pages = [];
  if(quantityPages <= QUANTITY_NUMBERS_TO_SHOW) {
    generateArrayThatShowAll(pages, currentPage, quantityPages);
  }

  else if(
    currentPage - parseInt( QUANTITY_NUMBERS_TO_SHOW / 2) > 1 
    && currentPage + parseInt( QUANTITY_NUMBERS_TO_SHOW / 2) < quantityPages
  ) {
    generateArrayWithcurrentPageInTheMidle(pages, currentPage, QUANTITY_NUMBERS_TO_SHOW);
  }

  else{
    generateArrayThatShowParcialStartOrEndPages(pages, currentPage, quantityPages, QUANTITY_NUMBERS_TO_SHOW);
  }

  return pages;
};

module.exports = {
  createArrayWithNumberOfPagination
};
