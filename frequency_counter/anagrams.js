// Write a function to determin if the first string is an anagram of the second string.
// An anagram is a word form from rearranging the letters of another word

function anagram(word1, word2) {
  // return false for invalid arguments. Proceed only if both strings have equal length
  if (typeof(word1) !== 'string' || typeof(word2) !== 'string' || word1.length !== word2.length) {
    return false;
  }

  // Count the frequency of letters in each word.
  const freq1 = {};
  const freq2 = {};

  for(let i = 0; i < word1.length; i++) {
    let letter1 = word1[i];
    let letter2 = word2[i];

    freq1[letter1] = freq1[letter1] + 1 || 1;
    freq2[letter2] = freq2[letter2] + 1 || 1;
  }


  // Go through each letter in the first word and check that the frequency in the first object matches
  // frequency in the second object.
  for(let letter of word1) {
    if (freq1[letter] !== freq2[letter]) return false;
  }

  return true;
}


console.log(anagram("",""));
