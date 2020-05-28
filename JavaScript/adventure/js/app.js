/* 
build your own adventure
    Start
     You are heading dealership to buy a vehicle
     but you can't decide what type of vehicle you want,
     You ask one of the employees to help you decide on a car
     they ask " do you want a big or small size vehicle.."
    If you choose big, then they will ask if you want an suv or a truck
        when you choose between the two, they will ask you to choose between the color red,white,black, or blue
        then they will decide a vehicle for you
    If you choose small, they will ask if you want a full size or compact car
        when you choose between the two, they will ask you to choose between the color red,white,black, or blue
        then they will decide a vehicle for you
*/

var button = document.getElementById("button");

var images = {
    suv:["media/white_suv.jpg" ,"media/black_suv.png" ,"media/blue_suv.png" ,"media/red_suv.png"],

    truck:["media/black_truck.png","media/white_truck.png","media/blue_truck.png","media/red_truck.jpg"],

    full_car:["media/red_car.jpg","media/white_car.jpg","media/blue_car.jpg","media/black_car.jpg"],

    compact:["media/red_compact.jpg","media/white_compact.png","media/black_compact.png","media/blue_compact.jpg"],
    invisible:"media/invisible.jpg"
}


button.addEventListener('click', function () {
    let choice = prompt("Would you like a large or small size vehicle.").toLowerCase();
    if (choice == "large" ) {
        let large = prompt("Would you like an suv or a truck").toLowerCase();

        if (large.includes("suv") ) {
            let color1 = prompt("We are limited on colors, Would you like red, blue, white, or black. (CHOOSE WISELY)").toLowerCase()
            
            if (color1.includes("red")) {
                window.alert("We choose a Mazada for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['suv'][3]; 

            } else if (color1.includes("blue") ) {
                window.alert("We choose a Volkswagen for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['suv'][2];

            } else if (color1.includes("white") ) {
                window.alert("We choose a Ford Explorer for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['suv'][0];

            } else if (color1.includes("black") ) {
                window.alert("We choose Caldillac for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['suv'][1];

            } else if (color1 !=='red' || 'blue' || 'white' || 'black' ) {
                window.alert(`Sorry we don't have the color ${color1} .We will get you an invisible SUV .`)
                document.getElementById("output").src = images['invisible'];
            }
            return color1;
        }

        if (large.includes( "truck")) {
            let color2 = prompt("We are limited on colors, Would you like red, blue, white, or black. (CHOOSE WISELY)").toLowerCase()
           
            if (color2.includes("red")) {
                window.alert("We choose a Dodge ram for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['truck'][3];

            } else if (color2.includes("blue") ) {
                window.alert("We choose a Mazada BT-50 for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['truck'][2];

            } else if (color2.includes("white") ) {
                window.alert("We choose a F-150 for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['truck'][1];

            } else if (color2.includes("black" )) {
                window.alert("We choose a Colorado for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['truck'][0];

            } else if (color2 !=='red' || 'blue' || 'white' || 'black' ) {
                window.alert(`Sorry, we don't have the color ${color2} .We will get you an invisible truck.`)
                document.getElementById("output").src = images['invisible'];
            }
            return color2;
        }
    }

    if (choice.includes("small")) {
        let small = prompt("Would you like a full size or 2 door car ?").toLowerCase();
        
        if (small.includes("full size")) {
            let color3 = prompt("We are limited on colors, Would you like red, blue, white, or black. (CHOOSE WISELY)").toLowerCase()
            if (color3.includes( "red")) {
                window.alert("We choose an Impala for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['full_car'][0];

            } else if (color3.includes("blue") ) {
                window.alert("We choose a Tesla for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['full_car'][2];

            } else if (color3.includes("white") ) {
                window.alert("We choose a Mercedes for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['full_car'][1];

            } else if (color3.includes("black") ) {
                window.alert("We choose a Bentley for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['full_car'][3];
                
            } else if (color3 !=='red' || 'blue' || 'white' || 'black'  ) {
                window.alert(`Sorry, we don't have the color ${color3} .We will get you an invisible car.`)
                document.getElementById("output").src = images['invisible'];
            }
            return color3;
        }

        if (small == "2 door" || "two door") {
            let color4 = prompt("We are limited on colors, Would you like red, blue, white, or black. (CHOOSE WISELY)").toLowerCase()
           
            if (color4.includes("red")) {
                window.alert("We choose a Mini Cooper for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['compact'][0];

            } else if (color4.includes("blue") ) {
                window.alert("We choose a BMW for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['compact'][3];

            } else if (color4.includes("white") ) {
                window.alert("We choose an Audi for you, press ok or enter to view picture., press ok or enter to view picture.")
                document.getElementById("output").src = images['compact'][1];

            } else if (color4.includes("black" )) {
                window.alert("We choose a Corvette for you, press ok or enter to view picture.")
                document.getElementById("output").src = images['compact'][2];

            } else if (color4 !=='red' || 'blue' || 'white' || 'black'  ) {
                window.alert(`Sorry, we don't have the color ${color4} .We will get you an invisible car.`)
                document.getElementById("output").src = images['invisible'];
            }
            return color4;
        }
    }
    else{
        window.alert("Invalid answer..press click me to try again!")
    }
})


/* 
    male or female
    if male- store in something 
    if demale - stroe in someing

    earphones or headphones
    if e-///
    if h////
*/
