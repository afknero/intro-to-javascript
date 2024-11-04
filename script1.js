/**
 * Create a conditional statement that checks if two strings are equal. Include
 * and if and else statement. Create an alert that gives your user feedback
 * based on the string defined. Test your statement with different strings to
 * make sure both alerts work.
 */

let str1 = 'Hello, World!';
// let str2 = "Hello, World!"
let str2 = 'hello world?';

if (str1 == str2) {
  alert(str1 + 'is equal to str2: ' + str2);
} else {
  alert(str1 + 'is not equal to str2: ' + str2);
}
