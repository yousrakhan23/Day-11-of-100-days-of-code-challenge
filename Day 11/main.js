"use strict";
// Q 96:
Object.defineProperty(exports, "__esModule", { value: true });
//Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
//Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right)
// to reduce it to a single value.
function calculateSums(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var number = [1, 2, 3, 4, 5];
console.log(calculateSums(number));
//...........................................................................................................................
// Q 97:
// Write a function that returns the current date in the format "DD-MM-YYYY".
// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date
// object provides methods to get  the day, month, and year, which you can then assemble into any format you need.
function getCurrentDateFormatted() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, '0');
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var year = now.getFullYear();
    return "".concat(day, " - ").concat(month, " - ").concat(year);
}
console.log(getCurrentDateFormatted()); // output is (current date: 24 - 06 - 2024 )
//.........................................................................................................................
// Q 98:
//Create a JavaScript snippet that calculates and logs how many days are left until New Year.
//Explain & TIP: To find the difference between two dates, you can subtract one Date object from 
//another, which gives you the difference in milliseconds. Convert that to days to see how many days are left until
// a specific event.
function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1); // january of next year
    var diff = newYear.getTime() - today.getTime(); // difference in milliseconds
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // converts to days.
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");
//..............................................................................................................................
// Q 99:
//Generate a date object representing your next birthday and log it to the console.
// Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year based 
// on whether the birthday has already occurred this year or not
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day); // months are 0 indexed.
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthday = getNextBirthday(10, 23); // e.g: october 23rd
console.log("Next birthday on :", nextBirthday.toLocaleDateString());
//........................................................................................................................
// Q 100:
//  Use the JavaScript Math object to find the square root of 144.
//Explain & TIP: The Math.sqrt() function is a straightforward way to calculate the square root of any positive number, directly providing the result you need.
var squareRoot1 = Math.sqrt(144); // 12
var squareRoot2 = Math.sqrt(225);
console.log(squareRoot1);
console.log(squareRoot2);
