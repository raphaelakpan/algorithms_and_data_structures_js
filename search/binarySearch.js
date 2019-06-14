// Searches a sorted array of element for a match.
// Big O = O(logN)
function binarySearch(array, element) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while(start <= end) {
    if (array[middle] === element) {
      return middle;
    } else if (array[middle] > element) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return -1;
}

console.log(binarySearch([2,3,4], 5));
