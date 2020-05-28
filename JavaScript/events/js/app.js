//Event listeners
//Method .1
// <input type="text" name="" id="username">

//Method .2
// var username = document.getElementById("username");
// username.onblur = Function(){
//     console.log("hello");
    
// }

//Method .3
//checking function after you go away (click or tab out of it)
var username = document.getElementById('username');
username.addEventListener('blur', function(){
    console.log("hello");
    
});

//targeting links with querySelectorAll
var links = document.querySelectorAll('.links a');
//console.log(links);

//targeting all the links inside a ul>li;
//window.confirm


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event){
        event.preventDefault();
        var confirm = window.confirm('Do you wish to leave?');
        if(confirm){
            var href = event.target.getAttribute('href');
            window.location = href;
            //console.log('I want to leave', + (i + 1));
        }  else {
            console.log('I wish to Stay');
            
        }  
    });
    
}

