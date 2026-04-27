function solution(roman) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    let current = values[roman[i]];
    let next = values[roman[i + 1]];

    if (next > current) {
      total -= current; // subtract if smaller before bigger
    } else {
      total += current; // otherwise add
    }
  }

  return total;
}