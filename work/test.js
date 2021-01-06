function formatAmount(amount) {
  if (amount == null) {
    return '0';
  }
  if (typeof amount === 'number' && amount.toFixed) {
    amount = amount.toFixed(2);
  }
  amount = amount.split('').reverse().join('')
  amount = amount.replace(/(\d{3}(?=\d))/g, function($1, $2) {
    return $1 + ','
  })
  amount = amount.split('').reverse().join('')
  return amount;
}

console.log(formatAmount(14524123.32))