class Concetraion {
  constructor() {
    this.player1 = {score: 0};
    this.player2 = {score: 0};
    this.cards = this.generateCards; // cards equal to false are removed
    this.cards = shuffle(cards);
    this.selectedCard = false;

    if (Math.floor(Math.random() * 1) === 0) {
      this.activePlayer = this.player1;
    } else {
      this.activePlayer = this.player2;
    }
  }

  generateCards() {
    const cards = [];
    const suits = ['Hearts', 'Spades'];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    suits.forEach((suit) => {
      values.forEach((value) => {
        cards.push({
          suit,
          value,
        })
      })
    });

    return cards;
  }

  selectCard(card) {
    if (this.selectedCard === false) {
      // If no card is selected, select one
      this.selectedCard = card;
    } else if (this.selectedCard == card) {
      // Unselect the current card if selected again
      this.selectedCard === false;
    } else {
      // Otherwise, check for a mtch
      this.matchCards(card, card);
    }
  }

  matchCards(a, b) {
    if (a.value === b.value) {
      this.activePlayer.score++;
      // Remove Cards
      a = false;
      b = false;
    } else {
      this.activePlayer = (
        this.active == this.player1 ? this.player2 : this.player1);
    }
    this.selectedCard = false;
  }
}

// Fisher–Yates shuffle
function shuffle(array) {
  let m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}