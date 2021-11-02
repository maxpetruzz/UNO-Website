// Beginning of JS App
const COLORS = ["B","G","R","Y"]
const VALUES = ["0","1","2","3","4","5","6","7","8","9","P2","P4","R","S", "W"]
var REGCARDIMAGES = ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "BP2", "BR", "BS",
"G0", "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "GP2", "GR", "GS",
"R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "RP2", "RR", "RS",
"Y0", "Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7", "Y8", "Y9", "YP2", "YR", "YS"
]
const pileControl = document.querySelector('.playPile')
const playerHandControl = document.querySelector('.playerHand')
const playerHand = []
const computerHand = []

let playerTurn = true;
let gameOver = false;


class Deck{
     constructor(cards){
         this.cards = cards;
     }
}

class Card{
    constructor(color, value){
        this.color = color;
        this.suit = suit;
    }
}

let playerCard = document.getElementById("playerCard");
let drawPileCard = document.getElementById("drawCard");

function cardPlayed(card){
    console.log("Played Card")
}

function cardDrew(){
    var randomColor = Math.floor(Math.random() * COLORS.length);
    console.log(randomColor);
    switch (randomColor) {
        case 0:
            randomColor = "B";
            break;
        case 1:
            randomColor = "G";
            break;
        case 2:
            randomColor = "R";
            break;
        case 3:
            randomColor = "Y";
            break;
    }
      
    var randomNumber = Math.floor(Math.random() * VALUES.length);
    switch (randomNumber) {
        case 0,1,2,3,4,5,6,7,8,9:
            break;
        case 10:
            randomNumber = "P2"
            break;
        case 11:
            randomColor = ""
            randomNumber = "Plus4"
            break;
        case 12:
            randomNumber = "R"
            break;
        case 13:
            randomNumber = "S"
            break;
        case 14:
            randomColor = ""
            randomNumber = "Wild"
            break;
    }
    let dCard = document.createElement("img");
    dCard.setAttribute("src","images/" + randomColor + randomNumber + ".png");
    dCard.setAttribute('class', 'playerCard');
    dCard.setAttribute('id', 'playerCard');
    dCard.setAttribute('onClick','cardClicked(this)');
    playerHandControl.appendChild(dCard);
}

// When player clicks a card from their hand, add it to play deck.
function cardClicked(card){
    console.log('CARD = '+ card);
    let card2 = card;
    let pileCard = document.getElementById('playCard');
    pileControl.removeChild(pileCard);
    card2.setAttribute('class', 'playPile');
    card2.setAttribute('id','playCard');
    pileControl.appendChild(card2);
    // THIS LINE IS THROWING AN ERROR BUT ITS WORKING ???
    playerHandControl.removeChild(card);
    console.log("Clicked card");
}

// Generate random card to appear in play pile at beginning of each game.
function generatePlayPile(){
    var randomColor = Math.floor(Math.random() * COLORS.length);
    console.log(randomColor);
    switch (randomColor) {
            case 0:
                randomColor = "B";
                break;
            case 1:
                randomColor = "G";
                break;
            case 2:
                randomColor = "R";
                break;
            case 3:
                randomColor = "Y";
                break;
        }
          
    var randomNumber = Math.floor(Math.random() * VALUES.length);
    switch (randomNumber) {
            case 0,1,2,3,4,5,6,7,8,9:
                break;
            case 10:
                randomNumber = "P2"
                break;
            case 11:
                randomColor = ""
                randomNumber = "Plus4"
                break;
            case 12:
                randomNumber = "R"
                break;
            case 13:
                randomNumber = "S"
                break;
            case 14:
                randomColor = ""
                randomNumber = "Wild"
                break;
        }
        let pileCard = document.createElement("img");
        pileCard.setAttribute("src","images/" + randomColor + randomNumber + ".png");
        pileCard.setAttribute('class', 'playPile');
        pileCard.setAttribute('id', 'playCard');
        pileControl.appendChild(pileCard);    
}

// Used at beginning of game - give the player a hand of 7 cards
function givePlayerHand(){
    for (let i = 0; i <= 6; i++){
        var randomColor = Math.floor(Math.random() * COLORS.length);
        console.log(randomColor);
        switch (randomColor) {
            case 0:
                randomColor = "B";
                break;
            case 1:
                randomColor = "G";
                break;
            case 2:
                randomColor = "R";
                break;
            case 3:
                randomColor = "Y";
                break;
        }
          
        var randomNumber = Math.floor(Math.random() * VALUES.length);
        switch (randomNumber) {
            case 0,1,2,3,4,5,6,7,8,9:
                break;
            case 10:
                randomNumber = "P2"
                break;
            case 11:
                randomColor = ""
                randomNumber = "Plus4"
                break;
            case 12:
                randomNumber = "R"
                break;
            case 13:
                randomNumber = "S"
                break;
            case 14:
                randomColor = ""
                randomNumber = "Wild"
                break;
        }
        let dCard = document.createElement("img");
        dCard.setAttribute("src","images/" + randomColor + randomNumber + ".png");
        dCard.setAttribute('class', 'playerCard');
        dCard.setAttribute('id', 'playerCard');
        dCard.setAttribute('onClick','cardClicked(this)');
        playerHandControl.appendChild(dCard);    
    }
}

generatePlayPile();
givePlayerHand();