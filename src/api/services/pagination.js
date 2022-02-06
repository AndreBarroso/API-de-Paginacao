const validations = require('../services/validations');

const generateArrayThatShowAll = (array, currentPage, quantityPages) => {
  for(let index = 0; index < quantityPages; index += 1) {
      let page = (index + 1).toString();
      if (page == currentPage) page = `**${page}**`;
      array.push(page);
  } 
}

const generateArrayThatShowParcialStartOrEndPages = (array, currentPage, quantityPages, limitNumbers) => {
  if(currentPage <= parseInt( 1 + limitNumbers / 2)) {
    for(let index = 0; index < limitNumbers ; index += 1) {
      let page = (index + 1).toString();
      if (page == currentPage) page = `**${page}**`;
      array.push(page);
    }
    return array.push('...');
  }

  array[0] = '...';
  for(let index = 1; index <= limitNumbers; index += 1 ) {
    let page = (quantityPages - limitNumbers + index).toString();
    if (page == currentPage) page = `**${page}**`;
    array.push(page);
  }
  return array;
}

const generateArrayWithcurrentPageInTheMidle = (array, currentPage, limitNumbers) => {
  array.push('...');
  for(let index = parseInt(currentPage - limitNumbers / 2); index < parseInt(currentPage + limitNumbers/ 2); index += 1 ) {
    let page = (index + 1).toString();
    if (page == currentPage) page = `**${page}**`;
    array.push(page);
  }
  array.push('...');
}

const createArrayWithNumberOfPagination =  ({currentPage, quantityPages}) => {
  const QUANTITY_NUMBERS_TO_SHOW = 5;
  let pages = [];
  if(quantityPages <= QUANTITY_NUMBERS_TO_SHOW) {
    generateArrayThatShowAll(pages, currentPage, quantityPages);
  }

  else if(currentPage - parseInt( QUANTITY_NUMBERS_TO_SHOW / 2) > 1 && currentPage + parseInt( QUANTITY_NUMBERS_TO_SHOW / 2) < quantityPages) {
    generateArrayWithcurrentPageInTheMidle(pages, currentPage, QUANTITY_NUMBERS_TO_SHOW);
  }

  else{generateArrayThatShowParcialStartOrEndPages(pages, currentPage, quantityPages, QUANTITY_NUMBERS_TO_SHOW);}

  return pages;
};

module.exports = {
  createArrayWithNumberOfPagination
};