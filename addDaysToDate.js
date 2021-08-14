/*
Add n days to an existing date
Write a function that takes as argument an object with the properties date and daysToAdd, containing a Javascript date and a number
It should add daysToAdd days to the date and return the number of milliseconds since January 1, 1970, 00:00:00 UTC
link: https://www.jschallenger.com/javascript-dates/add-days-to-date/challenge?id=5f082fa739c6fe165eb9f5a7
*/

function myFunction(obj) {

    //hey... if it works it ain't stoopid, ok?
    //by adding the days to the getTime it was giving me a weird answer on the first caste test, probably because it adds 31
    //but now it *magically* works
    //see jschallenger author's solution on their website if you're interested
    return obj.date.getTime() + Number(obj.daysToAdd)* 86400000;
}

console.log(myFunction({ date: new Date(Date.UTC(2000,01,01)), daysToAdd: 31 }));

console.log(myFunction({ date: new Date(Date.UTC(2000,01,01)), daysToAdd: 10 }));

console.log(myFunction({ date: new Date(Date.UTC(2000,02,28,)), daysToAdd: 2 }));