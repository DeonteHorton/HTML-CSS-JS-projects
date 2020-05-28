// new things
    // this script types in a string
        //<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
    
    


var foo = "hello";
var bar  = "hi";
{
    let bar = "world";
    const yo = "yoyo";
    console.log(bar);
    // console.log(yo);
    
}
console.log(bar);

const baz = "yo";

// baz = foo ; can't do that!!!!

const boo = [];
boo.push(1);
console.log(boo);
boo.pop();
console.log(boo);




console.log(foo);// hello
console.log(baz);

//console.log(bar);// not defined



var pay= 0;
{
    let payRate = 18;
    let weeklyPay = payRate * 40;
    let monthlyPay = weeklyPay * 4;
    let yearlyPay = monthlyPay * 12;
    pay = yearlyPay
}
console.log(pay);

//array literal
let arr = [];
let arr2 = [1,2,3,4];
console.log(arr2[0]); // 1
console.log(arr2[4]); // is undefined because the array itself is defined. is undefined but not (not defined);

let arr3 = []
arr3[2] = "hello";
arr3[5] = "world";
console.log(arr3);
console.log(arr3[0]);

let arr4 = new Array(9).fill(0);
console.log(arr4);


let arr5 = [2+3, 5-1, 2*6];
console.log(arr5);

let arr6 = [
    [1,2,3],// at 0 
    [4,5,6],// at 1
    [7,8,9]// at 2
]
console.log(arr6[0][2]);// will get 3 from the first array inside the array
console.log(arr6[2][0]);// will get 7 from the last array inside the array
console.log("<-------->");


for (let i = 0; i < arr6.length; i++) {
    //console.log(arr6[i]);// going to log all the arrays inside arr6
    for (let j = 0; j < arr6[i].length; j++) {
        console.log(arr6[i][j]);// going to log all the items inside the child arrays of the array
        //to get the first items from each
        if (j == 1) {
            break;
        }
    }
    
}
console.log("<----------------------->");

var result = 0;
var num1 = 5;
var num2 = 5;
let arr7 = [

    [
        function () {
            result = num1 + num2;
            return result;
        }
    ]
]
console.log(arr7[result]);

// object literal
// note if you don't want to change anything in an object use Object.freeze
let obj = {};
let obj1 = {
    key: "value",
    key2: 0,
    key3: [1,2,3,4,5,6,7,8,9,10],
    key4: true,
    key5:{
        key: "value"
    }
}
// use bracket or dot notation
console.log(obj1['key']);
console.log(obj1.key3);

let obj2 = {};

obj2[0] = "lorem";
obj2[2] = "lorem";
obj2[4] = "lorem";

console.log(obj2);

let obj3 = {
    fname: "deonte",
    lname: "horton"
}
let name = "fname";
console.log(obj3.name);// undefined- name does not exist when using dot notation
console.log(obj3[name]);// works because fname was changed to name... works with bracket notation



// mile per gallon
/*
    $2.20 per gallon of gas 
    takes $20 to fill tank
    19 mpg in city/ 26 mpg highway
    4.5 miles from home to school
    spend $20 a week for gas 
*/
// var moneySpent = 0;
// {
// let gas = 20;
// let weekly = gas * 1;
// let monthly = weekly * 4;
// let yearly = monthly * 12;
//  moneySpent = yearly;
// }

// console.log(moneySpent);


// let gasRate = 2.20;
// let mpg = 22;
// let mth = 4.5;
// let tankCap = 18;

// let costOfTank = gasRate * tankCap;
// let distant = mth * 2 ;
// let weekDistant = distant * 5;
// let monthDistant = weekDistant * 4;
// let totalDistant = monthDistant * 12;

// let totalMiles  = totalDistant/mpg;
// let totalCost = totalMiles * gasRate;

// console.log(totalCost);

let arr11 = ["deonte", "horton", "green", " maple street"]
let obj4 = {
    fname:"deonte",
    lname:"horton",
    address:"maple street",
    lang: ["JavaScript", "C-sharp"]
}
console.log(obj4["lang"]);

/* 
    Assignment operator
    =
    Comparison operator
    == loose comparison
    !=loose not equal
    === strict comparison -> Same Data type as well as equal
    != strict not equal
    > Greater
    < Less than
    <= Greater than or equal
    >= less than or equal

    String multiple comparison together
    && And operator
    || OR operator
*/
//SOMETHING COOL TO REMEMBER WHEN TRYING TO CONVERT STRING NUMBER
var number = ('2' * 1) + 3; // 5.... it basically converted the string of 2 to an integer
console.log("Something very cool to remember,check VS Code",number);

console.log(2 ==2 && 2 == '2'); //true 
console.log(2 === 2 && 2 === '2'); //false

// Boolean
var one = true;
var two = false;

// Not
var three = !true; // false
var four = !false; // true

//Truthy / Falsey
/* 
    0 == FALSE
    "" == fasle
    NaN = false
    NuLL = false
    undefined = false
    false = false
    Everything that not in the list above is true
*/

console.log(!2 == '2');
console.log( !2 === '2');
console.log("Conditionals");

// conditionals
if (2 == '2')  {
    console.log(2 == '2');
    
}

if (true) {
    //excute code
} else{
    //  excute other code
}

if (5 < 10) {
    console.log("5 is less than 10");
    
} else {
    console.log(" it's wrong");
    
}
if (5 > 10) {
    console.log("this is right");
    
} else {
    console.log("Somethings not right");
    
}

if (5 < 3) {
    // do stuff
    console.log(" do stuff");
    
} else if (5 == '5') {
    // do other stuff
    console.log("do this stuff");
    
} else {
    //do this stuff
    console.log("Do other stuff");
    
}

//function
function additionByTwo(num) {
    let result = num * 2;
    console.log(result);
    return result;
    
}
additionByTwo('2' * 1 );

const subtractFrom100 = (num) => {
    let result = 100 - num;
    console.log(result);
    return result
    
}
subtractFrom100(5);
console.log("<------------>");

// Loops
let array = [1,2,3,4];

//console.log(array[0]);

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
}
array.forEach(el => {
    // do stuff
    console.log(el);
    
})

let hello = true;
let goodbye = false;
/* while (hello) {
    if (goodbye) {
        hello = false
    }
    goodbye = true;
    //debugger
    console.log("Here");// 2
    
} */

do {
    if (goodbye) {
        hello = false
    }
    goodbye =true;
    console.log("Here"); // 2
    
} while (hello);


const person = {
    name:"Deonte",
    age:19,
    address:{
        city:"Jackson",
        state:"MS",
        ZIP:39204
    }
}

//each value
// accessing the key in the object inside an object
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        const value = person[key];
        console.log('Key:',key,',Value:',value);
        console.log("<----->");
        
        if (key == "address") {
            let address = value;
            console.log(" state in address object:",address.state);
            
        }
        
    }
}

console.log("<----------->");

// gets the value
// each letter of string or every number
let food = ["Pizza","bread","butter","milk"]
for (const value of food) {
    console.log(value);
    
}

//BREAK, CONTINUE
/* for (const key in food) {
    if (food.hasOwnProperty(key)) {
        if (key == 1) {
            break;
        }
        console.log(key);
        
    }
} */

for (const key in food) {
    if (food.hasOwnProperty(key)) {
        if (key == 1) {
            continue;
        }
        console.log(key);
        
    }
}

console.log("<----->");

//letter counter
// looping through string, counting the characters and finding the repeated characters
function charRepeat(string) {
    let repeat = {};
    for (const value of string) {
        var character = value.charAt(string)
        
        if (repeat[character]) {
            repeat[character]++
        } else{
            repeat[character] = 1;
        }
    }
    return repeat
}
console.log(charRepeat("Peter Piper Pickle Pan Penny".toLowerCase()));

console.log("<--->");
console.log("The DOM");


//The Dom

let output = document.getElementById("output");
console.log(output);
//Manipulated the innertext in the p tag 
//setting the innerText
output.innerText = "Hello World";

//getting the innerText
let hi = output.innerText;


let selectAll = document.querySelectorAll(".item");
console.log(selectAll);


//  CREATE AND ADD ELEMENTS TO THE DOM
const snacks = [
    {
        name:"Beer",
        price:6.99,
        brand:"Beer"
    },
    {
        name:"Pizza",
        price:2.99,
        brand:"Totino\s"
    },
    {
        name:"bread",
        price:8.99,
        brand:"Ezekiel"
    }
]

function changeColor() {
    snacksOutput.style.display = 'red';
}

const snacksOutput = document.getElementById("snacks")

for (const item in snacks) {
    const snack = snacks[item];
    let el = document.createElement("li");

    //Template literals
    el.innerText = `Name:${snack.name} -  $${snack.price} - Brand:${snack.brand}`;
    el.classList.add("foo");
    el.setAttribute("data-id",item);


    snacksOutput.appendChild(el);
    el.addEventListener('click',addToCart)
}

let cart  = {};
function addToCart() {
    let item = this.getAttribute('data-id')
    let snack = snacks[item]

    if (cart[snack.name]) {
        cart[snack.name].qty++
    } else {
        cart[snack.name] = {
            qty:1,
            price:snack.price
        }
    }
    console.log(cart);
    
}

// bread crumb method
isUnique = (arrr) => {
    const breadcrumbs = [];
    let result = true;
    for (let i = 0; i < arrr.length; i++) {
        console.log(`~~~~LOOP~~~~ 1 === ${i}`);
        if (breadcrumbs[arrr[i]]) {
            result = false;
        } else {
            breadcrumbs[arrr[i]] = true;
        }
        
    }
    return result;
}


console.log('~~~~~~~');

const uniqSort = function (arr) {
    const breadcrumbs = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (breadcrumbs[element]) {
           continue;
        } else {
            breadcrumbs[element] = element;
        }
    
    }
    arr = [];
    for (const item in breadcrumbs) {
        arr.push(breadcrumbs[item])
    }
    arr = Object.values(breadcrumbs)
    return arr.sort((a, b) => a - b);
}
 console.log(uniqSort([4,2,2,3,2,2,2]), [2,3,4]);

  if (enemy1.health = 0) {
      // move on to enemy2
      if (enemy2.health = 0) {
          // move on to enemy3
      }
      if (enemy3.health = 0) {
          //move on to enemy4
      }
  } else{
      // game over
  }
  