// խնդիր 1 Գրել multiplyFive անվամբ ֆունկցիա, որը ստանում է թիվ և վերադարձնում դրա հնգապատիկը, օր․՝ 7 => 35

let multiplyFive = (input) => input * 5;

let input = +prompt("Write your number");

alert(multiplyFive(input));

//////////
function multiplyFive(input) {
  return input * 5;
}
let input = +prompt("Write your number");
multiplyFive(input);

// խնդիր 2
// Գրել ֆունկցիա, որը ստանում է զանգված և վերադարձնում է մեջտեղի էլեմենտի արժեքը,  օր․՝ [4, 8, 2, 15, 9, 7, 3] => 15, զույգ քանակի դեպքում աջ էլէմենտը, օր․՝ [4, 8, 7, 3] => 7

function getMiddleEl(arr) {
  let middleElIndex;
  if (arr.length % 2 === 1) {
    middleElIndex = (arr.length - 1) / 2;
  } else middleElIndex = arr.length / 2;
  return arr[middleElIndex];
}

let arr = [4, 8, 2, 15, 9, 7, 3];
getMiddleEl(arr);

/////

// խնդիր 3
// Գրել ֆունկցիա, որը ստանում է զանգված և վերադարձնում է մեջտեղի էլեմենտի արժեքը և ինդեքսը

let arr = [1, 2, 5, 3, 4];
function getMiddleValuIndex(arr) {
  let middleElIndex;
  let middleElValue;
  if (arr.length % 2 === 1) {
    middleElIndex = (arr.length - 1) / 2;
    middleElValue = arr[middleElIndex];
    return middleElIndex, middleElValue;
  } else console.log("no middle element");
}

getMiddleValuIndex(arr);


// խնդիր 9
// Գրել ֆունկցիա, որը ստանում է թվերի զանգված և վերադարձնում երկրորդ ամենամեծ թիվը և երկրորդ ամենափոքր թիվը զանգվածի տեսքով, օր․՝ [4, 3, 8, 2, 15, 9, 7, 6] => [9, 3]

const getNumbers = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b)
  const secondSmall = sortedArr[1]
  const secondBig = sortedArr[arr.length - 2]
  // return [secondSmall, secondBig]
  return { secondSmall, secondBig }
}
const arrNums = [4, 3, 8, 2, 15, 9, 7, 6]
const result = getNumbers(arrNums)
// result.secondSmall === 3


//////////// 2 tarberak Gogi

let getMin = (arr) => {
  let min = arr[0]; // 2
  let min2 = arr[0]; // 3
  for(let el of arr){
      if(el > min2 && el < min){
          min = el 
      } else if(el < min){
          min2 = min
          min = el;
      }
  }
  let max = arr[0]; // 15
  let max2 = arr[0]; // 8
  for(let el of arr){
      if(el > max2 && el < max){
          max2 = el 
      } else if(el > max){
          max2 = max
          max = el
      }
  }
  return [max2, min2]
}
let array = [5, 8, 4, 15, 9, 3, 7, 6]
let res = getMin(array)