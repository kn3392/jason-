//data types:
//two type of data types:
//1. primitive data types
// copy --> real value
let a=5; //number
let b=a; //copy

//types: string , number, boolean, undefined, null, symbol, bigInt

//2. non-primitive data types(refrence data types) [], (), {}
//copy --> give reference of parent 
let d=[1,2,3]; //array
let c=d; //reference

//types: array[], object{}, function()

// <-----Primitive Data Types----->
 
// types: string, number, boolean, null, undefined, symbol, bigint
 
// string:
// '' - single quotes
// "" - double quotes
// `` - backticks
 
let tamp_d = "name";
tamp_d = "username";
tamp_d = `firstname`;
 
// number:
let tamp_e = 12;
tamp_e = 12.25;
tamp_e = -25;

// boolean:
let tamp_f = true;
tamp_f = false;     
// null:
//you give a value
let tamp_g = null;

// undefined:
//you dont give a value,by default value
let h;


//symbol:
//unique immutable value
let u1= Symbol("uid");
let u2= Symbol("uid");
// check u1==u2
let obj = { uid: 1, name: "test", email: "test@test.com" };
let u3 = "uid";
let u4 = Symbol("uid");
// obj[u3] = "001";
 
//bigint:
//check range of number, number.max_safe_integer
let number=9007199254741991;
number=number+10;
let num2=9007199254741991n;
num2+4n;

// <----Non-Primitive Data Types---->
// types: arrays [], objects {}, functoins ()
let temp_array = ["user1", "user2", "user3"];
let temp_obj = { name: "test", age: 9, phone_number: 558998554 };
let profiles = [
    { name: "test1", age: 10, phone_number: 98989775 },
    { name: "test2", age: 15, phone_number: 9898889775 },
    { name: "test3", age: 11, phone_number: 9898975575 },
];
function name(params) {}

// Dynamic Typing
let u_name = "username"; //string
u_name = 123;  //number
u_name = {}; // object
// javascript --> typescript(ts)

// typeof quirks
// typeof 12
// check type of variable use --> ex. typeof NaN, typeofnull, 1 + "1", 1 == "1", 1 === "1"
// why typeof NaN --> number
// NaN is a failed number oprations that why that type isnumber
// ex. "hello" - 5 --> NaN

//type conversion
//"5" +1 //+--> value add and coeration(mix)
//"5"-1

//truthy and falsy values
//0, false, "", null, undefined, NaN , document.all,-- falsy values
//ex. !!0-- check value is true or false
//ex. if(null)}{}, js convert  it into false
//ex. if(-1){} , js convert it into true
//all --> true
