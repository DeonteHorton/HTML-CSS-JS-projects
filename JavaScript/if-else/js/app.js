
// PTO
// paychecks is paychecks per year

//PTO V1 with Conditionals
// PTO V1: A simple program that calculates the PTO(Paid time off) for 1yr at a fixed rate of 5hrs per paycheck paid bi-weekly.
// less 5: 3hrs, 5: 5hrs, 10: 6.6hrs


let paychecksPerYear = 26;
let hoursPerCheck = 3;
let PTOperYear = paychecksPerYear * hoursPerCheck;
console.log('you earn this many days per year to take a vacay:', PTOperYear/8);

// Decision Tree
// Pet Finder:
//  --------------------
//  |_1.Spider 2.Parrot
//  |
//  |_3.Snake 4.Fish
//  --------------------
//  |
//  --------------------
//  |_5.Hamster 6.Rabbit
//  |
//  |_7.Dog 8.Cat
//  --------------------


// if (foo0) {
//     console.log('foo')
// } else if (bar) {
//     console.log('bar')
// } else {
//     console.log('nothing')
// }
/*
    SET VAR choice = PROMPT "Do you like animal with with fur  "
*/


let choice = prompt("Do you like animals with fur?  Answer yes/no")
if (choice == "yes"){
    let furry = prompt("Would you like a big or small animal?   Small/Big")
    if (furry == "Big"){
    let answer1 = prompt("Would you like a dog or cat? Dog/Cat")
    if (answer1 == "Dog"){
        //do stuff
        window.alert("you want a dog")
    }
    else if (answer1 == "Cat"){
        //do stuff 
    }
}
else if (furry == "Small"){
    let answer1 = prompt("Would you like a hamster or rabbit? hamster/rabbit")
    }
}










// }else (choice == "no") {
//     let skin = prompt("? yes/no")
    
// }
