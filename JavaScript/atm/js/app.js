let span = document.querySelectorAll('#balance');
let backout = document.querySelectorAll('#backout');
let main = document.getElementById('main');
let submit = document.getElementById('submit');
let logout = document.getElementById('logout');
let denied = document.getElementById('incorrect-pin')

let withdraw_submit = document.getElementById('deduct');
let deposit_submit = document.getElementById('add');

let login = document.getElementById('login');
let mainScreen = document.getElementById('mainscreen');
let withdraw_screen = document.getElementById('withdraw');
let deposit_screen = document.getElementById('deposit');

let deposit_button = document.getElementById('deposit-button');
let withdraw_button = document.getElementById('withdraw-button');

let amount;
let p;

var people = [
    {
       name:'Bryce',
       pin:1111,
       balance:56428
    },
    {
        name:'Keke',
        pin:2222,
        balance:78392
     },
     {
        name:'Javi',
        pin:3333,
        balance:67503
     },
     {
        name:'Herbert',
        pin:4444,
        balance:7853
     },
];
submit.addEventListener('pointerdown',checkPin);

withdraw_submit.addEventListener('pointerdown',decrement);
deposit_submit.addEventListener('pointerdown',increment);

backout[0].addEventListener('pointerdown',()=>{
    mainScreen.style.display = 'block';
    withdraw_screen.style.display = 'none';
})

backout[1].addEventListener('pointerdown',()=>{
    mainScreen.style.display = 'block';
    deposit_screen.style.display = 'none';
})

logout.addEventListener('pointerdown',()=>{
    denied.innerText = '';
    login.style.display = 'block';
    mainScreen.style.display = 'none';
    withdraw_screen.style.display = 'none';
    deposit_screen.style.display = 'none'
})
        
withdraw_button.addEventListener('pointerdown',()=>{
    mainScreen.style.display = 'none';
    withdraw_screen.style.display = 'block';
});

deposit_button.addEventListener('pointerdown',()=>{
    mainScreen.style.display = 'none';
    deposit_screen.style.display = 'block';
});
  
function checkPin(){
    let input = document.getElementById('input').value;

    for (let i = 0; i < people.length; i++) {
        if(input == people[i].pin){
            p=i;
            document.getElementById('input').value = ''
            login.style.display = 'none';
            mainScreen.style.display = 'block';
            main.innerText = `Hello ${people[i].name} would you like to withdraw or deposit? Balance: $${people[i].balance}`;
            span[0].innerHTML = `Your balance is $${people[i].balance}`;
            span[1].innerHTML = `Your balance is $${people[i].balance}`;
           return true
        
        } else if (input.match(/[A-Z]/gi) || input.match(/\W/)){
            denied.innerText = 'Numbers only'
            document.getElementById('input').value = ''
            setTimeout(()=>{
                denied.innerText = ''
            },2000)
        } 
        
        else{

            denied.innerText = 'Pin is incorrect, please try again'
            document.getElementById('input').value = ''
            setTimeout(()=>{
                denied.innerText = ''
            }   ,2000)
        }
    
    }
}
function decrement() {
    amount = document.getElementById('W-input').value;
    let output = document.getElementById('output1');
    span[1].innerHTML = `Your balance is $${people[p].balance}`; 
    
    if (amount =='') {
        alert('Please enter an amount to Withdraw')
    }

    else if(people[p].balance <= -1 ) {
        alert(`You can't make any withdrawls, good bye`)
        setTimeout(()=>{
            withdraw_screen.style.display = 'none';
            login.style.display = 'block';
            span[1].innerHTML = ''; 
            document.getElementById('W-input').value = ''

        },4120)
    }
    else if(amount > 800){
        alert(`The max you can withdraw it 800`)
    }
    else if(amount.match('-')){
        alert(`please try again`)
    }
    else {
        people[p].balance-= amount;
        output.innerHTML = `Your balance is now $${people[p].balance}, Thank you for banking with us`;
        setTimeout(()=>{
            output.innerHTML = ''
            withdraw_screen.style.display = 'none';
            login.style.display = 'block';
            span[1].innerHTML = `Your balance is $${people[p].balance}`;
            document.getElementById('W-input').value = ''

        },4120)
    }  
}

function increment() {
    amount = document.getElementById('D-input').value;
    people[p].balance += Number(amount) ;
    let output = document.getElementById('output2');
    span[0].innerHTML = `Your balance is $${people[p].balance}`;

    if (amount === '') {
        alert('Please enter an amount to Deposit')
    }
    else if(amount.match('-')){
        alert(`please try again`)
    }
    else {
        output.innerHTML = `Your balance is now $${people[p].balance}, Thank you for banking with us`;
        setTimeout(()=>{
            output.innerHTML = ''
            deposit_screen.style.display = 'none';
            login.style.display = 'block';
            span[0].innerHTML = `Your balance is $${people[p].balance}`;
            document.getElementById('D-input').value = ''
            
        },4120)
    }   
}