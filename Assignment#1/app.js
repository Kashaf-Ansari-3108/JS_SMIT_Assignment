// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

// let num1 = +prompt("Enter 1st number");
// let num2 = +prompt("Enter 2nd number");

// if(num1>num2){
//     console.log("The largest number is: " +num1);
// }
// else{
//     console.log("The largest number is: " +num2);
// }

// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.

// let num = +prompt("Enter any number");
// if(num < 0 || Object.is(num, -0)){
//     alert("The sign is negative");
// }
// else{
//     alert("The sign is positive");
// }

// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let num3 = prompt("Enter the third number:");
// let num4 = prompt("Enter the fourth number:");
// let num5 = prompt("Enter the fifth number:");

// let max = num1;

// if (num2 > max) {
//   max = num2;
// }

// if (num3 > max) {
//   max = num3;
// }

// if (num4 > max) {
//   max = num4;
// }

// if (num5 > max) {
//   max = num5;
// }

// console.log("The largest number is: " + max);

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.

// for(let i=0; i<=15; i++){
//     if(i % 2 == 0){
//         console.log(i+" is even");
//     }
//     else{
//         console.log(i+" is odd");
//     }
// }

// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range Grade
// <60    F
// <70    D
// <80    C
// <90    B
// <100   A

// let marks1 = +prompt("Enter first subject Marks:");
// let marks2 = +prompt("Enter second subject Marks:");
// let marks3 = +prompt("Enter third subject Marks:");
// let marks4 = +prompt("Enter fourth subject Marks:");
// let marks5 = +prompt("Enter fifth subject Marks:");

// let total = marks1 + marks2 + marks3 + marks4 + marks5;
// let percentage = (total/500) * 100;
// let grade;

// if(percentage >=90){
//     grade = "A";
// }
// else if (percentage >= 80){
//     grade = "B";
// }
// else if (percentage >= 70){
//     grade = "C";
// }
// else if (percentage >= 60){
//     grade = "D";
// }
// else{
//     grade= "F";
// }

// alert("Percentage: "+ percentage+ "\n"+ "Grade: "+ grade);

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }

// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

// let row = '';
// for (let i = 1; i<=5; i++){
//     for(let j= 1; j<=i; j++){
//         row += "* ";
//     }
//     console.log(row);
//     row = '';
// }
  








