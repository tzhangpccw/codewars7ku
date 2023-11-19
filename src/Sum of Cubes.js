/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

function sumCubes(n){
  if (n == 1) {
    return n**3;
  } else {
    return n**3 + sumCubes(n - 1);
  }
}
*/

function sumCubes(n){
  // ...start + i * step
  return Array.from({length:n},(_, i) =>1+i*1)
    .reduce((acc,cur)=>acc+=cur*cur*cur,0)
  
}

