function getCurrencySymbol(currency) {
  switch (currency) {
    case 'USD':
    default: return '$';
  }
}

function getPrice(word) {
  const value = word.replace(/(?:(?!(\S+\d+))\D.+)*$/g, '').replace(/\D/g, '');
  const number = Number.parseFloat(value).toFixed(2);
  if (number === 'NaN') return 'Invalid';
  return number;
}

function numberWithSplitter(number, splitter = ',') {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, splitter);
}

export {
  getCurrencySymbol,
  getPrice,
  numberWithSplitter,
};
