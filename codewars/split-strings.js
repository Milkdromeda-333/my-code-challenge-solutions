/* 
#24 Split Strings 6lyu 11-1-2022

TASK:
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing 
second character of the final pair with an underscore ('_').

*/


function solution(str) {
    const arr = str.split("");
    let accuArr = [];

    for (let i = 0; i < arr.length; i += 2) {

        if (i === arr.length - 1 && arr.length % 2 !== 0) {
            accuArr.push(arr[i].concat("_"));
        } else {
            accuArr.push(arr[i].concat(arr[i + 1]));
        }

    }
    console.log(accuArr);
}

solution("abcdefg"); // prints: ["ab", "cd", "ef", "g_"])

// Conclusion:
// I am a problem solving machine. I wasn't sure that the i+=2 would do me any good, 
// and I almost didn't even complete this kata because I wasnt sure how i would solve it, 
// but it just took putting my fingers to the keyboard and trying something, 
// and doing lots of tweaking to my if statement.