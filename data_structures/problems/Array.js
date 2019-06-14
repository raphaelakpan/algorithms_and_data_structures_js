// Find the second minimum element of an array
function secondMinimum(array) {
  if (!Array.isArray(array)) return;
  let min = Number.MAX_SAFE_INTEGER;
  let secondMin = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      secondMin = min;
      min = array[i];
    } else if (array[i] < secondMin && array[i] !== min) {
      secondMin = array[i];
    }
  }

  return secondMin !== Number.MAX_SAFE_INTEGER ? secondMin : undefined;
}

// First non-repeating integers in an array

// Merge two sorted arrays
function merge(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return;
  let i = 0;
  let j = 0;
  let merged = [];
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      merged.push(array1[i]);
      i++;
    }
    if (array2[j] < array1[i]) {
      merged.push(array2[j]);
      j++;
    }
  }
  for (; i < array1.length; i++) {
    merged.push(array1[i]);
  }
  for (; j < array2.length; j++) {
    merged.push(array2[j]);
  }
  return merged;
}

// Rearrange positive and negative values in an array

console.log(merge([2, 3, 7], [4, 5]));
