// Write a function which accepts a sorted array and returns the count of unique values in the array

// Using frequency pattern

//  validate the argument is a array and is not empty
//  Using a loop, take frequency of the numbers in the array
//  Using another loop, count the numver of keys in the frequency. The sum will be the count of unique values
function countUniqueValues1(values) {
  if (!Array.isArray(values) || values.length === 0) return 0;

  let frequency = {};
  for (let value of values) {
    frequency[value] = frequency[value] + 1 || 1;
  }

  return Object.keys(frequency).length;
}

console.log(countUniqueValues1([4,3,10,-4,-4,3,4,4,10]));

// Using the pointers patterm. Would require modifying the array passed in. Array must be sorted

// Start a pointer (i) at the beginning. Another pointer (j) one step ahead of i.
// Compare values in i and j - if they are the same, move j to the next values.
// If the numbers are different, move i to the next position and insert the number at j in the ith position.
// Continue till the end of loop. Return the position of i as the  unique count.
function countUniqueValues2(values) {
  if (!Array.isArray(values) || values.length === 0) return 0;

  let i = 0;

  for (let j = i + 1; j < values.length; j++) {
    if (values[i] !== values[j]) {
      i++;
      values[i] = values[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues2([4,3,10,-4,-4,3,4,4,10]));

