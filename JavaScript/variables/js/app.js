// console.log("hello world");
// //three ways to set up a variable- variable keywords
// //var
// //let 
// //const
// // the equal sign is the assigning operator
// // var foo = 'hey'; foo is the variable
// // can't use the-dash or the period. in names in JS
// //hey is the value

// var foo;
// console.log(foo);
// //foo is undefined because it equals nothing
// var bar = 'hello';// data type is a string
// var boo = "world"// data type is a string
// var foo2 = 1; //data type is an int
// var foo4 = []; //data type is an array literal
// var foo4 = {}; //date type is an object literal
// var foo5 = true; // boolean is true or false
// //
// // Don't use a reserve keyword ie break, return , boolean
// // Can't start with a number. var 9lives
// // Variables are case sensitive
// // You can start with an underscore, most use an underscore  to indicate a private variable
// //Foo is Not equal to foo     Foo = foo
// //let and const, const is immudiable, not able to be reassigned,!!! let is the same as var!!!
// let bar2 = "hola";
// let bar3 = 1;

// const bar4 = "mundo";
// const bar5 = 6;

// bar = "fool";
// bar2 = "yo";
// //bar4 = "broken";
// //bar4 can't redeclared a CONST
// console.log('message', foo4,foo2,foo);
//  var baz = " Hello y'all";// wrap string with oppisite quote
//  var baz2 = 'Hello y\'all';// escaping the character
//  var baz3 = 'Hello "you guys"';//wraping with the opposite quote
//  var baz4 = "Hello \"you guys\"";//escaping characters
//  console.log(baz,baz2,baz3,baz4);
 
// //page 67 in JavaScript book
// //different ways to declare a variable
// let baz5, baz6, baz7;
// baz5 = 'bar';
// baz6 = 'foo';
// baz7 = 'baz';
// console.log(baz5);

// let baz8 = 5, baz9 = 10;
// let baz10 = baz8 + baz9;
// console.log(baz10);

// //overiding 
// let baz11 = baz10 = baz5;
// console.log(baz11,baz10,baz5);

// // page 76
// // addition "+" / concatenation operator
// // subtraction "-"
// // division "/"
// // mutiplication "*"
// // increment "++""
// // decrement "--""
// // modulus "%"
// var name = "billy";
// console.log("My name is " +name+ " and i like to code");

// //money you make per year
// let dollarsAnHour = 52;
// let yearlyPay = dollarsAnHour * 2000 - (dollarsAnHour * 2000*.2);
// console.log(yearlyPay);

// //PTO V1
// //paychecks is paychecks per year

// // let paychecksPerYear = 26;
// // let hoursPerCheck = 3;
// // let PTOperYear = paychecksPerYear * hoursPerCheck;
// // console.log('you earn this many days per year to take a vacay:', PTOperYear/8);


// //PTO V2
// // let paychecksPerYear = 26;
// // let hoursPerCheck  = 5 ;
// // let PTOperYearInHours = paychecksPerYear * hoursPerCheck;
// // // debugger;
// // let totalWeeksPerYear = PTOperYearInHours/40;
// // console.log(totalWeeksPerYear);


// //PTO V3
// //PTO= Hours paid time off
// //#Checks (52,24,12,26)
// //checks* PTO = PTO/Year
// //Ex: 3* 24 = 72 hours of PTO/year
// //can be off for 72 hours because you have 8 work hours
// // 72/8= 9 days   will tell how many days you can take off
// // 72/40= 1.8 weeks   will tell how many weeks you have off

// let hoursPerCheck  = 5 ;
// let weekThisYear = 9 * 4;
// let PTOtoDate = hoursPerCheck * (weekThisYear/2);
// let PTOtakenToDate = 32;
// // debugger;
// let remainderPTOToDate= PTOtoDate - PTOtakenToDate;
// //30 hours in a work week
// console.log(remainderPTOToDate/40);

// // A simple investment calculator that takes an initial investment amount in dollars. Then accepts an interest rate between 2-7%. Then takes an additional amount of money for each term of the investment. Enter a investment term(ie. how long). Then specify that the term will be in years or months. Result will be your total interest earned over specified term and the total amount in your account.
// /*
// START
//     SET INT investmentAmount // $1500
//     SET INT interestRate //% 0.04
//     SET INT additionalAmountEachTerm // $450
//     SET INT investmentTermInYears // 10 years
//     Set INT firstTermInterestEarned // (investmentAmount * interestRate) + additionalAmountEachTerm
//     Set INt secondTermInterestEarned // (investmentAmount * firstTermInterestEarned) + interestRate + additionalAmountEachTerm

//     Set INT totalInterestEarned // firstTermInterestEarned + secondTermInterestEarned
//     Set Int totalInAccount // investmentamount + totalInterestEarned
//     //DO STUFF
//     Display "Your totalInterestEarned over investmentTermInYears, you now have totalInAccount dollars good for you!"
// */

    let investmentAmount = 1500;
    let interestRate =0.04;
    let additionalAmountEachTerm = 450;
    let investmentTermInYears = 10;
    let firstTermInterestEarned = (investmentAmount * interestRate);
    let secondTermInterestEarned = (investmentAmount + firstTermInterestEarned + additionalAmountEachTerm) * interestRate ;

    let totalInterestEarned = firstTermInterestEarned + secondTermInterestEarned;
    let totalInAccount = investmentAmount + totalInterestEarned + additionalAmountEachTerm;
    //DO STUFF
    console.log("Your total interest earned is " +totalInterestEarned+ " over " +investmentTermInYears+ " years,you now have " +totalInAccount+ " dollars good for you!");
// /*
// Hero's Journey
// The hero is on an adventure. They must fight three enemies along the way that have 50 points of health each. They will be on the brink of death with a health level of 20 out of 100, mana of 0 out of 60, and an energy of 40 out of 100. They will meet an man who happens to be a healer along the way that will sell them a healing potion for 10 gold coins, that restores their health back to full strength. The hero will need to rest for 3hrs to restore their mana and energy. The hero will battle a giant spider with a sword that does 30 points of damage, as well as a eldritch blast that does 20 points of damage. The giant spider has a health level of 250 and does 30 points of damage per attack. Dodging the giant spider's attack will require 20 points of energy. When the hero defeats the giant spider they will be rewarded 100 gold coins.
// */
// /*
// START
// SET var Hero
// SET var Enemy-1
// SET var Enemy-2
// SET var Enemy-3
// SET var Merchant
// SET var Giant Spider


// SET INT Hero health = 100 //Max
// SET INT Hero mana = 60  //Max
// SET INT Hero energy = 100 //Max
// SET INT Hero sword attack = 30 //damage
// SET INT Hero sword attack energy cost = 10//

// SET INT Hero-eldritch-blast = 20 //damage
// SET INT Hero-eldritch-blast-mana_cost =20//

// SET INT Gold = 1 //Each
// SET INT Health potion cost = Gold * 10// cost of 1 health potion
// SET INT Health potion health regain= 100 //regenerates 100 health on use

// SET INT Enemy 1 health  = 50 //Enemy current health
// SET INT Enemy 2 health  = 50 //Enemy current health 
// SET INT Enemy 3 health  = 50 //Enemy current health

// SET INT Giant Spider-health = 250
// SET INT Giant Spider-attack = 30
// END
// */ 

//  let Hero;
//  let Enemy1;
//  let Enemy2;
//  let Enemy3;
//  let Merchant;
//  let Giant_Spider;


//  let Hero_health = 100; //Max
//  let Hero_mana = 60;  //Max
//  let Hero_energy = 100; //Max

//  let Hero_sword_attack = 30; //damage
//  let Hero_sword_attack_energy_cost = 100- 1*0 ;// Energy cost--> 0 represents the amount of times used-> 0 can be any number/

//  let Hero_eldritch_blast = 20; //damage
//  let Hero_eldritch_blast_mana_cost = 60-20*0;//Mana cost -->  0 represents the amount of times used-> 0 can be any number/

//  let Gold = 1 //Each
//  let Health_potion_cost = Gold * 10; // cost of 1 health potion
//  let Health_potion_health_regain= 100; //regenerates 100 health on use

//  let Enemy_1_health  = 50; //Enemy current health
//  let Enemy_2_health  = 50; //Enemy current health 
//  let Enemy_3_health  = 50; //Enemy current health

//  let Giant_Spider_health = 250;
//  let Giant_Spider_attack = 30;
//  let Giant_spider_gold_drop = 100;
