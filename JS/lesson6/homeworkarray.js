// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

let styles = ["Джаз", "Блюз"];
alert(styles);
styles.push("Рок-н-ролл");
alert(styles);
let removedElement = styles.splice([(styles.length - 1) / 2], 1, "Классика");
alert(styles);
styles.shift();
alert(styles);
styles.unshift("Рэп", " Регги");
alert(styles);

////////////////////////////////////////////////////////

//Task 1 •	Դրական թվերի քանակը

let arr = [1, -5, 4, 2, 9, 7, -11, 3];
let quantity = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    quantity++;
  }
}
console.log(quantity);

////////////////////////////////////////////////////////

//Task 2 •	Բացասական թվերի գումարը

let arr = [1, -5, 4, 2, 9, 7, -11, 3];
let sumMinus = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    sumMinus += arr[i];
  }
}
console.log(sumMinus);

////////////////////////////////////////////////////////

//Task 3 •	Դրական թվերի միջին թվաբանականը

let arr = [1, -5, 4, 2, 9, 7, -11, 3];
let quantity = 0;
let sumPlus = 0;
let arithmeticMean;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    quantity++;
    sumPlus += arr[i];
  }
}
arithmeticMean = sumPlus / quantity;
console.log(arithmeticMean);

////////////////////////////////////////////////////////

//Task 4 •	Զույգ ինդեքս ունեցող թվերի գումարը

let arr = [1, -5, 4, 2, 9, 7, -11, 3];
let sumPositiveIndexElement = 0;

for (let i = 0; i < arr.length; i += 2) {
    sumPositiveIndexElement += arr[i];

}
console.log(sumPositiveIndexElement);

// another solution

// let arr = [1, -5, 4, 2, 9, 7, -11, 3];
// let sumPositiveIndexElement = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     sumPositiveIndexElement += arr[i];
//   }
// }
// console.log(sumPositiveIndexElement);

////////////////////////////////////////////////////////

//Task 5 •	Դրական և բացասական տարրերի քանակների տարբերությունը

let arr = [1, -5, 4, 2, 9, 7, -11, 3];
let amounth = 0;
let amounthPositive = 0;
let amounthNegative = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    amounthPositive++;
  } else {
    amounthNegative++;
  }
}
amounth = amounthPositive - amounthNegative;
console.log(amounth);

////////////////////////////////////////////////////////

//Task 6 •	Տրված [ 4 , 21 ] միջակայքին պատկանող տարրերի քանակը

let arr = [1, -5, 4, 2, 9, 7, -11, 3, 21];
let quantity = 0;

for (let i = 0; i < arr.length; i++){
  if (arr[i] >= 4 && arr[i] <= 21) {
    quantity++;
  }
}
console.log(quantity);

////////////////////////////////////////////////////////

//Task 7 •	Տրված [ -7, 15 ) միջակայքին պատկանող տարրերի արտադրյալը

let arr = [1, -5, 4, 2, 9, 7, -11, 3, 21];
let multiplication = 1;

for (let i = 0; i < arr.length; i++){
  if (arr[i] >= (-7) && arr[i] <= 15) {
    multiplication *= arr[i];
  }
}
console.log(multiplication);

////////////////////////////////////////////////////////

//Task 8 • Այն տարրերի քանակը որոնց արժեքի և ինդեքսի տարբերությունը դրական թիվ է

let arr = [1, -5, 4, 2, 9, 7, -11, 3, 21];
let quantity = 0;

for (let i = 0; i < arr.length; i++){
  if (arr[i] - i > 0) {
    quantity++;
  }
}
console.log(quantity);

////////////////////////////////////////////////////////

//Task 9 •	Զույգ արժեք ունեցող տարրերի քառակուսիների գումարը

let arr = [1, -5, 4, 2, 9, 7, -11, 3, 21];
let sumSquare = 0;
let square;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    square = arr[i] ** 2;
    sumSquare += square;
  }
}
console.log(sumSquare);

////////////////////////////////////////////////////////

//Task 10 •	3-ին բազմապատիկ տարրերի միջին թվաբանականը

let arr = [1, -5, 4, 2, 9, 7, -11, 3];
let quantity = 0;
let sum = 0;
let arithmeticMean;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    quantity++;
    sum += arr[i];
  }
}
arithmeticMean = sum / quantity;
console.log(arithmeticMean);

////////////////////////////////////////////////////////

//Task 11 •	Տրված k թվին բազմապատիկ տարրերի գումարը

let arr = [1, -5, 4, 2, 9, 7, -11, 3];
let k = prompt ('Enter value');
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % k === 0) {
    sum += arr[i];
  }
}
console.log(sum);

////////////////////////////////////////////////////////

//Task 12 •	Այն տարրերի քառակուսիների գումարը, որոնց արժեքների և ինդեքսների գումարը առանց մնացորդի բաժանվում է 3-ի։

let arr = [1, -5, 4, 2, 9, 7, -11, 3, 21];
let sumSquare = 0;
let square;

for (let i = 0; i < arr.length; i++) {
  if ((arr[i] + i) % 3 === 0) {
    square = arr[i] ** 2;
    sumSquare += square;
  }
}
console.log(sumSquare);

////////////////////////////////////////////////////////

//Task 13 •	Մեծագույն տարրը

let arr = [1, -5, 4, 2, 9, 45, 7, -11, 3, 21];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } 
}

console.log(max);

////////////////////////////////////////////////////////

//Task 14 •	Փոքրագույն տարրը

let arr = [1, -5, 4, 2, 9, 45, 7, -11, 3, 21];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  } 
}

console.log(min);

////////////////////////////////////////////////////////

//Task 15 •	Մեծագույն և փոքրագույն տարրերի գումարը
let arr = [1, -5, 4, 2, 9, 45, 7, -11, 3, 21];
let max = min = arr[0];
let minMax;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  } 
}
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } 
}
minMax = min + max
console.log(minMax);
