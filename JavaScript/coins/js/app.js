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
var string = "End";
var coins = {
    pennies: 200,
    nickels: 500,
    dimes: 300,
    quarters: 64
};
console.log(coins);

for (var element in coins) {

   if (element == 'pennies') {
        let pennies = coins[element];
      for (let p = 1e-2; p < pennies; p++) {
          totalPerRoll1 = 5e-1;
       pennyRoll = pennies / 50;
        penniesTotal= pennyRoll * totalPerRoll1;
         console.log('You have this many rolls:'+pennyRoll + '  ...Your total from each is $', penniesTotal, ' dollars');   
      }
}
   else if (element == 'nickels') {
    let nickels = coins[element]; 
    for (let n = 5e-2; n < nickels; n++) {
        totalPerRoll2 = 2;
        nickelRoll = Math.floor(nickels / 40);
        nickelsTotal = nickelRoll * totalPerRoll2;
        console.log('You have this many rolls:'+nickelRoll + '  ...Your total from each roll is $', nickelsTotal, ' dollars and you have a remainder of 20 nickels, So your overall total is $25 dollars' );  
         
       }  
   }

   else if (element == 'dimes') {
    let dimes = coins[element];
    for (let d = 10e-1; d < dimes; d++) {
        totalPerRoll3 = 5;
        dimeRoll = dimes / 50;
        dimesTotal = dimeRoll * totalPerRoll3;
        console.log('You have this many rolls:'+dimeRoll + '  ...Your total from each roll is $', dimesTotal, ' dollars');   
       }    
   }

   else if (element == 'quarters') {
    let quarters = coins[element];
    for (let q = 25e-1; q < quarters; q++) {
        totalPerRoll4 = 10;
        quarterRoll = Math.floor(quarters / 40);
        quartersTotal = quarterRoll * totalPerRoll4;
        console.log('You have this many rolls:'+quarterRoll + '  ...Your total from each roll is $', quartersTotal, ' dollars and you have a remainder of 24 quarters, So your overall total is $16 dollars');   
       }   
   }
   else{
       console.log("You broke it");
   }


}

console.log('Your total overall in cash is $73 dollars');

var challengeData = [
    'dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime'
];
console.log(challengeData.length);
var coinsInJar = {
    pennies:0,
    nickels:0,
    dimes:0,
    quarters:0,
}

challengeData.forEach(function(cur) {
    switch (cur) {
        case 'penny':
            coinsInJar.pennies++
            break;
        case 'dime':
            coinsInJar.dimes++
            break;
        case 'nickel':
            coinsInJar.nickels++
            break;
        case 'quarter':
            coinsInJar.quarters++
            break;
        default:
            break;
    }   
});
console.log(coinsInJar);
