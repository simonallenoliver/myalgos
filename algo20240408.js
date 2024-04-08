// reduce right example - accumulates from right of array
const arr = [1, 2, 3, 4, 5];

const sum = arr.reduceRight((prev, curr) => {
  return prev - curr;
});

console.log(sum); // Output: 15