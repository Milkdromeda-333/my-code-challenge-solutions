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
