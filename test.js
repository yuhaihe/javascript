var hammingWeight = function(n) {
  // n = String(n, 10);
  console.log(n)
  if(n.length !== 32) return;
  let count = 0;
  for(let i=0;i<n.length;i++){
      if(n[i] == 1){
          count++;
      }
  }
  return count
};

const res = hammingWeight(00000000000000000000000000001011);
console.log(res)