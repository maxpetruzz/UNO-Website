# UNO Website Repository

## What is this project?
This was a self-chosen semester-long project in which the students had to either work on an open source project or create one of their own. I decided to create UNO as a website, using only HTML, CSS, and JavaScript - which is what I used to run the game.

## How To Run It
This project can be downloaded and ran on any device that has access to an internet browser such as Google Chrome or Internet explorer. Open one of the HTML files and you will be presented with the website.

## About the Pages of the Site
The home page is simply just HTML and CSS and includes a welcome and a tiny about section which can be expanded upon for sure. The real fun stuff is the game itself. I modeled my version of UNO directly following the actual guidelines and rules of the real life game.

## How To Play
The computer and you are both dealt 7 cards to begin with. You cannot see the opponents cards but you can, of course, see your own.
The objective of the game is to simply get rid of all your cards first. You can put down any card that matches the color or number of the card in the pile and if you have a black wild or plus 4 card, you can choose to play it at any time and you will be given the option to choose a color then.

I made the computer itself somewhat smart by also giving it these types of cards; it goes through its cards to see what color it has the most so it can pick a wild color wisely and maybe beat you, the player.

## Bugs: December 2021
The semester is over but this game can definitely still be improved, expanded on.

Bug 1: Opponent's Cards-
    If the computer gets too many cards it will just keep adding them horizontally on screen, whereas if the player has too many cards, the cards wrap to the next row, right below. In a future implementation the computer cards need to be fixed to remain on the full width of the screen.

Bug 2: +2 and +4 Playing
    Both the computer and the player have the ability to play a +2 then a +4, in real UNO i believe this is illegal so it should maybe be changed.

Bug 3: Drawing a Good Card
    Computer and Player can both draw a card that can be played. In real UNO if you have to draw a card but the card you draw is playable, you can choose to play it right then. In a newer version this should be an option, instead of drawing a card and not being able to play it right away.

Bug 4: Hovering a Card when you lose the game
    If you hover over your cards at any point in the game, they hover up as if your picking them up. If your mouse is hovered over any of your cards when the computer goes and wins by putting down their last card, the hovered card remains above the popup that tells you you've lost and the game is over. This needs to be fixed.

