/*
Two to one 7kyu
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once
- coming from s1 or s2.
*/

function longest(s1, s2) {
  // TASK: need to return an ordered string that is a combination of both strings and doesnt repeat letters
// IDEA: create an empty array, do a loop through an array that is populated with both strings turned ino arrays, each iteration loop through the comboArr and
	if you find the current letter, skip to the next iteration. return the array joined. 
	const arr = [...s1, ...s2];
	const comboArr = []
	for(letter of arr){
		if(comboArr.includes(letter) === false){
			comboArr.push(letter);
		} else {
			null
		}
	}
	return comboArr.sort()
	
}

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) // "aehrsty"

/*
conclusion: I discovered that using `for...in` on an array will return...indices? Also, for some resdon in my else statement using return in the place of null
resulted in the entire loop breaking, somehow. returning comboArr would return undefined. Not sure how that works, but nonetheless I fixed it. 
ADDENDUM: 
i didn't realize I could've just omitted the else statement being that it would end up skipping if the condition returned false. I was thinking as if I was using
the map method. 
And I learned what a set is! Very interestng. Made me remember that array, objects, strings, etc are objects themselves, and there are other objects that I have 
yet to learn about. 
After each code challenge I should carefully analyzr others code solutions, to practice looking at other peoples code, and learn from them.
*/
