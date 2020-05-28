//Reversed String
function reversedString(str) {
    return str
    .split("") .reverse() .join("")
}
console.log(reversedString('eyes'));

//String comparison
function stringComp(str1,str2) {
    if (str1 === str2) {
        console.log(`${str1} : ${str2}`);
    
        return true
    } else{
        console.log(`${str1} : ${str2}`);
        
        return false
    }
}
console.log(stringComp('Hello World','hello world'))
console.log(stringComp('Hello World','Hello World'))


// DOM input

function checkNumber() {
    let input = document.getElementById('number')
    let text = input.innerText;
    let display = document.getElementById('display')
    let odd_numbers = [1,3,5,7,9];
    let even_numbers = [2,4,6,8];
    // if text contains any number from odd_numbers, divide the number by 2 and then output it on the screen in the color red
    //if text contains any number from even_numbers, multiply the number by 2 and then output it to the screen in the color blue
}