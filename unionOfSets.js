/*
Get union of two sets
Write a function that takes two Sets as arguments
Create the union of the two sets
Return the result
Tipp: try not to switch to Arrays, this would slow down your code
link: https://www.jschallenger.com/javascript-sets/union-two-sets/challenge?id=5f637a48ff7ec65c91f91994
*/

function myFunction(setOne, setTwo) {
    let union = new Set(setOne);

    //this can be a forEach, but this was my first right implementantion so it'll stay
    for (let item of setTwo){
        union.add(item);
    }
    
    return union;
}

console.log(myFunction(new Set('123'), new Set('234')));

console.log(myFunction(new Set([1, 2, 3]), new Set([3, 4, 5])));

console.log(myFunction(new Set([false, false, NaN]), new Set([true, true, NaN])));
