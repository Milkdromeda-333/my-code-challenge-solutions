/* June 15, 2022

#1 
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

//#2

/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.*/
function findOutlier(integers){
  const evenNums = integers.filter(num => num % 2 === 0);
  const oddNums = integers.filter(num => num % 2 !== 0);
  
  if(oddNums.length === 1){
  	return Number(oddNums);
  } else {
  return Number(evenNums);
  }
	
	}
//console.log(findOutlier([2, 4, 6, 8, 5]))
/*Conclusion: Here I learned to use Number() to turn number array elements into a number. I also learned that a switch is seeing if the case is equal to the switch expression.*/

/* #3

I was supposed t o be able to take an array of words and whichhever words were five letters or longer i had to retern it reversed.*/
function spinWords(string){
  //split the string into an array, use .map, the calling function will check if the length of the word is 5 or more, if yes it will return thr word reversed, if not it just returnd the word. 
	let arr = string.split(" ");
	const resultArr = arr.map(word => word.length < 5 ? word : word.split("").reverse().join(""))
	 return resultArr.join(" ");
}

console.log(spinWords("Hey fellow warriors"))
// conclusion: learned about ternary operators, and wrote my code in a way that I seen on codewars, which was chaining my methods and writing shorter solutions.

// June 16, 2022
//
