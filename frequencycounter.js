let string1 = "rail safety";
let string2 = "fairy tales";

// check if length is equal
// represent the frequency of every character in both strings
// check if character and frequency matches in  both strings

function anagram(string1, string2) {
  if(string1.length !== string2.length) return false // does not work - because assumes that we are anagramming all characters in the strings
  
  let objectFreq1 = {} // histogram1
  let objectFreq2 = {} // histogram2
  
  for (let char of string1) { // builds histogram of 1st string
    objectFreq1[char] = (objectFreq1[char] || 0) + 1
  }
  for (let char of string2) { // builds histogram of 2nd string
    objectFreq2[char] = (objectFreq2[char] || 0) + 1
  }
  
  for (let key in objectFreq1){ // compare histograms
    if(!objectFreq2[key] || objectFreq2[key] !== objectFreq2[key]) 
    return false
  }
  console.log({objectFreq1, objectFreq2}); // prints out both histograms
  return true
  }
console.log(anagram("string1", "string2"));
