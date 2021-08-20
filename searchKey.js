/*
link: https://www.jschallenger.com/javascript-objects/access-object-properties-dynamic-key/challenge?id=5f1043abbd87ab5028fee12b
Accessing object properties three
// Write a function that takes a string and an object with two properties as arguments
// It should return the value of the property with key equal to the value of the string
*/

function myFunction(obj, str) {
return obj[str];   
}

console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'));
console.log(myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country'));