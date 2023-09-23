/* June 15, 2022


#1 
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.*/

function descendingOrder(n){
  //first i will split the number into strings, sort them, then return them concattted togthr.
  let numToString = n.toString();
  let numArr = numToString.split("");
  numArr.sort().reverse();
  const result = numArr.join("");
  return Number(result);
}
// console.log(descendingOrder(12595))
/*conclusion: here i started with a general plan because i had no immediate thought on how to complete this task. 
I broke it down into bigger chunks to be broken down ino smaller chunks. I practiced using .join(), and used codepen to do my own testing when needed. */


//#2
/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.*/
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


/* #4
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


//#5
/*You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.*/
function likes(names) {
	if(names.length == 0){
		return "no one likes this";
	} else if(names.length == 1){
		return names.join("") + " likes this";
	} else if(names.length < 4){
		return lessThanFour(names)
	} else if(names.length >= 4){
		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
	} 
}
function lessThanFour(names){
	 if(names.length == 2){
     return names.join(" and ") + " like this"
   } else if(names.length == 3){
     return `${names[0]}, ${names[1]} and ${names[2]} like this`
   }
}
//console.log(likes(['Alex', 'Jacob', 'Mark', 'William', 'Illumi', 'Valencia']))
// conclusion: This one was a little more challenging for me. I figured out htat if there isnt a short way to do it, figure out how to do it the long way.


// #6
/* A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.
In this Kata, we will restrict ourselves to decimal (base 10).*/
function narcissistic(value) {
 	/* split the numbers somehow into an array
      use .map() to create an arr that has the num of each element to the power of its base
      add these numbers up and if the sum equals the vslue return true*/
	const stringArr = value.toString().split("");
	const numArr = stringArr.map(num => Math.pow(Number(num), stringArr.length)); 
	const sum = numArr.reduce((a, b) => a + b);
	return sum === value ? true : false;
}
console.log(narcissistic(153))
// conclusion: very happy with my use of the ternary operator, AND reduce here. And, I learned about Math.pow().


// June 18, 2022


// #7
// Given an array of arrays where the first element in the nested array was people getting on, and the second was those getting off, I had to calculate how many peopel were still on the bus.
var number = function (busStops) {
	/*maybe have a counter inside the function that starts at zero. Write a for statement that adds the first element of the array and subtracts the second element. and after the loop return the counter.*/
	let numOfPassengers = 0;
	arr.forEach(function(passengers){
		numOfPassengers += passengers[0];
		numOfPassengers -= passengers[1];
	})
	return numOfPassengers;
};
//below is refactored to utilize and practice using array reduce method.
var number = function (busStops) {
	return busStops.reduce(
		(peopleOnTheBus, stop) => peopleOnTheBus + stop[0] - stop[1], 0);
};
console.log(number([
	[10, 0],
	[3, 5],
	[5, 8]
]));
/* conclusion: AFter a couplr of faile attmepts of codewars cahllenges I finally succeeded with one. Very happy with how fast i figured it out.*/

// June 20

//#8
//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
function humanReadable(seconds) {
	/*
	convert seconds into hours. save to variable. then ill take the hours turn it into seconds and subtract that from the og seconds to see the remaining time to be converted to minutes.
	to get minutes i convert remaining seconds into minutes, take that number convert it into seconds, subtract that from the og seconds, and that number will be declared as seconds. 
	return a string literal 
	*/
	if (seconds === 0) {
		return "00:00:00";
	}
	const hours = Math.trunc(seconds / 3600);
	const minutes = Math.trunc((seconds - hours * 3600) / 60);
	const resultSeconds = Math.trunc(seconds - (minutes * 60 + hours * 3600));
	return `${hours.toString().padStart(2, 0)}:${minutes
		.toString()
		.padStart(2, 0)}:${resultSeconds.toString().padStart(2, 0)}`;
}
console.log(humanReadable(20));
/*conclusion: This one was tough!!! But, I am very proud that I was able to stick with it and not give up very easily.
Its cluncky, mit could most definately be refactored. I learned to use .padStart and Math.trunc*/

//June 22

//9
//Arr.dif - Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.
const arrayDiff = (a, b) => a.filter(num => !b.includes(num));
console.log(arrayDiff([1,2,2], [1]))
//conclusion: fairly easy. had to learn to use .includes and remmeber to use the logical not operator

//#10
//Create Phone Number - Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers){
	// split array into threes, return a string with everything in place  and the arrays joined
	let [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10] = numbers;
	return `(${num1}${num2}${num3}) ${num4}${num5}${num6}-${num7}${num8}${num9}${num10}`;
}
// refactor
function createPhoneNumber(numbers){
	let result = "(xxx) xxx-xxxx";
	for(let i = 0; i < numbers.length; i++){
		result = result.replace("x", numbers[i])
	};
	return result
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// conclusion: its kind of long winded and im not sure its the best solution, but i decided to do the long route since i couldn't think of a simpler route.
// after submitting i discovered string.replace(). very handy.

// July, 2, 2022

// #11
//PrintErrors ---
function printerError(str) {
	// print out the errors / total num of color letters
	// make an array of letters between a-m, declare variable called errorCount
	// and make iterate through the string and if it does not match an element in the array
	// add one to the error counter.
	// then obviously return a string literal with the fraction
	
	const legalLetters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m"
];
	let errorCount = 0;

	for (let i = 0; i < str.length; i++) {
		if (legalLetters.indexOf(str[i]) === -1) {
			errorCount++;
		}
	}
	return `${errorCount}/${str.length}`;
}
 console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));

/*Conclusion: I learned that if im having a hard time handling squashing a bug to console.log
like crazy and if push comes to shove, read line-by-line to ensure everything is in place and works the way i intend*/

// July 25
// #12 Exes and Ohs

function XO(str) {
	const fixedStr = str.toLowerCase();
	let xCount = 0;
	let oCount = 0;
	
	for(let char of fixedStr){
		if(char === "x"){
			xCount++
		}
		if(char === "o"){
			oCount++
		}
	}
	
	return xCount === oCount ? true : false;
}
// conclusion: remmeber to return your ternary operater statements! And, for this I had to google my problem as I seen it,
//"why is my ternary operator returning undefined" and stackoverflow had the answer!


//July 30

//#13 Help Suzuki rake his garden!

function rakeGarden(garden) {
  let arr = garden.split(" ")
  let result = []
  arr.forEach(item => {
	  if (item === "rock" || item === "gravel"){
		  result.push(item)
	  } else {
		  result.push("gravel")
	  }
  })
	return result.join(" ");
}
let garden1 = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
console.log(rakeGarden(garden1))

/*const rakeGarden = garden => 
  garden
    .split(' ')
    .map(item => item === 'rock' ? 'rock' : 'gravel')
    .join(' ')*/

//conclusion: i almost gave up with this one for diiferent little reasons but didn't want to. And, it worked out eventually. 
//i had a plan that did not work out first try, i had myself to do a different plan that i thought of while initially planning.
// i also added someone elses answer for me to get inspo from and look back at


// August 1 #14 V A P O R C O D E
function vaporcode(string) {
	let arr = string.toUpperCase().split("");
	let result = [];
	arr.map(letter => {
		if(letter === " "){
			return;
		}else{
			result.push(` ${letter} `);
		}
			
	})
	return result.join("").slice(1, -1);
}
vaporcode("Why isn't my code working?");
/*function vaporcode(string) {
  return string.toUpperCase().split(" ").join("").split("").join("  ");
}
This is so smart they put it into line by splitting it by the spaces so as to not have to do it almost manually, and then joined it to 
be able to then join it to split it by each element and then joined it finally with two spaces between each element. so clever!*/

// conclusion: things dont usually pan-out the way i plan them out. with practice i think i will find a better way to plan out my code.
//but, i learned to test multiple-times and try things out no matter how cluncky.


//August 21 - #15 - (7 kyu) Find the capitals
const capitals = (word) => {
	
	let resultArr = [];
	
	for(let char of word){
		if(char === char.toUpperCase()){
			resultArr.push(word.indexOf(char));
		}
	}
	
	return resultArr
	
};
/*conclusion: I had to slow down and allow myself to clearly think of what steps I wanted to take, and to study those steps. So, I started 
  with the last step, how can i actually return what i nee to return. how do i get that data. and then, how do i make it so that i could get this data, 
  and what errors could I run into using this method. I also started very differently, but couldn't finish how I started so I scrapped it andstarted anew. 
*/


//August 24 - #16 List filtering
const filter_list = (arr) => arr.filter(element => typeof element === "number");
return filter_list([0, 1, "a", "b"])

//conclusion: although the solution shouldve been obvious, I didn't use filter method at first. I did something a bit more long winded. I wish I had a good
//problem solving strategy to be more organized with solving these. Like, I should brainstorm first right. Lay the poblem out before me, and then think of what
//exactly im trying to do, and then the ways I could do it, and whats important while writing it.


//August 30 - #17 unique in order
const uniqueInOrder=function(iterable){
  
	const arr = [...iterable];
	return arr.filter((letter, index) => {
		return letter !== arr[index - 1]
	})
	
	
}
/*
console.log(uniqueInOrder('ABBCcAD'))
desired output: ['A','B','C','D','A','B']

conclusion: SO, I'm trying to learn a method to approach these. I did an explanation for the function first (may be uneccessary) and then I planned out what I would do
in the function. What saved me was googling. I googled the docs for the method, and googled how to use the index parameter and seen that i was using it right, just
I was getting an empty array because I didnt return anything. 
*/

// September 5 - #18 How good are you, really?

function betterThanAverage(classPoints, yourPoints) {
  
// 	this line adds the numbers in classPoints and your points togther
	const sum = classPoints.reduce((prevNum, currentNum) => currentNum + prevNum)
	+ yourPoints;
	const average =  sum / (classPoints.length + 1)
	 return average > yourPoints ? false : true
}

/*
console.log(betterThanAverge([2, 3], 5))
Conclusion: I wasstuck on this until I asked a fellow coder for help and realized that if I'm using multiple operators I should specify which one I wan't to run first
using a parenthasis. 
*/
