// Get The Middle Charecter 7kyu

/*
TASK: find the middle of a given parameter string and return the letter in the middle. if its an even number return the two letters in the middle.
IDEA: I can cound the number of letters in the string, see if its even or odd. If even go to the index of the middle, return the rwo letters (splice), if odd divide by two, truncate the decimal. (Math.trunc) and splice the one letter
1. start with if statement checking if the string length is even or odd. if even save length to a variable divided by two named middle, and splice and return the letter in the middle.
2. else, we save the str length dived by 2, truncated, and return the string spliced from that var
*/

function getMiddle([...strArr]){
	if(strArr.length % 2 === 0){
		// subtracted 1 because using splice is zero-indexed
		const strArrMiddle = (strArr.length / 2) -  1;
		return strArr.splice(strArrMiddle, 2).join("")
	}
	const strArrMiddle = Math.trunc(strArr.length / 2);
	console.log("middle: " + strArrMiddle)
	return strArr.splice(strArrMiddle, 1).join("")
}

// console.log(getMiddle("west")) //"es"
// console.log(getMiddle("testing")) // "t"

/*
conclusion: I had a challenge getting the function to return what I expected, so I went back and made sure everything was returning what I was expecting it to.
planning before starting really help me speed things along. 
*/
