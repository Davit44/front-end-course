/////////////////////////////////////////
// function barev1() {
//   console.log(45);
// }
// function barev2() {
//   console.log(45);
//   return;
// }
// barev1() // undefined
// barev2() // undefined
////////////////////////////// default values
// function showMessage(from = 5, text = 10) {
//   console.log(from + text);
// }
// showMessage(undefined, 8);
/////////////////////////// 3 hamarjeq funkcianer
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   return false;
// }
// function checkAge(age) {
//   return age > 18 ? true : false;
// }
// function checkAge(age) {
//   return age > 18;
// }
// checkAge(15);
//////////////////////////// hosting
// f(); // kareli e verevum kanchel
// // console.log(x); // undefined
// // console.log(y); // ReferenceError: Cannot access 'y' before initialization
// // console.log(z); // ReferenceError: Cannot access 'z' before initialization
// // z(); // ReferenceError: Cannot access 'y' before initialization
// // x(); // TypeError: x is not a function
// // function declaration
// function f() {
//   // code
// }
// // function expretion
// let z = function () {
//   // code
// };
// var x = Math.random();
// let y = 20;
///////////////// local and global variables
// // global variable
// let x = 15;
// function g() {
//   let y = 10; // local variable
//   let x = 17;
//   console.log(x);
//   // code
// }
// g();
//////////////////////////////// arrow function
// let f0 = a => a ** 2;
// let f0 = a => {
//   // code
//   return a ** 2;
// };
// let f = (a, b) => a + b;
// let f1 = (a, b) => {
//   return a + b;
// };
// let f2 = function (a, b) {
//   return a + b;
// };
// f(4, 5); // 9
//////////////////////////// callBack function
// let calc = function (a, b, nshan) {
//   switch (nshan) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//   }
// };
// let result = calc(1, 2, "-");
// console.log(result);
let sum = (b, a) => b + a;
let sub = (b, a) => b - a;
let mul = (b, a) => b * a;
let div = (b, a) => b / a;
let qar = (a, b) => sum(a, b) ** sub(a, b);
// n * (n + 1) / 2
let sum1toN = (_, n) => div(mul(n, sum(n, 1)), 2);
// HOF
let calc = (a, b, action) => action(a, b);
// let result = calc(5, 2, sum);
// let result1 = calc(5, 2, sub);
// console.log(result);
// console.log(result1);
let result2 = calc(1, 10, sum1toN);
console.log(result2);


//////////////////////////////////////////////////////////
/***************** tarberak 1 */
// function getMiddleEl(arr) {
//   let middleIndex;
//   if (arr.length % 2 === 1) {
//     middleIndex = (arr.length - 1) / 2;
//   } else {
//     middleIndex = arr.length / 2;
//   }
//   return arr[middleIndex];
// }
/***************** tarberak 2 */
// function getMiddleEl(arr) {
//   const isOdd = arr.length % 2 === 1;
//   let middleIndex = isOdd ? (arr.length - 1) / 2 : arr.length / 2;
//   return arr[middleIndex];
// }
//////////////////////////////////////////////////////////
/*****************************  for of ցիկլ  */
// let str = prompt(); // "1 5 7 2 6 9 7"
// let arr = str.split(" ")
// for(let el of arr){
//     el = Number(el)
// }
// աշխատանքի ընթացքը, արժեը կոպի է լինում
//// 1. let el = arr[0]
//// 2. el = Number(el)
//// 1. let el = arr[1]
//// 2. el = Number(el)
//// 1. let el = arr[2]
//// 2. el = Number(el)
// console.log(arr)
// let middleEl = getMiddleEl(arr)
// alert(middleEl + 50)
/*****************************  հասարակ ցիկլ  */
// let str = prompt(); // "1 5 7 2 6 9 7"
// let arr = str.split(" ")
// for(let i = 0; i < arr.length; ++i){
//     arr[i] = Number(arr[i])
// }
// console.log(arr)
// let middleEl = getMiddleEl(arr)
// alert(middleEl + 50)