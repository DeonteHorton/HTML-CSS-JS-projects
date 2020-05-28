// var first_name  = 'Deonte'; // string
// var last_name = 'Horton';// string
// var age = 19;// interger
// var yes = true;// boolean
// var no = false;// boolean
// console.log(first_name + last_name,' :still a string');

// // multi-line comment
// /* 
// + 
// - 
// / 
// * 
// %
//  */ 
// var sum = 1 + 3;//4
// var difference = 2 - 1;//1
// var product = 2 * 2;//4
// var remiander = 10 / 5; //2

// var num1 = 3;
// var num2 = '3';
// console.log(num1 / num2);




// var output = document.getElementById('output');
// var button = document.getElementById('button');

// button.addEventListener('click',evenOrOdd)

// function evenOrOdd() {
//     var input = Number(document.getElementById('number').value);
//     if (input % 2 == 0){
//         input = input / 2;
//         output.style.color = 'red'
//         output.innerHTML = `you number is even. Number is now ${input}`
        
//     } else{
//         number = number * 2;
//         output.style.color = 'blue'
//         output.innerHTML = `your number is odd. Number is now ${input}`
//     }
// }

// var string = 'Deonte';
// // one way
// function reverseName1() {
//  return string.split('') .reverse() .join(' ')
    
// }
// function reverseName2(str) {
//     for (var letters = "", i = str.length - 1; i >= 0; i--) {
//         letters += str[i];
//       }
//       return letters;
// }
// console.log(reverseName1(string));
// console.log(reverseName2(string));


// function stringCom(string1,string2) {
//     if (string1.toLowerCase() === string2.toLowerCase()) {
//         console.log(`true, ${string1} is the same as ${string2}`);
        
//     } else {
//         console.log(`false, ${string1} is not the same as ${string2}`);

//     }
// }
// stringCom('Hello world','hello world');


console.log('~~~~~~~~~~')
//functions
//netpay
// hours worked, pay rate, and 15% tax withheld

// let hours = 40;
// let pay_rate = 22.95;
// let withHeld = .15;
// function netPayCalc(hoursWorked,payRate,withHeld) {
//     let grossPay = payRate * hoursWorked;
//     let amtWithheld = grossPay * withHeld;
//     let netPay = grossPay - amtWithheld;
//     console.log(netPay);
    
//     return netPay;
// }
// netPayCalc(40,22.95,.15)

// function boo() {
//     let word = 'baz'
//     console.log(word);
//     return word;
    
// }
// boo()

// function multiplySides(a,b) {
//      sidesMultiply = a * b;
//    // return sidesMultiply
//    function divideSides(a,b) {
//        multiplySides(a,b);
//        let area = sidesMultiply / 2;
//        console.log(area);
//        return area;
       
//    }
//    return divideSides()
// }

// divideSides(3,4)


 var output = document.getElementById('output');
 var button = document.getElementById('button');

 button.addEventListener('click',money_Converter)

 function money_Converter() {
     var input = Number(document.getElementById('number').value);
     output.style.fontSize =' 48px';

     output.innerHTML = `You have ${input} US dollars.  In European Euros, you have ${input * 0.93} Euros.  In Japense Yen, you have ${input * 111.30} Yen, and 
      in British Pounds, you have ${input * 0.77} Pounds.`

 }