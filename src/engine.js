function generateCards() {
  const cards = [];
  const suits = ['Hearts', 'Spades'];
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  suits.forEach((suit) => {
    values.forEach((value) => {
      cards.push({
        suit,
        value,
        removed: false,
      })
    })
  });

  return cards;
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

export {generateCards, shuffle};

