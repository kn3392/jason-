// function temp_fnc() {
// }

// temp_fnc();

// // first Class Function:
// // function can be treated as variable
// // let fnc = function(){}
// // let fnc = () =>{}

// let buyNow1 = function (product, price) {
//     console.log(product, price)
// }

// buyNow1("S24 FE", 50500);

// // function can be passed as arguments to other functions
// // let fnc = function(){}
// // fnc(function(){})

// function abc1(v1, v2){
//     console.log(v2);
//     return v1();
// }

// abc1(function(){
//     console.log("first class function")
// }, "Hello")


// function abc1(v1, v2){
//         console.log(v2);
//         return v1();
// }

// abc1(function(){
//     console.log("first class function")
// }, "Hello")


// function can be returned from other function
function abc(){
    return function (){
        console.log("function within function")
    }
}

abc()();


function abc2(){
    return () => {
        console.log("arrow function within function")
    }
}

abc2()();



// function can be returned from function
// pure vs impure function
// pure function --> function je same input par same output aapse ane
// koi bahar na state ne modify na kare (pure function --> je function
// bahar na state ne modify na kare )

let a = 20;
function change_a(){
    return "a not change(pure function)" + a;
} // -- pure function

console.log(change_a());

// impure function --> function je same input par different output
// aapse athava bahar na state ne modify kare (impure function --> je
// function bahar na state ne modify kare )

function change_a1(){
    a+=2;
    return "a change (impure function)" + a;
}

console.log(change_a1());

// closure function
// function je potana parent function na variables ne access kari 
// shake(return thava valo function use karshe parent function na koi 
// variable) (function within function)
function outer(){
  let outer_var = "Outer Function Variable";
  function inner(){
    console.log(outer_var);
  }
  inner();
}
outer();

//lexical scope --> nested function can access variables declared in their outer scope
function outer1() {
  let outer_var = "Outer Function Variable";
  function inner1() {
    console.log(outer_var);
    let inner_var = "Inner Function Variable";
    function most_inner() {
      console.log(outer_var);
      console.log(inner_var);
    }
    most_inner();
  }
  inner1();
}
outer1();


// IIFE - Immediately Invoked Function Expression
(function () {})(); // function je declare karta j call thai jaye
(function () {
  console.log("IIFE executed");
})();

 

// Hoisting in function
// use case --> show project structure
temp_fnc();


function temp_fnc(){
  console.log("hoisting in function")
}


