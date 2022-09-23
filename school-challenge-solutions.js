// This file is for code challenges from my school.

// #1 September 15 - Map the Letters in a String ////////////////////////////////////////////////////////////////////////////////////////////
/*
Given a word, create an object that stores the indexes of each letter in an array.
Make sure the letters are the keys.
Make sure the letters are symbols.
Make sure the indexes are stored in an array and those arrays are values.
My solution and workflow below:
*/

function mapLetters(str) {
/*
- TASK: gonna need a loop, need to track if the letter has been read before, return object. 

-i will need to dynamically populatate the obj, so do a loop that will go: obj[letter] = [index] and before then check if the letter already exists wit han if statment, if so obj.[letter] = [[firstsIndex], index]
- 1. declare an empty accumulator obj.
- 2. loop through the letters of the str, if(letter as already been read){ obj.[letter] = [[firstsIndex], index]} else { obj[letter] = [index] } return obj!!
*/
	const resultArr = {};
	
	for(let i = 0; i < str.length; i++){
		const letter = str[i];
		if(Object.hasOwn(resultArr, letter)){
			resultArr[str[i]] = [Number(resultArr[letter].toString()), i]
		} else {
			resultArr[letter] = [i]
		}
	}
	return resultArr;
}

// console.log(mapLetters("dodo")) // { d: [0, 2], o: [1, 3] }
// console.log(mapLetters("froggy")) // { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// console.log(mapLetters("grapes")) // { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
/* 
Conclusion: I tried a new way of problem solving by writing the task at hand, noting my initial thought of how I will complete the task, and finally writing a list of steps to take and sudo code. It worked great and help me stay on track and remember my initial solutions to potential problems. 
*/

/*
#2 Remove Every Vowel from a String - September 21, 2022 ////////////////////////////////////////////////////////////////////////////////////////////
Create a function that takes a string and returns a new string with all vowels removed.
*/
function removeVowels(str){
	//tasks take a string, filter out the vowels, return string
	// idea: convert string to an array, split by each charecter, filter out vowels using an array with vowels, turn the filtered array back into a string, return
	// 1. make a vowels array.
	// 2. split by each charecter so arr.split("")
	// 3. filter the arr using filter(char => vowels.includes(char) ? false : true) save to filteredArr 
	// 4. turn ilteredArr into string using .join("")
	
	const vowelsArr = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
	const strArr = [...str];
	const filteredArr = strArr.filter(char => vowelsArr.includes(char) ? false : true)
	console.log(filteredArr.join(""))
}
// removeVowels("I have never seen a thin person drinking Diet Coke.")
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."

// removeVowels("We're gonna build a wall!")
// ➞ "W'r gnn bld  wll!"

// removeVowels("Happy Thanksgiving to all--even the haters and losers!")
// ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

/*
conclusion: I basically have my code solution problem solving flow down to this- write out the basic tasks that need to be done, labeled TASKS. Write out 
an idea that i can implement to complete said tasks, labeled IDEA (i can write multiple ideas if i have them). And finally, i write out the steps to the 
idea that I'm going with. Can be labeled STEPS. Anyway, the more that I solve these problems the more I am quick with thinking of ways to solve new ones, because of my familiarity with how to do a certain task with JS.
*/

// #3 Caesars Cipher - september 22, 2022
// My challenge was to implement a caesars cipher using readline-sync module in node.
var readline = require('readline-sync');

const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
const shift = parseInt(readline.question('How many letters would you like to shift? '));
console.log(cipher(input, shift));

function cipher(userInput, shiftNum) {
    let letters = [..."abcdefghijklmnopqrstuvwxyz"];

    const code = [...userInput].map(char => {
        if (letters.includes(char)) {
            return letters[letters.indexOf(char) + shiftNum];

        } else {
            return char;
        }

    });
    return code.join("");
}
