// // params are generated variables
// // the question marks means turnary operator: turnary is equal to if/else operator 
// //This is an inline if else
// //Ex if last equal is true use last else use horton
// // if (last){last}else{horton}

// // function name(first, last) {
// //     last  = last ? last : 'horton'
// //     console.log(first,last);
    
// // }
// //name('deonte', );

//  function name(first = 'deonte', last = 'horton') {

    
//      console.log(first,last);
    
// } 
// name('deonte','bob')
// name('Deonte')
// name()


// function scope(param1 = 'hello', param2 = 'world') {
//      newVar = 'hola';
//      newLet = 'mundo';
//      newConst = '!';
//     console.log(param1, param2, newConst);
    
// }
// scope()
// newConst = 'oops'
// console.log(newVar);
// console.log(newLet);
// console.log(newConst);

// function sum(num1 , num2) {
    
//     return num1 + num2;
// }
// add += 3;
// var add = sum(1,2);

// console.log('add ==',add);

// //function expressions
// // var wave = function name(params) {
// //     //..
// // }

// // var ids = people.map(function getId(person) {
// //     return person.ids
// // });
// // //Known as Iffies
// // (function name(params) {
    
// // })();

// //order does matter

// var number =2;
// function multipleByNumber(num1, num2) {
//     return num1 * num2
// }
// var result = multipleByNumber(5, number)
// console.log(result);

// var divide = function divdedByNumber(num1, num2) {
//     return num1 /num2
    
// }
// var result2 = divide(10,5)
// console.log(result2);


// //this is refering to the object
// //Ex var book = {page1, page2}, this equal book // this.page1 = book.page1
// //checkout blank.ask and blank.call in google
// // var hotel = {
// //     rooms:40,
// //     booked:2,
// //     checkAvailability: function () {
// //         return this.room - this.booked
// //     }
// // }

// //new way 
// // class hotel {
// //     constructor(name, rooms, booked) {
// //         this.name = name;
// //         this.rooms = rooms;
// //         this.booked = booked;
// //         this.checkAvailability = function () {
// //             return this.rooms - this.booked;
// //         };
// //     }
// // }


// //old way
// function hotel(name, rooms, booked) {
//     this.name = name;
//     this.rooms = rooms;
//     this.booked = booked;
//     this.checkAvailability = function () {
//        return  this.rooms - this.booked;
//     }
// }

// var quayHotel = new hotel('quay', 40, 25);

// quayHotel.booked += 1;

// console.log(quayHotel.checkAvailability());

// //switch statment
// // similar to if/else plus it's cleaner
// //case = if
// //default = else
// function calc(num1,num2,type = 'add') {
//     switch (type) {
//         case 'add':
//             result = num1 + num2;
//             break;
//         case 'subtract':
//             result = num1 - num2;
//             break;
//         case 'multiply':
//             result = num1 * num2;
//             break;
//         case 'divide':
//             result = num1 / num2;
//             break;
    
//         default:
//             //else do stuff
//             break;
//     }
//     return result
// }
// var result = calc(3,1,'subtract')
// console.log(result);



function coinTotal(P = 500, N = 8000, D = 500, Q = 1000){
    var obj = {
        pennies: P,
        nickels: N,
        dimes: D,
        quarter: Q
    }
    console.log(coinTotal);
    
    switch (P) {
        case 'pennies':
        var pennyTotal = obj.pennies * 1e-2
        return pennyTotal
            break;

        case 'nickels':
        var nickelTotal = obj.nickels * 5e-2
        return nickelTotal
            break;

        case 'dimes':
         var dimeTotal = obj.dimes * 1e-1
         return dimeTotal
            break;

        case 'quarters':
        var quarterTotal = obj.quarter * 25e-1
        return quarterTotal
            break;

        default:
            break;
    }
}
var pennyTotal = coinTotal('pennies')
var nickelTotal = coinTotal('nickels')
var dimeTotal = coinTotal('dimes')
var quarterTotal = coinTotal('quarter')
console.log(pennyTotal );



/* 
    Start
        Set Obj coins =  pennies: 200, nickles: 500 ,dimes: 300 , quarters: 64
        Set string = ?
        every 50 pennies = 1 roll of pennies = $0.50
        every 40 Nickels = 1 roll of Nickels = $2.00
        every 50 dimes = 1 roll of dimes = $5.00
        every 40 quarters = 1 roll of quarters = $10.00 
        Set int penny = .01
        Set int nickel = .0.5
        set int dime = .1
        set int quarter = .25
*/

// Total in Dollars, Total per currency, Total rolls per currency, any remainder per currency.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// var string = "End";
// var coins = {
//     pennies: 200,
//     nickels: 500,
//     dimes: 300,
//     quarters: 64
// };
// console.log(coins);

// for (var element in coins) {

//    if (element == 'pennies') {
//         let pennies = coins[element];
//       for (let p = 1e-2; p < pennies; p++) {
//           totalPerRoll1 = 5e-1;
//        pennyRoll = pennies / 50;
//         penniesTotal= pennyRoll * totalPerRoll1;
//          console.log('You have this many rolls:'+pennyRoll + '  ...Your total from each is $', penniesTotal, ' dollars');   
//       }
//       return element;
// }
//    else if (element == 'nickels') {
//     let nickels = coins[element]; 
//     for (let n = 5e-2; n < nickels; n++) {
//         totalPerRoll2 = 2;
//         nickelRoll = Math.floor(nickels / 40);
//         nickelsTotal = nickelRoll * totalPerRoll2;
//         console.log('You have this many rolls:'+nickelRoll + '  ...Your total from each roll is $', nickelsTotal, ' dollars and you have a remainder of 20 nickels, So your overall total is $25 dollars' );  
         
//        }  
//        return nickels
//    }

//    else if (element == 'dimes') {
//     let dimes = coins[element];
//     for (let d = 10e-1; d < dimes; d++) {
//         totalPerRoll3 = 5;
//         dimeRoll = dimes / 50;
//         dimesTotal = dimeRoll * totalPerRoll3;
//         console.log('You have this many rolls:'+dimeRoll + '  ...Your total from each roll is $', dimesTotal, ' dollars');   
//        }  
//        return dimes  
//    }

//    else if (element == 'quarters') {
//     let quarters = coins[element];
//     for (let q = 25e-1; q < quarters; q++) {
//         totalPerRoll4 = 10;
//         quarterRoll = Math.floor(quarters / 40);
//         quartersTotal = quarterRoll * totalPerRoll4;
//         console.log('You have this many rolls:'+quarterRoll + '  ...Your total from each roll is $', quartersTotal, ' dollars and you have a remainder of 24 quarters, So your overall total is $16 dollars');   
//        } 
//        return quarters  
//    }
//    else{
//        console.log("You broke it");
//    }


// }

// console.log('Your total overall in cash is ',coin[element]);