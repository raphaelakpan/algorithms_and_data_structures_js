// Wrtie a function to return the longest sequence of unique characters in a string
// Use the Sliding Window pattern

// "hellothere" => "lother"
// "MercyOseni" => "mercyos"

// Validate that argument is a sttring and is not empty
// Determine the first n consecutive unique characters. Store in a unique sequence variable
// Using a temp unique variable, go through the remaining elements and determing is there is a longer sequence
//

function longestUniqueSequence(word) {
  if (typeof(word) !== 'string' || word.length === 0) return;

  let i;
  let uniqueSequence = "";
  let tempUniqueSequence = "";

  for (i = 0; i < word.length; i++) {
    let char = word[i];
    if (uniqueSequence.includes(char)) break;
    uniqueSequence += char;
  }

  tempUniqueSequence = uniqueSequence;
  for (let j = i; j < word.length; j++) {

  }

  console.log(i);
  console.log(uniqueSequence);
}


console.log(longestUniqueSequence("helhotzere"));
