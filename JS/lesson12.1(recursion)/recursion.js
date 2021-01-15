function boo(){
    console.log("        boo work");
}
function goo(){
    console.log("    goo work");
    boo()
    console.log("    goo end");
}
function foo(){
    console.log("foo work");
    goo()
    console.log("foo end");
}
foo()

///

function foo(){
    console.log("foo work");
    foo()
    console.log("foo end");
}
foo()
// data structurs
//
// stack
// => push
// <= pop
// V8 Engine => js
// stack => 1mb
// stack overflow Error


////

// factorial
// 1 * 2 * 3 * 4 * 5 * ... * n
// n!
let result = 1;
let factorial = 5;
for(let i = 1; i <= factorial; ++i){
    result *= i;
}
console.log(result)

///// while

let result = 1;
let i = 1;
let factorial = 5;

while (i <= factorial){
    result *= i;
    i++;
}
console.log(result);


// factorial  recursion
// 1 * 2 * 3 * 4 * 5 * ... * n
// n!
// n!
// n * (n - 1)!
function factorial(n){
    if(n <= 1) return 1;
    return n * factorial(n - 1)
}
let result = factorial(Math.abs(-5))


///////////////////FACTORIAL////////////////////
// factorial
// 1 * 2 * 3 * 4 * 5 * ... * n
// n!
let result = 1;
let factorial = 5;
for(let i = 1; i <= factorial; ++i){
    result *= i;
}
console.log(result)


// factorial
// 1 * 2 * 3 * 4 * 5 * ... * n
// n!
// n!
// n * (n - 1)!
function factorial(n){
    if(n <= 1) return 1;
    return n * factorial(n - 1)
}
let result = factorial(Math.abs(-5))


///////////////////////FIBONACHI///////////////////
// fibonachi
// 1 1 2 3 5 8 13 21 34 ... 
// 1 2 3 4 5 6 7  8  9  ... n
// 1.618
function fib(n){
    if(n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
let result = fib(6)
// fib(3) = fib(2) + fib(1)
// fib(5)
//     fib(4)
//         fib(3)
//            fib(2)
//                1
//            fib(1)
//                1 
//         fib(2)
//             1
//     fib(3)
//        fib(2)
//            1
//        fib(1)
//            1 
// fib(4)
//     fib(3)
//        fib(2)
//            1
//        fib(1)
//            1 
//     fib(2)
//         1
//////////////////////////////////////////////
// fib(5)
//     fib(4)
//         fib(3)
//            fib(2)
//                1
//            fib(1)
//                1 
//         fib(2)
//             1
//     fib(3)
//        fib(2)
//            1
//        fib(1)
//            1 
// fib(4)
//     fib(3)
//        fib(2)
//            1
//        fib(1)
//            1 
//     fib(2)
//         1


// fibonachi
// 1 1 2 3 5 8 13 21 34 ...
// 1 2 3 4 5 6 7  8  9  ... n
// 1.618
function fib(n){
    if(n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
let result = fib(50)
console.log(result)
// fib(3) = fib(2) + fib(1)

// fibonachi
// 1 1 2 3 5 8 13 21 34 ...
// 1 2 3 4 5 6 7  8  9  ... n
let cache = [1, 1];
function fib(n){
    if( cache[n - 1] ) return cache[n - 1];
    let nextFib = fib(n - 1) + fib(n - 2);
    cache.push(nextFib)
    return nextFib
}
let result = fib(1000)
console.log(result)
