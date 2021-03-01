// class vs constructor function
// function f() {}
// f.prototype.d = function () {};
// f.prototype.a = function () {};
// new f();
// class F {
//   d() {}
//   a() {}
// }
// new F();
// 1. cannot be invoked without 'new'
// 2. prototype methods flag enumerable false
// 3. "use strict" all body
// ------------- Inheritance
// Form; // --- inp1, inp2, inp3, inp4,
// Input; // --- inp1, inp2, inp3, inp4,
// Element; //
// Button; // --- btn1, btn2, btn3, btn4,
// Image; // --- btn1, btn2, btn3, btn4,
class AB {
    f() {}
  }
  class A extends AB {}
  class B extends AB {}