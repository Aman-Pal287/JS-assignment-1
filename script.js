// Q1. Age Category Message – Ask the user for their age. If they are
//     under 18, print “You are a minor.” If they are between 18 and 60,
//     print “You are an adult.” If they are above 60, print “You are a
//     senior citizen.”

// let age = prompt("Enter Your Age : ");

// if(age<18){
//     console.log("You are under age");
// }
// else{
//     if(age>=18){
//         if(age<60){
//             console.log("you are elible for corn site")
//         }
//         else{
//             console.log("You are senior citizen")
//         }
//     }
// }

// Q2. Even or Odd Sum – Take two numbers from the user using
//     prompt(). If the sum of both numbers is even, print “Even Sum”;
//     otherwise, print “Odd Sum.”

// const firstNum = Number(prompt("Enter First number"));
// const secondNum = Number(prompt("Enter Second Number"));
// const sum =Number(firstNum + secondNum);
// const mod = sum % 2;
// console.log(`sum is : ${sum}`)
// console.log(`mod is : ${mod}`)
// if(mod == 0){
//     console.log("The sum is even");
// }
// else{
//     console.log("The sum is odd");
// }


// Q3. Character Case Checker – Ask the user for a single character.
//     Check if it's uppercase, lowercase, or neither (not a letter).



// const character = prompt("Enter your Character");

// function checkCase(character) {
//     if (character === character.toUpperCase()) {
//         return 'Uppercase';
//     } else if (character === character.toLowerCase()) {
//         return 'Lowercase';
//     } else {
//         return 'Mixed case';
//     }
// }

// console.log(checkCase(character)); // Correct function call


// Q4. Largest of Three Numbers – Take three numbers as input and
//     print the largest number among them without using
//     Math.max().

// const num1 = Number(prompt("Enter first number"));
// const num2 = Number(prompt("Enter second number"));
// const num3 = Number(prompt("Enter third number"));

// if(num1>num2){
//     if(num1>num3){
//         console.log("First number is the greatest number")
//     }
//     else{
//         console.log("Third number is the greatest number")
//     }
// }
// else{
//     if(num2>num3){
//         console.log("Second number is the greatest number")
//     }
// }

// Q5. Leap Year Checker – Ask the user for a year and determine if
//     it's a leap year or not.

let userInputYear = Number(prompt("Enter any year and i will check its leap year or not"));

if (userInputYear % 4 === 0) {
    if (userInputYear % 100 !== 0) {
        console.log("You entered a leap year");
    }
    else {
        console.log("Your entered year is not a leap year");
    }
}
else {
    console.log("Your entered year is not a leap year");

}