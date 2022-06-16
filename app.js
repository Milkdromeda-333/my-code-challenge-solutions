/*#1 
June 15, 2022
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.*/

function descendingOrder(n){
  //first i will split the number into strings, sort them, then return them concattted togthr.
  let numToString = n.toString();
  let numArr = numToString.split("");
  numArr.sort().reverse();
  const result = numArr.join("");
  return Number(result);
}
// console.log(descendingOrder(12595))
/*conclusion: here i started with a general plan because i had no immediate thought on how to complete this task. I broke it down into bigger chunks to be broken down ino smaller chunks. I practiced using .join(), and used codepen to do my own testing when needed. */
