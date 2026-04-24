const calculateAverage = (numbers) => {
  let reduce = numbers.reduce((a,b) => a + b );
  return reduce / numbers.length;
}
console.log(calculateAverage([3,2,4,5,6]))