function bucketSort(array, bucketSize = 5) {
  if (array.length < 2) {
    return array;
  }
  const buckets = createBuckets(array, bucketSize);
  return sortBucket(buckets);
}

function createBuckets(array, bucketSize) {
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) { // {4}
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1; // {5} const buckets = [];
  for (let i = 0; i < bucketCount; i++) { // {6}
    buckets[i] = [];
  }
  for (let i = 0; i < array.length; i++) { // {7}
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize); // {8} buckets[bucketIndex].push(array[i]);
  }
  return buckets;
}

function sortBuckets(buckets) {
  const sortedArray = []; // {9}
  for (let i = 0; i < buckets.length; i++) { // {10}
    if (buckets[i] != null) {
      insertionSort(buckets[i]); // {11} sortedArray.push(...buckets[i]); // {12}
    }
  }
  return sortedArray;
}