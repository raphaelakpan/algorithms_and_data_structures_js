// Searchs for a pattern in a string and returns the count
// Loop through the string, in the loop, loop through the pattern and check if there's a match
// for all elements. If there's no match, break out of the inner loop
// If we make it to the end of the inner loop, increment count of matches.
function naiveSearch(string, pattern) {
  let match = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (string[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) match++
    }
  }
  return match;
}

console.log(naiveSearch("lorie loled", "lol"));
