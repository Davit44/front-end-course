//1․ Տրված է կամայական քանակի property-ների օբյեկտ․․․ Գտնել օբյեկտի property-ների քանակը:

let count = 0;
let home = {
    adress: 32,
    street: 9,
    rooms: 5,
    type: 'house',
}

for(let key in home) {
    count++
}

console.log(count);


///////////////////////////////////////////////////////////////

//2. Ունենք հետևյալ օբյեկտը ՝
// {
//     firstName: "Jack",
//     lastName: "Parker",
//     age: 48,
//     job: "programmer",
//   };
//   այս օբյեկտը ձևափոխել այնպես, որ ստացվի հետևյալը`
//   [
//     ["firstName", "Jack"],
//     ["lastName", "Parker"],
//     ["age", 48],
//     ["job", "programmer"],
//   ];
//   կոդը պետք է աշխատի ցանկացած քանակի զանգվածի դեպքում:


// Խնդիրը մասսամբ է լուծված

let arr = [];
let obj = {
        firstName: "Jack",
        lastName: "Parker",
        age: 48,
        job: "programmer",
      };

      for (let key in obj) {
    arr.push(key);
    arr.push(obj[key]);
}

console.log(arr)

///////////////////////////////////////////////////////////////

//3. Ստուգել օբյեկտը դատարկ է թե ոչ։

let count = 0;
let home = {
    adress: 32,
    street: 9,
    rooms: 5,
    type: 'house',
}

for(let key in home) {
    count++
}

if(count === 0){
console.log('The object is empty');
} else console.log('The object is filled');


///////////////////////////////////////////////////////////////

//4․ Գտնել օբյեկտի բոլոր այն պրոպերթիների քանակաը, որնց արժեքի տիպը "string" է:


let count = 0;
let home = {
    adress: '32',
    street: 9,
    rooms: 5,
    type: 'house',
}

for(let key in home) {
    if(typeof home[key] === 'string'){
        count++
    }
}

console.log(count);

///////////////////////////////////////////////////////////////

//5․ Գրել սորտավորման ալգորիթմ, որը կսորտավորի թվերի զանգավածը աճման կարգով (կարող եք օգտվել bubble սորտինգից(որոնել համացանցում)):

let arr = [12, 5, 3, 8, 6, 0, 4, 7, -2, 14, 99, -64];
let temp;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++){
        if (arr[j] > arr[j + 1] ){
            temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);


//Variant 2

let arr = [12, 5, 3, 8, 6, 0, 4, 7, -2, 14, 99, -64];
let temp;
let swapped;

do {
    swapped = false;
    for (let j = 0; j < arr.length; j++){
        if (arr[j] > arr[j + 1] ){
            temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
            swapped = true;
        }
    }
} while(swapped);
console.log(arr);

///////////////////////////////////////////////////////////////

//6․Սորտավորել հետևյալ զանգվածը ըստ տարեթվերի աճման՝
// Լուծված չի
// let temp;

let arr = [
    {
      title: "The Road Ahead",
      author: "Bill Gates",
      date: 2009,
    },
    {
      title: "Walter Isaacson",
      author: "Steve Jobs",
      date: 2015,
    },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      date: 2007,
    },
  ];


for(let i = 0; i < arr.length; i++){
    for (let key in arr[i]) {
        if (arr[i][date] > arr[i + 1][date]) {
            temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }
    }

}
console.log(arr);
