// Beginning of JS App

// Deck of Cards
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
const playerCards = [];
// card in the pile
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
let popUpWin = false; // control for popup - will equal true if player has no more cards
let popUpLoss = false; // control for popup - will equal true if computer has no more cards
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


// Generate random card to appear in play pile at beginning of each game.
function generatePlayPile(){

    // create new array off of deck of cards (the deck that you and the computer pull cards from on the right)
    // Need to do this so the play pile does not start on a +2, Reverse, +4, Skip, or Wild Card
    let possiblePlayCardsToBeginWith = deckOfCards.filter((card) => {
        console.log(card.name.charAt(1));
        if (!((card.name.charAt(1) === "P") || (card.name.charAt(1) === "R") || (card.name.charAt(1) === "S") || (card.name.charAt(1) === "l") || (card.name.charAt(1) === "i") )) {
            return card;
        }
     });

    //Just used for checking lengths - these might indicate a bug since they keep fluctuating for some reason
    console.log(deckOfCards.length);
    console.log(possiblePlayCardsToBeginWith.length);

    // get randomcard from possible cards to go in play pile
    let randomCardIndex = Math.floor(Math.random() * possiblePlayCardsToBeginWith.length);

    // checking
    console.log("###################################");
    console.log(possiblePlayCardsToBeginWith[randomCardIndex]);

    // Push the card chosen to the pile array
    let cardGoingInPileID = possiblePlayCardsToBeginWith[randomCardIndex].id;
    cardInPile.push(possiblePlayCardsToBeginWith[randomCardIndex]);

    // find the card that was taken from the new array in the original array and remove it from original so it is not a duplicate
    let indexOfCardToRemoveFromDeck = null;
    for(i=0; i < deckOfCards.length; i++){
        if (deckOfCards[i].id == cardGoingInPileID){
            indexOfCardToRemoveFromDeck = i;
        }
    }
    deckOfCards.splice(indexOfCardToRemoveFromDeck,1);

    // Used to ensure cardInPile is correct
    console.log(cardInPile);
    
    // append card to pile
    let pileCard = document.createElement("img");
    pileCard.setAttribute("src", "images/" + cardInPile[cardInPile.length-1].name + ".png");
    pileCard.setAttribute('class', 'playPile');
    pileControl.appendChild(pileCard);    
}

//Called at beginning of game - give the player a hand of 7 cards
function givePlayerHand(numOfCards){
    for (let i = 1; i <= numOfCards; i++){
        let randomCardIndex = Math.floor(Math.random() * deckOfCards.length);
        playerCards.push(deckOfCards[randomCardIndex]);
        deckOfCards.splice(randomCardIndex,1);
        // console.log(playerCards);

        let playerCard = document.createElement("img");
        playerCard.setAttribute("src", "images/" + playerCards[playerCards.length-1].name + ".png");
        playerCard.setAttribute('name', playerCards[playerCards.length-1].name);
        playerCard.setAttribute('id', playerCards[playerCards.length-1].id);
        playerCard.setAttribute('class', 'playerCard');
        playerCard.setAttribute('onClick','cardClicked(this)');
        playerHandControl.appendChild(playerCard);    
    }
}

//Called at beginning of game - give the computer a hand of 7 cards
function giveComputerHand(numOfCards){
    for (let i = 1; i <= numOfCards; i++){
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

// Called when player draws a card from draw pile (pile of logo cards in center right)
function cardDrew(){
    if (playerTurn == false) {
        console.log("wait your turn")
    } else { 
    // Get random card from deck array, then push to player cards array, then delete from deck array
    let randomCardIndex = Math.floor(Math.random() * deckOfCards.length);
    playerCards.push(deckOfCards[randomCardIndex]);
    deckOfCards.splice(randomCardIndex,1);

    // add card to hand
    let cardDrawn = document.createElement('img');
    cardDrawn.setAttribute("src", "images/" + playerCards[playerCards.length-1].name + ".png");
    cardDrawn.setAttribute('name', playerCards[playerCards.length-1].name);
    cardDrawn.setAttribute('id', playerCards[playerCards.length-1].id);
    cardDrawn.setAttribute("class", "playerCard");
    cardDrawn.setAttribute('onClick', 'cardClicked(this)');
    console.log(cardDrawn.name);
    playerHandControl.appendChild(cardDrawn);
    playerTurn = false;

    // call computer turn
    computerTurnTrue();
    setTimeout(computerTurn, 2000);
    }
}

// When player clicks a card from their hand, add it to play deck.
function cardClicked(card){
    // by making card2 = card, we are basically prepping it to change its attributes
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

          // remove clicked card from the player cards array - needs to be implemented everywhere and fixed
          let removeIndexFromPlayerHand = null;
          for (i = 0; i<playerCards.length; i++){
              if (playerCards[i].name === clickedCardName){
                  removeIndexFromPlayerHand = i;
              }
          }
          playerCards.splice(removeIndexFromPlayerHand,1);

        // remove the card that was in the pile array and replace it with the new card
         cardInPile.pop();
         cardInPile.push(card2);

        //  let removeCardFromPlayerDeck = playerCards.indexOf(card2);
        //  console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
        //  console.log(removeCardFromPlayerDeck);
        //  console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
        //  playerCards.splice(index, removeCardFromPlayerDeck);


        checkGameState();
        if (gameOver == true && popUpWin == true){
            let popUp = document.getElementById("WinPopUp");
            setTimeout(popUp.style.visibility = "visible", 2000);
        } else if (gameOver == true && popUpLoss == true){
            let popUp = document.getElementById("LossPopUp");
            setTimeout(popUp.style.visibility = "visible", 2000);
        } else {
            // these are called if the card played is not a wild or a plus 4
            if (card2.name.charAt(1) == "S"){
            console.log("You skipped computer!");
            // do nothing else because you skipped

            } else if (card2.name.charAt(1) == "P") {
            console.log("giving computer plus2");

            // give computer 2 cards
            giveComputerHand(2);
            } else {
            // card was a regular card so now its the computer's turn
            console.log(cardInPile);
            playerTurn = false;

            computerTurnTrue();
            setTimeout(computerTurn, 2000);
            }
        }

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

        // remove clicked card from the player cards array - needs to be implemented everywhere and fixed
        let removeIndexFromPlayerHand = null;
        for (i = 0; i<playerCards.length; i++){
            if (playerCards[i].name === removeThisCard.name){
                console.log("&&&&&^^^^^^^^^%%%%%%%%$$$$$$$######@@@@@@@!!!!!!!!")
                console.log(playerCards[i].name);
                removeIndexFromPlayerHand = i;
            }
        }
        playerCards.splice(removeIndexFromPlayerHand,1);

        removeThisCard.parentNode.removeChild(removeThisCard);

        popUpWild = false;
        popUp.style.visibility = "hidden";

        clickedWild = document.createElement('img');
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

        checkGameState();
        if (gameOver == true && popUpWin == true){
            let popUp = document.getElementById("WinPopUp");
            setTimeout(popUp.style.visibility = "visible", 2000);
        } else if (gameOver == true && popUpLoss == true){
            let popUp = document.getElementById("LossPopUp");
            setTimeout(popUp.style.visibility = "visible", 2000);
        } else {
            playerTurn = false;
            computerTurnTrue();
            setTimeout(computerTurn, 2000);
        }

    } else if (popUpPlus4 == true){
        let popUp = document.getElementById("Plus4PopUp");
        let removeThisCard = document.getElementById("JUSTCLICKED");

        // remove clicked card from the player cards array - needs to be implemented everywhere and fixed
        let removeIndexFromPlayerHand = null;
        for (i = 0; i<playerCards.length; i++){
            console.log("&&&&&^^^^^^^^^%%%%%%%%$$$$$$$######@@@@@@@!!!!!!!!")
            console.log(playerCards[i].name);
            if (playerCards[i].name === removeThisCard.name){
                removeIndexFromPlayerHand = i;
            }
        }
        playerCards.splice(removeIndexFromPlayerHand,1);

        removeThisCard.parentNode.removeChild(removeThisCard);
        popUpPlus4 = false;
        popUp.style.visibility = "hidden";

        clickedWild = document.createElement('img');
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

        // Give computer 4 more cards
        giveComputerHand(4);

        checkGameState();
        if (gameOver == true && popUpWin == true){
            let popUp = document.getElementById("WinPopUp");
            setTimeout(popUp.style.visibility = "visible", 2000);
        } else if (gameOver == true && popUpLoss == true){
            let popUp = document.getElementById("LossPopUp");
            setTimeout(popUp.style.visibility = "visible", 2000);
        }
    }
}

// Function to make computer iterate through its cards and select a good card
function computerTurn() {
    console.log(computerHandControl.childNodes);
    let computerChoice = null;
    let cardToReactTo = cardInPile[0].name;  // current card on top of pile
    console.log("COMPUTER REACTING TO CARD IN PILE: "+ cardToReactTo);
    let computerChoiceID = null;
    let foundAWildCard = null;
    let foundAPlus2Card = null;
    let foundAPlus4Card = null;
    let foundAGoodCard = null;
    let foundASkipCard = null;
    let index = null;

    for (let i = 0; i < computerHandControl.childNodes.length; i++){
        let cardNode = computerHandControl.childNodes[i];
        let cardNodeName = cardNode.name;
        console.log(cardNode);
        console.log("card node name: " + (cardNodeName));
        console.log("card to react to: " + (cardToReactTo));

        // POSITIVE CASES - CARD CAN BE PUT DOWN
        // main if statement here checks if card in pile and current card node in computer hand is same
        if ((cardToReactTo.charAt(0) === 'B' && cardNodeName.charAt(0) === 'B') || (cardToReactTo.charAt(0) === 'G' && cardNodeName.charAt(0) === 'G') || 
        (cardToReactTo.charAt(0) === 'R' && cardNodeName.charAt(0) === 'R') || (cardToReactTo.charAt(0) === 'Y' && cardNodeName.charAt(0) === 'Y')) {
            if(cardNodeName.charAt(1) == 'S'){
                console.log('computer found a skip card with the same color.');
                index = i;
                console.log(index);
                foundASkipCard = true;
            } else if (cardNodeName.charAt(1) == 'P') {
                console.log('computer found a plus 2 card with the same color.');
                index = i;
                console.log(index);
                foundAPlus2Card = true;
            } else {
                console.log("color is the same");
                index = i;
                console.log(index);
                foundAGoodCard = true;
            }
            break;
        } else if (cardToReactTo.endsWith("S") && cardNodeName.endsWith("S")){
            console.log('computer found a skip with a different color');
            index = i;
            console.log(index);
            foundASkipCard = true;

            foundAPlus2Card = true;
            foundAWildCard = false;
            foundAPlus4Card = false;
            foundAGoodCard = false;
            break;
        } else if (cardToReactTo.endsWith("P2") && cardNodeName.endsWith("P2")){
            console.log('computer found a plus 2 with a different color');
            index = i;
            console.log(index);
            foundAPlus2Card = true;

            foundAWildCard = false;
            foundASkipCard = false;
            foundAPlus4Card = false;
            foundAGoodCard = false;
            break;
        }else if (cardToReactTo.charAt(1) === cardNodeName.charAt(1)) {
            console.log("Number is the same");
            index = i;
            console.log(index);
            foundAGoodCard =true;

            foundAWildCard = false;
            foundAPlus2Card = false;
            foundAPlus4Card = false;
            foundASkipCard = false;
            break;
        } else if  (cardNodeName === "Wild") {
            console.log("found a wild card");
            index = i;
            console.log(index);
            foundAWildCard =true;

            foundAPlus2Card = false;
            foundAPlus4Card = false;
            foundAGoodCard = false;
            foundASkipCard = false;
            break;
        } else if  (cardNodeName === "Plus4") {
            console.log("found a plus4 card");
            index = i;
            console.log(index);
            foundAPlus4Card =true;

            foundAWildCard = false;
            foundAPlus2Card = false;
            foundAGoodCard = false;
            foundASkipCard = false;
            break;
        } else {
            console.log("not a good card");
            foundAGoodCard = false;

            foundAWildCard = false;
            foundAPlus2Card = false;
            foundAPlus4Card = false;
            foundASkipCard = false;
        }
    }

    console.log("breaked");
     if (foundASkipCard == true){
        computerPlay(index,"skip");
    } else if (foundAGoodCard == true){
        computerPlay(index,"regular");
    } else if (foundAPlus2Card == true){
        computerPlay(index,"plus2");
    } else if (foundAWildCard == true){
        computerPlayWild(index,"wild");
    } else if (foundAPlus4Card == true){
        computerPlayWild(index,"plus4");
    } else {
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
}


function computerPlay(ind,typeOfCard){

    console.log("Not a wild or plus4")
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

    console.log(typeOfCard);

    checkGameState();
        if (gameOver == true && popUpWin == true){
            let popUp = document.getElementById("WinPopUp");
            setTimeout(popUp.style.visibility = "visible", 2000);
        } else if (gameOver == true && popUpLoss == true){
            let popUp = document.getElementById("LossPopUp");
            setTimeout(popUp.style.visibility = "visible", 2000);
        } else {
            if (typeOfCard == "regular"){
                playerTurn = true;
                playerTurnTrue();
            } else if (typeOfCard == "skip"){
                playerTurn = false;
                computerTurnTrue();
                setTimeout(computerTurn, 2000);
            } else if (typeOfCard == "plus2"){
                playerTurn = false;
                givePlayerHand(2);
                computerTurnTrue();
                setTimeout(computerTurn, 2000);
            } 
        }
}

function computerPlayWild(ind,typeOfWild){
    let blueCards = 0;
    let greenCards = 0;
    let redCards = 0;
    let yellowCards = 0;
    computerCards.forEach(card => {
        if (card.name.charAt(0) == 'B'){
            console.log("counted a blue card");
            blueCards++;
        } else if (card.name.charAt(0) == 'G'){
            console.log("counted a green card");
            greenCards++;
        } else if (card.name.charAt(0) == 'R') {
            console.log("counted a red card");
            redCards++;
        } else if (card.name.charAt(0) == 'Y'){
            console.log("counted a yellow card");
            yellowCards++;
        }
    });
    let numsOfCards = [
        {color: "B", numCards: blueCards},
        {color: "G", numCards: greenCards},
        {color: "R", numCards: redCards},
        {color: "Y", numCards: yellowCards}
    ]

    console.log("REDUCE ***************************");
    let cardToPlay = numsOfCards.reduce((high, min) => min.numCards > high.numCards ? min : high);
    console.log(cardToPlay);

    let cardToPlayName = cardToPlay.color

    if (typeOfWild == "wild"){ 
    computerChoice = document.createElement("img");
    computerChoice.setAttribute("src", "images/" + cardToPlayName + 'W' + ".png");
    computerChoice.setAttribute('name', cardToPlayName + 'W');
    computerChoice.setAttribute('id', cardToPlayName + 'W');
    computerChoice.setAttribute('class', 'playPile');

    cardInPile.pop();
    cardInPile.push(computerChoice);
    computerCards.splice(ind,1);
    pileControl.innerHTML = '';
        
    pileControl.appendChild(computerChoice);
            
    computerHandControl.removeChild(computerHandControl.childNodes[ind]);

    checkGameState();
        if (gameOver == true && popUpWin == true){
            let popUp = document.getElementById("WinPopUp");
            setTimeout(popUp.style.visibility = "visible", 2000);
        } else if (gameOver == true && popUpLoss == true){
            let popUp = document.getElementById("LossPopUp");
            setTimeout(popUp.style.visibility = "visible", 2000);
        } else {
            playerTurn = true;
            playerTurnTrue();
        }

    } else if (typeOfWild == "plus4"){
        computerChoice = document.createElement("img");
        computerChoice.setAttribute("src", "images/" + cardToPlayName + 'P4' + ".png");
        computerChoice.setAttribute('name', cardToPlayName + 'P4');

        // ids are not configured but thats okay
        computerChoice.setAttribute('id', cardToPlayName + 'P4');
        computerChoice.setAttribute('class', 'playPile');
    
        cardInPile.pop();
        cardInPile.push(computerChoice);
        computerCards.splice(ind,1);
        pileControl.innerHTML = '';
            
        pileControl.appendChild(computerChoice);
                
        computerHandControl.removeChild(computerHandControl.childNodes[ind]);
        givePlayerHand(4);

        checkGameState();
        if (gameOver == true && popUpWin == true){
            let popUp = document.getElementById("WinPopUp");
            setTimeout(popUp.style.visibility = "visible", 2000);
        } else if (gameOver == true && popUpLoss == true){
            let popUp = document.getElementById("LossPopUp");
            setTimeout(popUp.style.visibility = "visible", 2000);
        } else {
            playerTurn = false;
            computerTurnTrue();
            setTimeout(computerTurn, 2000);
        }
    }
}


// need to implement
function checkGameState(){
    console.log("checking game state");
    console.log(playerCards.length);
    console.log(computerCards.length);
    if (playerCards.length == 0){
        popUpWin = true;
        gameOver = true;
    } else if (computerHandControl.innerHTML == ''){
        popUpLoss = true;
        gameOver = true;
    }
    return gameOver, popUpWin, popUpLoss;
}


// main game function
function startGame(){
    console.log(deckOfCards);
    giveComputerHand(7);
    generatePlayPile();
    givePlayerHand(7);
    playerTurnTrue();  
}

// Called at beginning - start the game!
startGame();