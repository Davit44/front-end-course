
/////////////////////////////////////////////////////////
/////////// nor tema
/////////////////////////////////////////////////////////
// array methods with callBack functions
// let arr = [4, 5];
// arr.forEach(function () {});
// arr.forEach(() => {});
/***************************** foreEach */
// let arr = ["ggg", "hhh", "jjjj"];
// arr.forEach((el, index, arr) => {
//   console.log(el);
// });
/***************************** map */
// let arr = ["ggg", "hhh", "jjjj"];
// arr.map((el, index, arr) => {
//   console.log(el);
// });
/// orinak
// let arr = [4, 5, 3];
// let arr1 = arr.map(el => el * 3);
// arr1 => [12, 15, 9]
//orinak
// let arr = [4, 5, 3];
// let arr1 = arr.map(() => 3);
// arr1 => [3, 3, 3]
//////////////////////////////////////////////////////////////////////////
// const owners = [
//   { name: "Jack", from: 2000, to: 2005 },
//   { name: "Sam", from: 2006, to: 2010 },
//   { name: "Tom", from: 2010, to: 2015 },
// ];
//******************* */ tarberak 1
// ["Jack", "Sam", "Tom"];
// const names = [];
// for (let owner of owners) {
//   names.push(owner.name);
// }
//******************* */ tarberak 2
//const names1 = owners.map(owner => owner.name)
// ****************** */ tarnerak 3
// const getName = owner => owner.name
// const names1 = owners.map(getName)
///////////////////////////////////////////////////
/***************************** filter */
// let arr = [4, 8, 7, 9, 6, 4, 3];
// let arr1 = arr.filter(el => el % 2 === 0) // [4, 8, 6, 4]
// let arr1 = arr.filter(el => el > 4) // [8, 7, 9, 6]
//********** filter implementacum */
// let arr1 = [];
// for (let el of arr) {
//   if (el > 4) {
//     arr1.push(el);
//   }
// }
/************* */
// let arr1 = arr.filter((el, i) => {
//     // code
//     return el > 4 && el < 10 && i % 2 === 1
// })
// կամ
// let arr1 = arr.filter((el, i) => el > 4 && el < 10 && i % 2 === 1);
// forEach
// map => []
// filter => []