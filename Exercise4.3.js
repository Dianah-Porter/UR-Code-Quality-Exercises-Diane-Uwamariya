//Reverse vowels in a string https://www.codewars.com/kata/585db3e8eec141ce9a00008f

function reverseVowels(str) {
  const vowels = "aeiouAEIOU";
  let arr = str.split("");
  let foundVowels = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      foundVowels.push(arr[i]);
    }
  }

  let vowelIndex = foundVowels.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      arr[i] = foundVowels[vowelIndex];
      vowelIndex--;
    }
  }

  return arr.join("");
}