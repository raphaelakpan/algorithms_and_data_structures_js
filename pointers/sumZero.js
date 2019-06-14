// write a function that accepts a sorted array of integers. The function should return the first
// pair of intergers that sum to 0, or return undefined if there's none
// Pattern: Using pointers

function sumZero(numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === 0) {
      return [numbers[left], numbers[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3,-1,0,2,3]));
