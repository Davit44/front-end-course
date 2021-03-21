// OOP
// Object oriented programming
// 1. Inheritance
//// --- prototype
// 2. Encapsulation
//// --- 1. public
//// --- 2. private
//// --- 3. protected
// 3. Polimorphism

/////////////////////////////////////////////
class AbstructStudent {
    enter(){
        console.error("student enter method is not defined")
    }
    exit(){
         console.error("student exit method is not defined")
    }
}
class IKMStudent extends AbstructStudent {
    enter(){
        console.log("this student enter to IKM")
    }
}
let student = new IKMStudent()
student.enter() // ok
student.exit() // error

///////////////////////////////////////////////

function firstDigit(str) {
    // imperative
    for(let i = 0; i < str.length; i++){
        if(str[i] !== " " && !isNaN(str[i])) return str[i];
    }
    // declarative
    const numbers = ["0","1","2","3","4","5","6","7","8","9"];
    return [...str].find(symbol => numbers.includes(symbol))
}