// take the string, loop through and if the string comes upon a char that is a number, it switches it with the letter in its array, and vice versa.
// My idea is turn string into an array. `const strArrr = [...str]` and if arr includes an item inside of the array, return the other thing in the array. will nee to keep tabs on the index.
//double loop, one is looping through the str, and the second is looping through each neted array?


function decode(str){
	const code = [["0", "O"], ["1", "I"], ["2", "Z"], ["3", "E"], ["4", "h"], ["5", "S"], ["6", "G"], ["7", "L"], ["8", "B"], ["9", "q"]];
	
	const resultArr = [...str];
	
	for(let i = 0; i < resultArr.length; i++){
		// using i for index in the res
    
		for(let j = 0; j < code.length; j++){
			// using j as index for code
      
			if(code[j].includes(resultArr[i])){
				// check to see if its the first or the second then replace
        
				if(code[j].indexOf(resultArr[i]) === 0){
					resultArr[i] = code[j][1]
				} else {
					resultArr[i] = code[j][0]
				}
			}
		}
	} 
	console.log(resultArr.join(""))
}

decode("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." ) // "PRO-TIP #498: IT'S NICE TO SAY HELLO."

/*
conclusion: 
I do not like the look of this super nested solution.... but i added comments and white space. This was fun to figure out. 
*/
