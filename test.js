var maxScore = function(s) {
  let max = 0;
  let total1 = s.replace(/0/g, '').length;
  let total0 = 0;
  for (let i = 0; i < s.length-1; i++) {
    s[i] === '0' ? total0++ : total1--;
    max = Math.max(max, total0 + total1);
  }
  return max;
};

console.log(maxScore('011101'));