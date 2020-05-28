

 const output = document.getElementById("output");
const button = document.getElementById("button")
const clear = document.getElementById("clear");

button.addEventListener('click',charRepeat)

function charRepeat() {
    const input = document.getElementById("input").value;

    let repeat = {};
    for (const value of input) {
        var character = value.charAt(input)
        
        if (repeat[character]) {
            repeat[character]++
        } else{
            repeat[character] = 1;
        }
    }
     output.innerText = JSON.stringify(repeat);
    // for (const letter in repeat) {
    //     output.innerText += `(${letter}:${repeat[letter]})  `
    // }
    // console.log(input,repeat);
 
}

clear.addEventListener("click",function () {
    output.innerText = '';
})
 

 


/* const button = document.getElementById("button");
const output = document.getElementById("output")

button.addEventListener('click', handleInput)

function handleInput() {
    const input = document.getElementById("input").value;
    console.log(input);
    let value = input.value;
    input.value = '';
    
} */