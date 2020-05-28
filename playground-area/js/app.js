var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 19 ) {
    greeting = 'Good Night!';
    
} else if (hourNow > 13 ) {
    greeting = 'Good Evening!';
} else if (hourNow > 12 ) {
    greeting = 'Good Afternoon!';
} else if(hourNow > 1 ) {
    greeting = 'Good Morning!';
}
 else {
    greeting = 'Welcome!';
}

document.write(greeting);

















// var username;
// var message;
// username = 'Deonte';
// message = 'You created me';
// var el = doccument.getElementById('name');
// elName.textContent = username;
// var elNote = document.getElementById('note');
// elNote.textContent = message;

// var title;
// var message;
// title = 'Deonte special offers';
// message = '<a href=\"sale.html\">25% off!</a>';
// var elTitle = document.getElementById('title');
// elTitle.innerHTML = title;
// var elNote = document.getElementById('note');
// elNote.innerHTML = message;
