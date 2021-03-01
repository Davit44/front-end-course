// PromiseState => pending, resolve, reject
// Promise instance methods => then, catch, finally
// synchron 
// asynchron
let promise = new Promise((resolve, reject) => {
    console.log("first");
    setTimeout(() => resolve({ arr: [1,2,3,4,5] }), 0)
});
promise
    .then(() => console.log("third"))
    .catch(() => console.log("not log"))
    .finally(() => console.log("end promise"));
console.log("second");


//-----------------------------------------

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000)
});
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000)
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 0)
});
setTimeout(() => console.log("setTimeout"), 1000);
promise
    .then(() => console.log("promise"))
    .then(() => console.log("promise __ 2"))
    .then(() => setTimeout(() => console.log("setTimeout __ 1"), 0))
    .then(() => { 
            new Promise(res => setTimeout(() => res(), 500) )
                .then(() => console.log('p __ in then')) 
        }
    )
    .then(() => console.log("promise __ 4"))
promise1
    .then(() => console.log("promise1"))
promise2
    .then(() => console.log("promise2"))
 