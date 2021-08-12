/*
Add property to each object in array
Write a function that takes an array of objects and a string as arguments
Add a property with key 'continent' and value equal to the string to each of the objects
Return the new array of objects
Tipp: try not to mutate the original array
link: https://www.jschallenger.com/javascript-objects/add-property-array-of-objects/challenge?id=5f54cf183d245bb9493e585f
*/

function fun([...arroy], string){
    let newArray = arroy;
    
    newArray.forEach(element => {

        element.continent = string;
        
        //this is debugging magic
        //console.log(element);
        //console.log(string);
        
    });
    
    return newArray;

}


console.log(fun([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));

console.log(fun([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));