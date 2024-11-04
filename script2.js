/**
 * Create a conditional statement that compares two numbers. You can choose if
 * those numbers will be equal, less than, greater than, less than or equal to,
 * or greater than or equal to each other. Include an if, else if, and else
 * statement. Create an alert that gives your user feedback based on the number.
 * Test your statement with different numbers to make sure all alerts work.
 */

let num1 = 19;
// let num2 = 3
// let num2 = 19
let num2 = 45;

if (num1 < num2) {
  alert(num1 + 'is smaller than the second number: ' + num2);
} else if (num2 < num1) {
  alert(num1 + 'is greater than the second number: ' + num2);
} else {
  alert(num1 + 'is equal to the second number: ' + num2);
}
