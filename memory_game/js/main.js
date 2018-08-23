console.log("Up and running!");
var cards = [ //cards object
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = []; //cards that have been flipped
var checkForMatch = function () {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		  } else {
		  	alert("Sorry, try again.");
		  }
};
var flipcard = function () {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2 ) {
checkForMatch();	// I'd like to find a way to display the match message AFTER the second card is flipped.	
	}
};

var createBoard = function() { //sets up screen for new game
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		var addcard = document.getElementById('game-board');
		addcard.appendChild(cardElement);
		cardElement.addEventListener('click', flipcard);
};
};
createBoard();
