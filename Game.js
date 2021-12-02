// Beginning of JS App
const COLORS = ["B","G","R","Y"]
const VALUES = ["0","1","2","3","4","5","6","7","8","9","P2","P4","R","S", "W"]

var REGCARDIMAGES = ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "BP2", "BR", "BS",
"G0", "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "GP2", "GR", "GS",
"R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "RP2", "RR", "RS",
"Y0", "Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7", "Y8", "Y9", "YP2", "YR", "YS"]

// cards that are not in player or computer's hands - FULL ON START
const deckOfCards = [ {name: "B0", id: "B0_1"}, {name:"B1", id:"B1_1"}, {name: "B2", id: "B2_1"}, {name:"B3", id:"B3_1"},{name: "B4", id: "B4_1"}, {name:"B5", id:"B5_1"}, {name: "B6", id: "B6_1"}, {name:"B7", id:"B7_1"}, {name: "B8", id: "B8_1"}, {name:"B9", id:"B9_1"}, {name:"BP2", id:"BP2_1"}, {name:"BR", id:"BR_1"},  {name:"BS", id:"BS_1"}, 
{name: "G0", id: "G0_1"}, {name:"G1", id:"G1_1"}, {name: "G2", id: "G2_1"}, {name:"G3", id:"G3_1"},{name: "G4", id: "G4_1"}, {name:"G5", id:"G5_1"}, {name: "G6", id: "G6_1"}, {name:"G7", id:"G7_1"}, {name: "G8", id: "G8_1"}, {name:"G9", id:"G9_1"}, {name:"GP2", id:"GP2_1"}, {name:"GR", id:"GR_1"},  {name:"GS", id:"GS_1"}, 
{name: "R0", id: "R0_1"}, {name:"R1", id:"R1_1"}, {name: "R2", id: "R2_1"}, {name:"R3", id:"R3_1"},{name: "R4", id: "R4_1"}, {name:"R5", id:"R5_1"}, {name: "R6", id: "R6_1"}, {name:"R7", id:"R7_1"}, {name: "R8", id: "R8_1"}, {name:"R9", id:"R9_1"}, {name:"RP2", id:"RP2_1"}, {name:"RR", id:"RR_1"},  {name:"RS", id:"RS_1"}, 
{name: "Y0", id: "Y0_1"}, {name:"Y1", id:"Y1_1"}, {name: "Y2", id: "Y2_1"}, {name:"Y3", id:"Y3_1"},{name: "Y4", id: "Y4_1"}, {name:"Y5", id:"Y5_1"}, {name: "Y6", id: "Y6_1"}, {name:"Y7", id:"Y7_1"}, {name: "Y8", id: "Y8_1"}, {name:"Y9", id:"Y9_1"}, {name:"YP2", id:"YP2_1"}, {name:"YR", id:"YR_1"},  {name:"YS", id:"YS_1"},
{name:"B1", id:"B1_2"}, {name: "B2", id: "B2_2"}, {name:"B3", id:"B3_2"},{name: "B4", id: "B4_2"}, {name:"B5", id:"B5_2"}, {name: "B6", id: "B6_2"}, {name:"B7", id:"B7_2"}, {name: "B8", id: "B8_2"}, {name:"B9", id:"B9_2"}, {name:"BP2", id:"BP2_2"}, {name:"BR", id:"BR_2"},  {name:"BS", id:"BS_2"}, 
{name:"G1", id:"G1_2"}, {name: "G2", id: "G2_2"}, {name:"G3", id:"G3_2"},{name: "G4", id: "G4_2"}, {name:"G5", id:"G5_2"}, {name: "G6", id: "G6_2"}, {name:"G7", id:"G7_2"}, {name: "G8", id: "G8_2"}, {name:"G9", id:"G9_2"}, {name:"GP2", id:"GP2_2"}, {name:"GR", id:"GR_2"},  {name:"GS", id:"GS_2"}, 
{name:"R1", id:"R1_2"}, {name: "R2", id: "R2_2"}, {name:"R3", id:"R3_2"},{name: "R4", id: "R4_2"}, {name:"R5", id:"R5_2"}, {name: "R6", id: "R6_2"}, {name:"R7", id:"R7_2"}, {name: "R8", id: "R8_2"}, {name:"R9", id:"R9_2"}, {name:"RP2", id:"RP2_2"}, {name:"RR", id:"RR_2"},  {name:"RS", id:"RS_2"}, 
{name:"Y1", id:"Y1_2"}, {name: "Y2", id: "Y2_2"}, {name:"Y3", id:"Y3_2"},{name: "Y4", id: "Y4_2"}, {name:"Y5", id:"Y5_2"}, {name: "Y6", id: "Y6_2"}, {name:"Y7", id:"Y7_2"}, {name: "Y8", id: "Y8_2"}, {name:"Y9", id:"Y9_2"}, {name:"YP2", id:"YP2_2"}, {name:"YR", id:"YR_2"},  {name:"YS", id:"YS_2"},
{name:"Plus4", id:"P4_1"}, {name: "Plus4", id: "P4_2"}, {name:"Plus4", id:"P4_3"},{name: "Plus4", id: "P4_4"}, {name:"Wild", id:"W_1"}, {name: "Wild", id: "W_2"}, {name:"Wild", id:"W_3"}, {name: "Wild", id: "W_4"}]

// cards that are in computer hand - empty on start
const computerCards = [];
// Cards that are in player's hand - EMPTY ON START
const cardsInPlay = [];
const cardInPile = [];

// DOM Controls - control and alter the html
const computerHandControl = document.querySelector('.computerHand');
const pileControl = document.querySelector('.playPile');
const playerHandControl = document.querySelector('.playerHand');
const playerTurnText = document.getElementById('playerTurnText');
const computerTurnText = document.getElementById('computerTurnText');

// not sure lol - think i made these when debugging
const playerHand = [];
const computerHand = [];

let playerTurn = true; // Set to true initially so player always goes first
let popUpWild = false; // control for popup - will equal true if card clicked is wild
let popUpPlus4 = false; // control for popup - will equal true if card clicked is plus4

let gameOver = false;
let playerCard = document.getElementById("playerCard");
let drawPileCard = document.getElementById("drawCard");

// Indicate Player Turn
function playerTurnTrue(){
    computerTurnText.style.animation = "";
    computerTurnText.style.color = "#000001";
    computerTurnText.style.textShadow = "00px 00px 00px black";
    playerTurnText.style.color = "white";
    playerTurnText.style.animation = "playerTurnGlow 1.5s ease-in-out infinite alternate"
}

// Indicate Computer Turn
function computerTurnTrue(){
    playerTurnText.style.animation = "";
    playerTurnText.style.color = "#000001";
    playerTurnText.style.textShadow = "00px 00px 00px black";
    computerTurnText.style.color = "white";
    computerTurnText.style.animation = "computerTurnGlow 1.5s ease-in-out infinite alternate"
    computerTurnText.style.textShadow = "00px 00px 30px gold";
}

// Called when player draws a card from draw pile (pile of logo cards in center right)
function cardDrew(){
    if (playerTurn == false) {
        console.log("wait your turn")
    } else { 
    // Get random card from deck array, then push to player cards array, then delete from deck array
    let randomCardIndex = Math.floor(Math.random() * deckOfCards.length);
    cardsInPlay.push(deckOfCards[randomCardIndex]);
    deckOfCards.splice(randomCardIndex,1);

    let cardDrawn = document.createElement('img');
    cardDrawn.setAttribute("src", "images/" + cardsInPlay[cardsInPlay.length-1].name + ".png");
    cardDrawn.setAttribute('name', cardsInPlay[cardsInPlay.length-1].name);
    cardDrawn.setAttribute('id', cardsInPlay[cardsInPlay.length-1].id);
    cardDrawn.setAttribute("class", "playerCard");
    cardDrawn.setAttribute('onClick', 'cardClicked(this)');
    console.log(cardDrawn.name);
    playerHandControl.appendChild(cardDrawn);
    playerTurn = false;
    computerTurnTrue();
    setTimeout(computerTurn, 2000);
    }
}

// // When player clicks a card from their hand, add it to play deck.
// function cardClicked(card){
//     // Duplicate card to replace pile card image
//     let card2 = card;
//     let cardToReactTo = cardInPile[0].name;  // current card on top of pile
//     let clickedCardName = card.name; // name of clicked card for comparison
//     console.log("card in pile:" + cardToReactTo);
//     console.log("clicked card name:" + clickedCardName);
//     if ((cardToReactTo.charAt(0) == 'B' && clickedCardName.charAt(0) == 'B') || (cardToReactTo.charAt(0) == 'G' && clickedCardName.charAt(0) == 'G') || 
//     (cardToReactTo.charAt(0) == 'R' && clickedCardName.charAt(0) == 'R') || (cardToReactTo.charAt(0) == 'Y' && clickedCardName.charAt(0) == 'Y')
//     || (cardToReactTo.charAt(1) == clickedCardName.charAt(1)) || (clickedCardName == "Wild" || clickedCardName == "Plus4") || (cardToReactTo == "Wild" || cardToReactTo == "Plus4")){

//          // THIS NEXT LINE WORKS ???? :))) somehow also removes the playercard?????? im so confused.
//          //   pileControl.firstElementChild.remove();

//           pileControl.innerHTML = '';

//           card2.setAttribute('class', 'playPile');
//           card2.setAttribute('id',card.id);
//           card2.setAttribute('name',card.name);
//           console.log("setting card name to: " + card.name);
//           console.log("CARD ID becoming: " + (card.id));
//           pileControl.appendChild(card2);
//           console.log("pile card replaced");

//          // THIS LINE IS THROWING AN ERROR BUT ITS WORKING ???
//          // playerHandControl.removeChild(card);

//          // substitute working
//          //  card.parentNode.removeChild(card);

//          cardInPile.pop();
//          cardInPile.push(card2);

//          console.log(cardInPile);
//          setTimeout(computerTurn, 2000);
//         //  computerTurn();

//     }   else {
//         console.log(false + ", pick a card that matches or draw a card for now...");
//     }
// }

// When player clicks a card from their hand, add it to play deck.
function cardClicked(card){
    // by making card2 = to card, we are basically prepping it to change its attributes
    // this way the clicked card will automatically remove itself from the player hand when it is appended to the pile!
    let card2 = card;
    let cardToReactTo = cardInPile[0].name;  // current card on top of pile
    let clickedCardName = card.name; // name of clicked card for comparison
    console.log("card in pile:" + cardToReactTo);
    console.log("clicked card name:" + clickedCardName);
    if (playerTurn == false){
        console.log("Not your turn, wait a second.")
    }
    // Check if the card clicked matches the color or the value of the card in the pile
    else if ((cardToReactTo.charAt(0) == 'B' && clickedCardName.charAt(0) == 'B') || (cardToReactTo.charAt(0) == 'G' && clickedCardName.charAt(0) == 'G') || 
    (cardToReactTo.charAt(0) == 'R' && clickedCardName.charAt(0) == 'R') || (cardToReactTo.charAt(0) == 'Y' && clickedCardName.charAt(0) == 'Y')
    || (cardToReactTo.charAt(1) == clickedCardName.charAt(1))){

        // get rid of card in the pile
          pileControl.innerHTML = '';

          card2.setAttribute('class', 'playPile');
          card2.setAttribute('id',card.id);
          card2.setAttribute('name',card.name);
          console.log("setting card name to: " + card.name);
          console.log("CARD ID becoming: " + (card.id));
          pileControl.appendChild(card2);
          console.log("pile card replaced");

        // remove the card that was in the pile array and replace it with the new card
         cardInPile.pop();
         cardInPile.push(card2);

         console.log(cardInPile);
         playerTurn = false;
         computerTurnTrue();
         setTimeout(computerTurn, 2000);

    } 
    // If card clicked is a wild card
    else if (clickedCardName == "Wild") {
        card2.setAttribute('id','JUSTCLICKED')
        popUpWild = true;
        console.log("calling show Popup");
        showPopUp();
    } else if (clickedCardName == "Plus4") {
        card2.setAttribute('id','JUSTCLICKED')
        popUpPlus4 = true;
        console.log("calling show Popup");
        showPopUp();
    }
    // Card clicked is not a playable card
    else {
        console.log(false + ", pick a card that matches or draw a card for now...");
    }
}

function showPopUp(){
    if (popUpWild == true){
        let popUp = document.getElementById("WildPopUp");
        popUp.style.visibility = "visible";
    } else if (popUpPlus4 == true){
        let popUp = document.getElementById("Plus4PopUp");
        popUp.style.visibility = "visible";
    }
}

function playPopUpCard(chosenCard){
    if (popUpWild == true){
        let popUp = document.getElementById("WildPopUp");
        let removeThisCard = document.getElementById("JUSTCLICKED");
        removeThisCard.parentNode.removeChild(removeThisCard);

        popUpWild = false;
        popUp.style.visibility = "hidden";

        clickedWild = chosenCard;
        clickedWild.setAttribute('class', 'playPile');
        // id might need to be changed
        clickedWild.setAttribute('src',chosenCard.src);
        clickedWild.setAttribute('id',chosenCard.id);
        clickedWild.setAttribute('name',chosenCard.name);
        
        console.log("*************************");
        console.log(chosenCard.name);
        console.log("*************************");

        pileControl.innerHTML = '';
        pileControl.appendChild(clickedWild);

        cardInPile.pop();
        cardInPile.push(clickedWild);

        playerTurn = false;
        computerTurnTrue();
        setTimeout(computerTurn, 2000);

    } else if (popUpPlus4 == true){
        let popUp = document.getElementById("Plus4PopUp");
        let removeThisCard = document.getElementById("JUSTCLICKED");
        removeThisCard.parentNode.removeChild(removeThisCard);
        popUpPlus4 = false;
        popUp.style.visibility = "hidden";

        clickedWild = chosenCard;
        clickedWild.setAttribute('class', 'playPile');
        // id might need to be changed
        clickedWild.setAttribute('src',chosenCard.src);
        clickedWild.setAttribute('id',chosenCard.id);
        clickedWild.setAttribute('name',chosenCard.name);

        console.log("*************************");
        console.log(chosenCard.name);
        console.log("*************************");

        pileControl.innerHTML = '';
        pileControl.appendChild(clickedWild);

        cardInPile.pop();
        cardInPile.push(clickedWild);

        playerTurn = false;
        computerTurnTrue();
        setTimeout(computerTurn, 2000);

    }
    

}

// Generate random card to appear in play pile at beginning of each game.
function generatePlayPile(){
    let randomCardIndex = Math.floor(Math.random() * deckOfCards.length);
    cardInPile.push(deckOfCards[randomCardIndex]);
    deckOfCards.splice(randomCardIndex,1);


    console.log(cardInPile);
    
    let pileCard = document.createElement("img");
    pileCard.setAttribute("src", "images/" + cardInPile[cardInPile.length-1].name + ".png");
    pileCard.setAttribute('class', 'playPile');
    pileControl.appendChild(pileCard);    
}

//Called at beginning of game - give the player a hand of 7 cards
function givePlayerHand(){
    for (let i = 0; i <= 6; i++){
        let randomCardIndex = Math.floor(Math.random() * deckOfCards.length);
        cardsInPlay.push(deckOfCards[randomCardIndex]);
        deckOfCards.splice(randomCardIndex,1);
        // console.log(cardsInPlay);

        let playerCard = document.createElement("img");
        playerCard.setAttribute("src", "images/" + cardsInPlay[cardsInPlay.length-1].name + ".png");
        playerCard.setAttribute('name', cardsInPlay[cardsInPlay.length-1].name);
        playerCard.setAttribute('id', cardsInPlay[cardsInPlay.length-1].id);
        playerCard.setAttribute('class', 'playerCard');
        playerCard.setAttribute('onClick','cardClicked(this)');
        playerHandControl.appendChild(playerCard);    
    }
}

//Called at beginning of game - give the player a hand of 7 cards
function giveComputerHand(){
    for (let i = 0; i <= 6; i++){
        let randomCardIndex = Math.floor(Math.random() * deckOfCards.length);
        computerCards.push(deckOfCards[randomCardIndex]);
        deckOfCards.splice(randomCardIndex,1);

        console.log(computerCards);

        let computerCard = document.createElement("img");
        computerCard.setAttribute("src", "images/BackCard.png");
        computerCard.setAttribute('name', computerCards[computerCards.length-1].name);
        computerCard.setAttribute('id', computerCards[computerCards.length-1].id);
        computerCard.setAttribute('class', 'computerCard');
        computerHandControl.appendChild(computerCard);    
    }
}

// function computerTurn(){
//     console.log("--------------------");
//     console.log("checking computer cards");
//     let computerChoice = null;
//     let computerChoiceName = null;
//     let computerChoiceID = null;
//     let foundAGoodCard = null;
//     for (let i = 0; i < computerCards.length; i++){
//         for (let j = 0; j < computerHandControl.childNodes.length; j++){
//             cardNode = computerHandControl.childNodes[j].id;
//             // cardNode = computerCards[j];
//             console.log("CARD NODE: -------------")
//             console.log(cardNode);
//             console.log("--------------------");
//         }
//         if (cardInPile[0].name.charAt(0) == cardNode.charAt(0) || cardInPile[0].name.charAt(1) == computerCards[i].name.charAt(1)){
//             foundAGoodCard = true;
//             computerChoice = computerCards[i];
//             computerChoiceName = computerCards[i].name;
//             computerChoiceID = computerCards[i].id;
//             console.log("--------------------");
//             console.log("Computer Chose:" + computerChoiceName);
//             computerChoice = document.createElement("img");
//             computerChoice.setAttribute("src", "images/" + computerChoiceName + ".png");
//             computerChoice.setAttribute('name',computerChoiceName);
//             computerChoice.setAttribute('id', computerChoiceID);
//             computerChoice.setAttribute('class', 'playPile');
//             console.log(computerHandControl.childNodes);
//             cardInPile.pop();
//             cardInPile.push(computerChoice);
//             pileControl.innerHTML = '';
//             // let removeThisCard = document.getElementById(computerChoiceID);
//             // removeThisCard.parentElement.removeChild(removeThisCard);         
//             pileControl.appendChild(computerChoice);
//             // pileControl.setAttribute("src", "images/" + computerChoiceName + ".png");
//             // pileControl.setAttribute('id', computerChoiceID);
//             // pileControl.setAttribute('class', 'computerCard');
//             // pileControl.setAttribute('name', computerChoiceName);
//             computerHandControl.removeChild;
//             console.log(computerCards.length);
//             // pileControl.appendChild(computerChoice);
//             // pileControl.append
//             // computerHandControl.removeChild(getElementById(computerChoiceID));
//             break;
//         } 
//         else {
//             foundAGoodCard = false;
//         }
//     }
//     if (foundAGoodCard!= true && foundAGoodCard != null) {
//         let randomCardIndex = Math.floor(Math.random() * deckOfCards.length);
//         computerCards.push(deckOfCards[randomCardIndex]);
//         deckOfCards.splice(randomCardIndex,1);
//         let computerCard = document.createElement("img");
//         computerCard.setAttribute("src", "images/BackCard.png");
//         computerCard.setAttribute('name', computerCards[computerCards.length-1].name);
//         computerCard.setAttribute('id', computerCards[computerCards.length-1].id);
//         computerCard.setAttribute('class', 'computerCard');
//         computerHandControl.appendChild(computerCard);  
//         foundAGoodCard = null;  
//         console.log("computer had to draw a card");
//         console.log(computerCards.length);
//     }
//     console.log("reached");
//     // computerChoice.setAttribute("src", "images/" + computerChoiceName + ".png");
//     // pileControl.appendChild(computerChoice);
//     // computerHandControl.removeChild(computerChoice);
// }

// YOU LEFT OFF TRYING TO FIGURE OUT WHY THE COMPUTER CARD IS NOT 
//                           1: Comparing correctly within the 'if' in the for loop
//                           2: why it isn't removing the correct cards
//                           3: the commented out function above here might be better 


function computerTurn() {
    console.log(computerHandControl.childNodes);
    let computerChoice = null;
    let cardToReactTo = cardInPile[0].name;  // current card on top of pile
    console.log("COMPUTER REACTING TO CARD IN PILE: "+ cardToReactTo);
    let computerChoiceID = null;
    let foundAGoodCard = null;
    let index = null;

    for (let i = 0; i < computerHandControl.childNodes.length; i++){
        let cardNode = computerHandControl.childNodes[i];
        let cardNodeName = cardNode.name;
        console.log(cardNode);
        console.log("card node name: " + (cardNodeName));
        console.log("card to react to: " + (cardToReactTo));

        // POSITIVE CASES - CARD CAN BE PUT DOWN
        if ((cardToReactTo.charAt(0) === 'B' && cardNodeName.charAt(0) === 'B') || (cardToReactTo.charAt(0) === 'G' && cardNodeName.charAt(0) === 'G') || 
        (cardToReactTo.charAt(0) === 'R' && cardNodeName.charAt(0) === 'R') || (cardToReactTo.charAt(0) === 'Y' && cardNodeName.charAt(0) === 'Y')) {
            console.log("color is the same");
            index = i;
            console.log(index);
            foundAGoodCard = true;
            break;
        } else if (cardToReactTo.charAt(1) === cardNodeName.charAt(1)) {
            console.log("Number is the same");
            index = i;
            console.log(index);
            foundAGoodCard =true;
            break;
        } else if  ((cardNodeName === "Wild" || cardNodeName === "Plus4") || (cardToReactTo === "Wild" || cardToReactTo === "Plus4")) {
            console.log("Put a card down anyway");
            index = i;
            console.log(index);
            foundAGoodCard =true;
            break;
        }


        //  if (cardToReactTo.charAt(0) === 'B' && cardNodeName.charAt(0) === 'B' || cardToReactTo.charAt(0) === 'G' && cardNodeName.charAt(0) === 'G' || 
        //  cardToReactTo.charAt(0) === 'R' && cardNodeName.charAt(0) === 'R' || cardToReactTo.charAt(0) === 'Y' && cardNodeName.charAt(0) === 'Y'
        //     || cardToReactTo.charAt(1) === cardNodeName.charAt(1) || cardNodeName === "Wild" || cardNodeName === "Plus4" || cardToReactTo === "Wild" || cardToReactTo === "Plus4"){
        //     foundAGoodCard = true;
        //     computerChoice = computerCards[i];
        //     computerChoiceName = computerCards[i].name;
        //     computerChoiceID = computerCards[i].id;
        //     console.log("--------------------");
        //     console.log("Computer Chose:" + computerChoiceName);
        //     computerChoice = document.createElement("img");
        //     computerChoice.setAttribute("src", "images/" + computerChoiceName + ".png");
        //     computerChoice.setAttribute('name',computerChoiceName);
        //     computerChoice.setAttribute('id', computerChoiceID);
        //     computerChoice.setAttribute('class', 'playPile');
        //     console.log(computerHandControl.childNodes);
        //     cardInPile.pop();
        //     cardInPile.push(computerChoice);
            
        //     pileControl.innerHTML = '';
        
        //     pileControl.appendChild(computerChoice);
            
        //     computerHandControl.removeChild(computerHandControl.childNodes[i]);
            
        //     console.log(computerCards.length);

        //     break;
        //     }

             else {
                console.log("not a good card");
                foundAGoodCard = false;
            }
        }
     console.log("breaked");
     if (foundAGoodCard!= true && foundAGoodCard != null) {
            let randomCardIndex = Math.floor(Math.random() * deckOfCards.length);
            computerCards.push(deckOfCards[randomCardIndex]);
            deckOfCards.splice(randomCardIndex,1);
            
            let computerCard = document.createElement("img");
            computerCard.setAttribute("src", "images/BackCard.png");
            computerCard.setAttribute('name', computerCards[computerCards.length-1].name);
            computerCard.setAttribute('id', computerCards[computerCards.length-1].id);
            computerCard.setAttribute('class', 'computerCard');
            computerHandControl.appendChild(computerCard);  
            foundAGoodCard = null;  
            console.log("computer had to draw a card");
            console.log(computerCards.length);
            playerTurnTrue();
            playerTurn = true;
        }
        else if (foundAGoodCard==true){
            computerPlay(index);
        }

}

function computerPlay(ind){
    let computerChoice = computerCards[ind];
    console.log(computerChoice);
    let computerChoiceName = computerCards[ind].name;
    let computerChoiceID = computerCards[ind].id;
    console.log("--------------------");
    console.log("Computer Chose:" + computerChoiceName);
    computerChoice = document.createElement("img");
    computerChoice.setAttribute("src", "images/" + computerChoiceName + ".png");
    computerChoice.setAttribute('name',computerChoiceName);
    computerChoice.setAttribute('id', computerChoiceID);
    computerChoice.setAttribute('class', 'playPile');
    console.log(computerHandControl.childNodes);
    cardInPile.pop();
    cardInPile.push(computerChoice);
    computerCards.splice(ind,1);
    pileControl.innerHTML = '';
        
    pileControl.appendChild(computerChoice);
            
    computerHandControl.removeChild(computerHandControl.childNodes[ind]);
            
    console.log(computerCards.length);
    playerTurnTrue();
    playerTurn = true;
}

// main game function
function startGame(){
    giveComputerHand();
    generatePlayPile();
    givePlayerHand();
    playerTurnTrue();  
}

startGame();