/*
# 21 Find the divisors 7kyu

TASK:
return an array populated with the `interger`s divisors from smallest to largest, if its a prime number return "`num` is a prime number"
 
 IDEA:
  initialize an empty array
  do a for loop with i = 2, and as long as i is less than `integer`
  in each iteration, if integer / i is a whole number, push it to the array.
 
*/

function divisors(integer) {
    let resArray = [];
    for (let i = 2; i < integer; i++) {
        let num = integer / i;
        num - Math.floor(num) === 0 ? resArray.push(i) : null;
    }
    return resArray.length >= 2 ? resArray : `${integer} is prime`;
};

console.log(divisors(13)); // [3, 5]) 

/*
CONCLUSION:
For this challenge I googled how to detect a decimal using Javascript and found that code pattern `num - Math.floor(num) !== 0`. I felt like a real coder after implementing it. Lots of good problem solving happened here.
*/
