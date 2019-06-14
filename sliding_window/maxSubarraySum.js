// write a function which accepts an array of intergers and a number called n.
// The function should return the maximum sum of n consecutive elements in the array

// Use the sliding window pattern
// Validate that n is not greater than array length
// Sum the first n numbers in the array and assume that that is the max
// Go through the remaining elements after the nth element in the array, subtract the (i-n)th element from the sum, add the ith element. Store in a temp variable
// Take the max of the temp sum and the current sum.

function maxSubarraySum(array, n) {
  if (!Array.isArray(array) || typeof(n) !== 'number' || n > array.length) return null;

  let maxSum = 0;
  let tempMaxSum = 0;

  // Sum the first n numbers in the array and assume that that is the max
  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }

  // Go through the remaining elements after the nth element in the array, subtract the (i-n)th element from the sum, add the ith element.
  // Store in a temp variable. Take the max of the temp sum and the current sum.
  tempMaxSum = maxSum
  for (let i = n; i < array.length; i++) {
    tempMaxSum = tempMaxSum - array[i-n] + array[i];
    maxSum = Math.max(tempMaxSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([4,6,2,6,9,5,8,5], 3));
