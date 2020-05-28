'use strict';
//strict mode makes it more strict, basically stronger typing
// Data Types
//String
var string = 'string'
var string2 = 'string'
var string3 = 'this is fun y\'all '
var string4 = "this is fun y'all"
var string5 = "bryce said coding is \"cool!\" ";
var intString = "0";

//Integers
var int = 1;
var int2 = 1.0;
var int3 = 1.345;
var int4 = 1e-2;//0.01
var int5 = 1e5;//100000

//var let const
var foo = 'bar';
let baz = 'foo';
const bar = 'baz';

//boolean
// the exclamation mark is the not operator: ! = boolean also; Ex:!true = false
var bool = false;
var boo1= true;
var bool2 = !false;//basically means true or  not false
var bool3  = !true;//basically means false or  not true
var array1 = [];
console.log('Array Length:',array1.length);

var bool4 = !array1.length;
console.log('bool4',bool4);

// falsy : JS book , pg 167
var highScore = false;
var highScore2 = 0;
var highScore3 = '';
var highScore4 = 10/'score'; //NaN
var highScore5; //undefined /NULL
//of it's not one of this five, it's true

//page 168: null
var null1 = null;
console.log(!highScore);



// will work
const arrayConst = [1,2];
arrayConst.push(3,4);
console.log(arrayConst);
arrayConst.pop()
console.log(arrayConst);
//won't work
// arrayConst = {
//     name: 'deonte'
// }


const objConst = {
    name:'deonte'
}
objConst.last = 'horton';
 console.log(objConst);
 
 var result = 0 
 let num1 = 6;
 {
    let num1 = 2
    let num2 = 4
    result = num1 + num2
 }
 console.log(result);
 

 //!!Both an array and object and store what ever you want!!

// array 
var array = [1,2,3]
console.log(array);
console.log(array[1]);//2
console.log(array.length);//counting the length starting with the first number not using 0 based index



//object
//object literal, different from array
var obj = {
    key:'value',
    name:'deonte',
    email:'blabla@nuya.com'
    //keyVar: doesn't exist
}
//two different notation types
console.log(obj['key']);
console.log(obj.key);

var keyVar = 'key';
console.log('key as key variable:',obj[keyVar]);

 //!!Both an array and object and store what ever you want!!

//sum is not working because it is being invoked instead of being transported
var obj1 = {
    sum: sum,
    cost:1.99,
    tax:1.22,
    total:function (num1 ,num2) {
        return num1 + num2
    }
}


var array2 = [1,2,sum, function (num1 ,num2) {
    return num1 + num2
}];// 1, 2, sum // NaN
var result2 = array2[2];
console.log(result2);

var result3 = array2[2];
console.log(result3(2,3));

var resultSum = obj1.sum(obj1.cost , obj1.tax);
console.log(resultSum);

function sum(num1,num2) {
    return num1 + num2
}

//conditionals
//the string of true is not the same as boolean true
//string of '5' is equal to the int of 5

// ==, ===, <, >. <=, >=, ||(or), &&(and)
var condition = 5;
if (condition == true) {//if condition is true
    //do stuff

    //string
    console.log('true');
    //boolean
    console.log(true);
}
if ( condition > 4 && condition < 10 ) {// true , range:5-9
    //do stuff
    console.log(true);
    
}
//the ASCII TABLE
// when it comes to strings the higher the letter in tha alphabet, the higher the value is
// lowercase is greater than the uppercase 
//Ex: a is less than be because b is after a
if ('a' < 'b') {
    console.log('let\s find out');
    
}
var condition2 = 'brown';
if (condition2 == 'red' || condition2 == 'blue' || condition2 == 'brown' || condition2 == 'green') {
    console.log('True');
    
}

var condition3 = false;
if (condition3) {
    //do stuff
    console.log('Message: condition was true');
    
}else{
    //do other stuff
    console.log('Message: condition was false');
    
}

var condition4 = 3;
if (condition4 > 10) {
    console.log('Greater than 10');
}else if (condition4 > 5) {
    console.log('Greater than 5');
}else if (condition4 >= 0) {
    console.log('Greater than 0');
}else {
    console.log('Nan');
}

    
//loops
//for loop
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // do stuff
}
// for each loop
array.forEach(element => {
    // do stuff
});
// for in loop
for (const coin in bag) {
    if (coin > 5) {
        //do tuff
    }
}
//while loop
while (length--) {
    //do stuff
}
//function
//function with no param
function myFunc() {
    //do stuff
}
//function with param
function myFunc2(params) {
    //do stuff
}
// right hand function- anonymous function
let haha = function () {
    // do stuff
}
// arrow function
const MY_CAKE = () => {

}







