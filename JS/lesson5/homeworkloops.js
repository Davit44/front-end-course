// Task 1

// let n = +prompt("enter number");
// let sum = 0;

// for (let i = 1 ; i <= n ; i++ ) {
//     if (i % 2 !== 0) continue;
//     sum += i
// }
// alert (sum);

let n = +prompt("enter number");
let sum = 0;

for (let i = 0 ; i <= n ; i += 2 ) {
    sum += i
}
alert (sum);

////////////////////////////////////////////

// Task 2 

let n = +prompt("enter number");
let sum = 0;

for (let i = 1 ; i <= n ; i += 2 ) {
    sum += i
}
alert (sum);

////////////////////////////////////////////

// //Task 3

// let n = +prompt("enter number");
// let sum = 0;

// for (let i = 1 ; i <= n ; i++ ) {
//    if (i % 3 !== 1) continue;
// sum += i;
// }
// alert (sum);

let n = +prompt("enter number");
let sum = 0;

for (let i = 1 ; i <= n ; i += 3 ) {
    sum += i;
    
}
alert (sum)

// ////////////////////////////////////////////

// //Task 4

let n = +prompt("enter number");
let quantity = 0;

for (let i = 7 ; i <= n ; i += 7 ) {
quantity ++;
}
alert (quantity);

////////////////////////////////////////////

// //Task 5 

let n = +prompt("enter number");
let quantity = 0;

for (let i = 1 ; i <= n ; i++ ) {
    if(i % 2 === 0) {
quantity ++ ;
    }
}
alert (quantity)

////////////////////////////////////////////

//Task 6

let n = +prompt ("Enter number");
let oddMultiplication = 1;

for(let i = 1 ; i <= n ; i += 2 ) {
    oddMultiplication *= i;
}

alert (oddMultiplication);

////////////////////////////////////////////

//Task 7

let n = +prompt ("Enter number");

for (let i = n ; i >= 1 ; i--) {
    console.log(i)

}

////////////////////////////////////////////

//Task 8

let number = +prompt ("Enter number");
let digitQuantity = 1;

for ( ; number / 10 >= 1 ; digitQuantity++) {
    number /= 10 ;

}
console.log(digitQuantity);

////////////////////////////////////////////

//Task 9
// // sxal ka chem jogum inchna

let number = +prompt ("Enter number");
let digitQuantity = 1;
let sum = 0;
for ( ; number / 10 >= 1 ; digitQuantity++) {
    sum += (number % 10);
    number /= 10 ;

}
console.log(sum);


// let number = +prompt("Enter your number");
// let sumOfDigits = 0

// for (let n = 10 ; (number % n) > 0 ; n *= 10) {
//     sumOfDigits += (number % n);
//    }

// alert(sumOfDigits);

////////////////////////////////////////////

//Task 10

let main = 17;

for (let number = 999 ; number >= 100 && number <= 999 ; number--) {
    if( number % main === 0 ) {
        console.log(number);
    break;
    }
}

////////////////////////////////////////////

//Task 11
//Enqan el en chi inch petqa liner
let rowQuantity = +prompt("Enter number of rows");

for (let row = 1 ; row <= rowQuantity ; row++ ) {
    for (space = 1 ; space <= rowQuantity - row; space++) {
    document.write ("&nbsp;");
    }

    for (a = 1 ; a <= row; a++) {
        document.write("*");
}
    document.write('<br>');
}


