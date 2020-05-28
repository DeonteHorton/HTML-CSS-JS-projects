// function test(fName, lName) {
//     event.preventDefault
//     var message = document.getElementById('output');
//     message.innerText= "Mundo";

//     var cart = {
//         firstName:fName,
//         lastName:lName
//     };
//     console.log(cart);
    
// }


/*
    Start
        Set array cart
        Set item total to 0
        set item purchased to 0
        set cart items to 0
        when button clicked show, and to cart items
        if same button clicked more than once
           add to quantity
        Set checkout
        when at checkout
        show items and price in cart
        when button is clicked
            multiply quanity to its item price
            add all items prices to get total
        show total from at checkout and show the items and how many items purchased
        
        
*/

// itemTotal++;
// itemsPurchased++;
// cartItems++;
// quantity++;

var cart = [];
var itemTotal = 0;
var itemsPurchased = 0;
var cartItem = 0;


function addToCart(item, price,cart) {
    let found = false;
    cart.forEach(cartItem => {
        if (cartItem.item == item) {
            cartItem.quantity++;
            found = true;
        }
    });
    if (!found) {
        cart.push({
            item,
            price,
            quantity:1
        });  
    }
    

    
            
    console.log(cart);

    
}