/*
Week 1 (1.1) - Create variables
Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza.
Use appropriate variable declarations (let, const, or var). Log it using console.log.
*/

let favourite_color = "Blue";
const height_in_cm = 157;
var i_like_pizza = true;

console.log(favourite_color);
console.log(height_in_cm);
console.log(i_like_pizza);

/*
Week 1 (1.2) - Write a function sum
Write a function sum that finds the sum of two numbers. 
Side quest - Try passing in a string instead of a number and see what happens.
*/

function sum(a, b) {
    return parseInt(a) + parseInt(b);
}

console.log(sum("4", "5"));

/*
Week 1 (1.3) - Write a function canVote
Write a function called canVote that returns true or false if the age of a user is > 18.
*/

function canVote(a) {
    return parseInt(a) >= 18;
}

console.log(canVote(4));

/*
Week 1 (1.4) - Check if a number is even or odd
Write an if/else statement that checks if a number is even or odd. 
If it's even, print "The number is even." Otherwise, print "The number is odd."
*/

function isEven(a) {
    if (parseInt(a) % 2 == 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}

console.log(isEven(4));

/*
Week 1 (1.5) - Sum from 1 to a number
Write a function called sum that finds the sum from 1 to a number.
*/

function countSumUptoN(a) {
    let count = 0;
    for (let i = 1; i <= a; i++) {
        count += i;
    }
    return count;
}

console.log(countSumUptoN(11));

/*
Week 1 (1.6) - Greet user with name and age
Write a function that takes a user as an input and greets them with their name and age.
*/

let user = {
    name: prompt("Enter your name:"),
    age: prompt("Enter your age:")
};

console.log("Hello " + user.name + ". Your age is " + user.age + ".");

/*
Week 1 (1.7) - Greet user with gender
Write a function that takes a new object as input which has name, age, and gender 
and greets the user with their gender.
*/

let userGender = {
    name: prompt("Enter your name:"),
    age: prompt("Enter your age:"),
    gender: prompt("Enter your gender (Male / Female / Other):")
};

if (userGender.gender === "Male") {
    console.log("Hello Mr. " + userGender.name + ". Your age is " + userGender.age + ".");
} else if (userGender.gender === "Female") {
    console.log("Hello Ms. " + userGender.name + ". Your age is " + userGender.age + ".");
} else {
    console.log("Hello " + userGender.name + ". Your age is " + userGender.age + ".");
}

/*
Week 1 (1.8) - Legal to vote
Also tell the user if they are legal to vote or not.
*/

if (userGender.age >= 18) {
    console.log("You can vote because you are above 18.");
}
