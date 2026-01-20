// var a ="tamp"
// var _123="hello"
// var $123="hello"
// b=24;
// console.log(a)
// //declare and initialization
// var b;//declre
// var temp_d=12;// declare and initialize for first time
// //var add value into window object
// //var is function scoped
// //var can be redeclared and reassigned
// var name ="suer name";
// let nmae1="user name";


// // reassignment and redeclaretion
// var temp =12;
// temp="number";//reassignment
// var temp ="text";//redeclaretion
// //let temp_a=12;
// //var temp_a="hello";//error-redeclaration not allowed
// const temp_b="name";
// temp_b="username";//error-reassignment not allowed


// //scope(global ,block, function)
// var e=23;//global scope
// console.log("global scope"+e);

// {
//     var e=45;//block scope
//     console.log("block scope"+e);
// }
// function abc(){
//     var e=67;//function scope
//     console.log("function scope"+e);
// }   
// abc();
// console.log("outside"+e);

// let f=23;//global scope
// console.log("global scope let"+f);

// {
//     let f=45;//block scope
//     console.log("block scope let"+f);
// }
// function abc(){
//     let f=67;//function scope
//     console.log("function scope let"+f);
// }   
// abc();
// console.log("outside let"+f);           


// //temporal dead zone(tdz)
// console.log(h);
// var h=24;

// //console.log(g);
// console.log(j);
// let j=12;

// //hoisting imapact
// //hoisting --> when your create a variable into js that braek into two part fist is declare part that go to up and there initialize part that go down
// var temp_d=12;
// //var temp_d; --> undefined; -->that go to up
// //temp_d=12; --> that go to down(means stuck into line 66)
// //if you use console.log before intialize that give you undefined;

// let temp_d_let=24;
// //let variable not use before initialization 
// //if you use console.log before intialize that give you reference error;
// //hoisting not happen with let and const
// /*
// var --> hoist -->undefined
// let --> hoist -->reference error
// const --> hoist -->reference error
// */

const person = {name: "demo"};  
console.log(person.name);
person.name= "user";
person = {} ;