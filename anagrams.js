// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True 
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// ----------STEPS FOR SOLVING----------
// lower case all the letters of each input
// remove all the non-letter characters from each input
// better to do above 2 as a function
// build "frequency counter" AKA histogram
// OBJ Keys = each letter -> values = total occurance in the string 
// compare both histograms to see if they are exactly the same. 
// probably a function 

function findAnagrams(string1, string2) { 
  let histo1 = histogram(cleanString(string1));
  let histo2 = histogram(cleanString(string2));

  return compare(histo1, histo2);
}

function cleanString(testString) { //cleans out the string
  const letters = /^[a-z]+$/;  // Regular Expression aka REGEX

  return testString.toLowerCase().match(letters); // string default library functions
}

function histogram (testString) { // builds histograms
 let histo = {};

 for (let i = 0, length = testString.length; i < length; i++){
   let char = testString[i];
   if (char in histo) {
    histo.char = histo.char + 1
   } else {
    histo.char = 1
   }
 }
}

// const histogramExample = { // example output of histogram function on "rail safety"
//   'r': 1,
//   'a': 2,
//   'i': 1,
//   'l': 1,
//   's': 1,
//   'f': 1,
//   't': 1,
//   'e': 1,
//   'y': 1,
// }

// const histogramExample = { // example output of histogram function on "RAIL SAFETY"
//   'R': 1,
//   'A': 2,
//   'I': 1,
//   'L': 1,
//   'S': 1,
//   'F': 1,
//   'T': 1,
//   'E': 1,
//   'Y': 1,
// }

function compare(histo1, histo2){ // compare histograms
  for (let key in histo1){ 
    if(!histo2[key] || histo2[key] !== histo2[key]) 
    return false
  }

  return true;
}

// Pass these arguments for PART 1 of question
let string1 = "rail safety";
let string2 = "fairy tales";
console.log([string1, string2]);
console.log(findAnagrams(string1, string2));
// Pass these arugments for PART 2 of question
let string3 = "RAIL! SAFETY!";
let string4 = "fairy tales";
console.log([string3, string2]);
console.log(findAnagrams(string3, string4));
// Pass these arguments for PART 3 of question
let string5 = "hi there";
let string6 = "bye there";
console.log([string5, string6]);
console.log(findAnagrams(string5, string6));