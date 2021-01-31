function fibonacci (n) {
  const array = [0, 1, 1];
  for (let index = 2; index < n; index++) {
    const num = array[index] + array[index - 1];
    array.push(num);
  }
  return array[n];
}
