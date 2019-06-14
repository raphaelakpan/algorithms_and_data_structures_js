
// Write a function to accept two arrays and return true if all the values in the
// first arrays are squared in the secome array. Frequency must be the same.

// Algorithm pattern: Frequency Counter using ojects

function same(array1, array2) {
  // Check for invalid inputs
  if (!Array.isArray(array1) || !Array.isArray(array2) || array1.length !== array2.length) return false;

  // Store the frequency of values in both arrays. Both have the same length
  // [2,3] = {2:1, 3: 1}
  // [4,9] = {4:1, 9: 1}
  let freq1 = {};
  let freq2 = {};

  for (let i = 0; i < array1.length; i++) {
    let value1 = array1[i];
    let value2 = array2[i];
    freq1[value1] = freq1[value1] + 1 || 1;
    freq2[value2] = freq2[value2] + 1 || 1;
  }

  freq1;
  freq2;
  for (let key in freq1) {
    if (!freq2[key ** 2]) return false;
    if (freq1[key] !== freq2[key ** 2]) return false;
  }

  return true;
}

console.log(same([1,2,3,2], [4,1,4,9]));
