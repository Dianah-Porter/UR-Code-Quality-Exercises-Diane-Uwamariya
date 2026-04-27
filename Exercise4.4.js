function fibonacciCount(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}
console.log(fibonacciCount(8));
// Output: [0, 1, 1, 2, 3, 5, 8, 13]