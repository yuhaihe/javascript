const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(array, i, randomIndex);
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,0]
shuffle(arr);
console.log(arr.join(','));
shuffle(arr);
console.log(arr.join(','));