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

module.exports = {
  generateArrayThatShowAll,
  generateArrayThatShowParcialStartOrEndPages,
  generateArrayWithcurrentPageInTheMidle,
};
