/* 
#23 Alternate Capitazlization 7kyu 10-31-22

TASK:
Return an array that is populated with strings that are a result of alternatinngly capitalizing letters of a passed in string. 
Ex: "abracadabra" => ['AbRaCaDaBrA', 'aBrAcAdAbRa']

My solution:
Create a for loop that will track the index, and for each iteration i will check if the index is even or odd, and then push the element to two different arrays, alternating which one gets the element capitolized or lowercase.

*/

function capitalize(s) {
    const arr = s.split("");

    let a = [], b = [];

    // uses index to alternate which array will get the element uppercased and which lowercased.
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            a.push(arr[i].toUpperCase());
            b.push(arr[i]);
        } else {
            b.push(arr[i].toUpperCase());
            a.push(arr[i]);
        }
    }
    console.log([a.join(""), b.join("")]);
};

// test
capitalize("nomination"); // prints : ["NoMiNaTiOn","nOmInAtIoN"]

/*
conclusion: coding is fun. And, I learned that i can return an array by returning array literals and adding whatever i want inside. im not sure if i already knew that. i also realize that people probably use i for the for loops to represent inded. Neato.

*/