// // Control Flow Statements in JavaScript

// // If-Else Statement (if, if else, if else-if else)
// // if (condition) {} --> condition true hoy to {} code run

// if (12 < 13) {
//   console.log(true);
// }

// if (15 < 13) {
//   console.log(true);
// } // condition is false that why if statement not run

// if (!12) { // 12 --> true, !12 --> false
//   console.log("number");
// }

// if (!0) {
//   console.log("number");
// }

// // if-else Statement
// if (12 < 13) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (15 < 13) {
//   console.log(true);
// } // condition is false that why if statement not run
// else {
//   console.log(false); // if if statement condition is false then run this code
// }

// if (!12) {
//   console.log("number");
// } else {
//   console.log("Not A Number");
// }


// // if-else if-else Statement
// /*
// if (condition) {
// } else if (condition) {
// } else {
// }
// */

// let loggedin = true;
// let admin = true;

// if (loggedin && admin) {
//   console.log("welcome admin");
// } else if (loggedin) {
//   console.log("welcome user");
// } else {
//   console.log("go to login page");
// }

// // other example of if-else if else stetemnt 
// // check age for ticket price
// let age =prompt("enter your age:");
// if (age < 5) {
//     console.log("your ticket is free");
// } else if (age < 18) {
//     console.log("your age is less than 18, your ticket price is $10");
// } else if (age < 65) {
//     console.log("your age is less than 65, your ticket price is $20");
// } else {
//     console.log("your age is above 65, your ticket price is $10");
// } 

// example
 
// let age, weight, height, gender;
 
// age = prompt("enter age : ");
// weight = prompt("enter weight : " );
// height = prompt("enter height : ");
// gender = prompt("enter gender : ");
 
// if(age >= 18 && age <= 25 && weight <= 70 && height >= 5 && height <= 6 && gender === "male"){
//     console.log("he is fit.");
// }
// else if(age >= 18 && age <= 25 && weight <= 50 && height >= 4.5 && height <= 5.5 && gender === "female"){
//     console.log("she is fit.")
// }
// else{
//     console.log("you are not fit.")
// }

// Switch case Statement
// switch ("BOGO") // value --> Case value sathe match karshe ane code run thase
// {
//   case "First50":
//     console.log("50% Off on First Order");
//     break;

//   case "BOGO":
//     console.log("Buy one get one");
//     break;

//   case "BlackFriday":
//     console.log("It's Black Friday Sale - get at Rs. 50");
//     break;

//   default:
//     console.log("Offer Not Vaild");
// }

// // other example of switch case statement
// // check the month number of days in month

// let month = prompt("enter month number (1-12) or month name:");

// switch (month) {

//   case "1":
//   case "January":
//     console.log("January has 31 days");
//     break;

//   case "2":
//   case "February":
//     console.log("February has 28 days");
//     break;

//   case "3":
//   case "March":
//     console.log("March has 31 days");
//     break;

//   case "4":
//   case "April":
//     console.log("April has 30 days");
//     break;

//   case "5":
//   case "May":
//     console.log("May has 31 days");
//     break;

//   case "6":
//   case "June":
//     console.log("June has 30 days");
//     break;

//   case "7":
//   case "July":
//     console.log("July has 31 days");
//     break;

//   case "8":
//   case "August":
//     console.log("August has 31 days");
//     break;

//   case "9":
//   case "September":
//     console.log("September has 30 days");
//     break;

//   case "10":
//   case "October":
//     console.log("October has 31 days");
//     break;

//   case "11":
//   case "November":
//     console.log("November has 30 days");
//     break;

//   case "12":
//   case "December":
//     console.log("December has 31 days");
//     break;

//   default:
//     console.log("Invalid month");
// }


// // Early Return Pattern
// function score(value) {
//   if (value >= 90 && value <= 100) {
//     return "Value is more than 90";
//   } else if (value <= 90 && value >= 80) {
//     return "Value is GRETER than 80 AND LESS THAN 90";
//   } else if (value <= 80 && value >= 70) {
//     return "Value is GREATER than 70 AND LESS THAN 80";
//   } else if (value <= 70 && value >= 60) {
//     return "Value is GREATER than 60 AND LESS THAN 70";
//   } else if (value <= 60 && value >= 0) {
//     return "Value is less than 60 or greater than equal to 0";
//   } else {
//     return "Value is less than 60";
//   }
// }

// score(100);
// //console.log(score(100))

// function score1(value) {
//   if (value > 90) return "Value is more than 90";
//   else if (value < 80) return "Value is less than 80";
//   else if (value < 70) return "Value is less than 70";
//   else if (value < 60) return "Value is less than 60";
//   else return "Value is less than 60";
// }

// // Example 1: Switch without break
// let x = 2;

// switch (x) {
//   case 2:
//     console.log("Two");
//   case 3:
//     console.log("Three");
// }


// // Example 2: getGrade function
// function getGrade(score) {
//   if (score >= 90 && score <= 100) return "A+";
//   else if (score >= 80 && score <= 89) return "A";
//   else if (score >= 70 && score <= 79) return "B";
//   else if (score >= 60 && score <= 69) return "C";
//   else if (score >= 33 && score <= 59) return "D";
//   else if (score >= 0 && score <= 32) return "Fail";
//   else return "Invalid Marks";
// }

// console.log(getGrade(95));
// console.log(getGrade(72));
// console.log(getGrade(20));


// // Example 3: Rock-Paper-Scissors
// function rockPaperScissors(player1, player2) {
//   if (player1 === player2) {
//     return "Draw";
//   }

//   if (
//     (player1 === "rock" && player2 === "scissors") ||
//     (player1 === "paper" && player2 === "rock") ||
//     (player1 === "scissors" && player2 === "paper")
//   ) {
//     return player1;
//   } else {
//     return player2;
//   }
// }

// console.log(rockPaperScissors("rock", "scissors"));
// console.log(rockPaperScissors("paper", "rock"));
// console.log(rockPaperScissors("scissors", "paper"));
// console.log(rockPaperScissors("rock", "rock"));

