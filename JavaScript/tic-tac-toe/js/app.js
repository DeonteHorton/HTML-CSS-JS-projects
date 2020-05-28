// Tic-Tac-Toe logic
/*
    Start
        Create buttons or placeholders
        When clicked, store 
        After click, Switch to O
        Repeats process
        when there are three of the same Characters beside each other in an down-up,left-right, or diagnol position, game won
            else continue
        if all spots are filled and non of the characters are side by side, game tied
        
        
*/
let box = document.getElementsByClassName("space");

for (let i = 0; i < box.length; i++) {
    // for buttons
    box[i].addEventListener('click', function () {
        checkTiles(this)
    })
    
}
function checkTiles(Tiles) {
    var turn;
        if (Tiles.innerText) {
            return;
        }

    this.player = !this.player

    if (player) {
        turn = "X"
    } else {
        turn = "O"
    }
    Tiles.innerText = turn;
    console.log(turn);
    
}

var tile0 =box[0].textContent;
var tile1 =box[1].textContent;
var tile2 =box[2].textContent;
var tile3 =box[3].textContent;
var tile4 =box[4].textContent;
var tile5 =box[5].textContent;
var tile6 =box[6].textContent;
var tile7 =box[7].textContent;
var tile8 =box[8].textContent;


if (condition) {
    
}
