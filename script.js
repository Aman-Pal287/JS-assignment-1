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

const firstNum = Number(prompt("Enter First number"));
const secondNum = Number(prompt("Enter Second Number"));
const sum =Number(firstNum + secondNum);
const mod = sum % 2;
console.log(`sum is : ${sum}`)
console.log(`mod is : ${mod}`)
if(mod == 0){
    console.log("The sum is even");
}
else{
    console.log("The sum is odd");
}
