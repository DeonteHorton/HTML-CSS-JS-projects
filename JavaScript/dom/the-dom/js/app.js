let output = document.getElementById('output')
output.innerText = "afternoon";
let name = document.getElementById('name')
name.innerText = "Horton"

let ptoPerPayCheck = 4; 
let paycheckPerYear = 24;
let ptoperYear= ptoPerPayCheck * paycheckPerYear;
let ptoInDays= ptoperYear/8;
output.innerText= "you have" +ptoInDays+ " days of PTO. Enjoy"