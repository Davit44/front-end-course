const mult = document.querySelector(".mult");
const divide = document.querySelector(".divide");
const firstNum = document.querySelector(".input__first");
const secondNum = document.querySelector(".input__second");
const pInner = document.querySelector(".input")

mult.addEventListener("click", function() {
    let fNum = firstNum.value;
    let sNum = secondNum.value;
 pInner.innerHTML = fNum * sNum
    
})

divide.addEventListener("click", function() {
    let fNum = firstNum.value;
    let sNum = secondNum.value;
    pInner.innerHTML = fNum / sNum
    
})