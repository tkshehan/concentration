import React from 'react';
import {shuffle, generateCards} from '../engine';

import Info from './Info';
import PlayArea from './PlayArea';

class Concentration extends React.Component {
  state = {
    cards: shuffle(generateCards()),
    score: [0, 0],
    activePlayer: 1,
    selected: [],
  };

  selectCard = (value, suit) => {
    // Do not let players choose more than 2 cards
    if (this.state.selected.length === 2) return;

    const index = this.state.cards.findIndex(
      (card) => card.value === value && card.suit === suit
    );

    this.setState({
      selected: [...this.state.selected, index]
    });
  }

  checkMatch = () => {
    if (this.state.selected.length === 2) {
      const card1Index = this.state.selected[0];
      const card2Index = this.state.selected[1];
      const card1 = this.state.cards[card1Index];
      const card2 = this.state.cards[card2Index];

      if (card1.value === card2.value) {
        const score = [...this.state.score];
        score[this.state.activePlayer - 1]++;

        const cards = [...this.state.cards];
        cards[card1Index].removed = true;
        cards[card2Index].removed = true;

        setTimeout(() => {
          this.setState({
            selected: [],
            cards,
            score,
          })
        }, 1500);
      } else {
        // Reset selected cards and change player
        setTimeout(() => {
          this.setState({
            selected: [],
            activePlayer: this.state.activePlayer === 1 ? 2 : 1,
          });
        }, 2000);
      }
    }
  }

  checkFinish = () => {
    if (this.state.score[0] + this.state.score[1] >= this.state.cards.length / 2) {
      let message;
      if (this.state.score[0] > this.state.score[1]) {
        message = 'Player 1 Wins';
      } else if (this.state.score[1] > this.state.score[0]) {
        message = 'Player 2 Wins';
      } else {
        message = 'Tie Game';
      }

      alert(message);

      setTimeout(() => {
        if (alert('Play again?')) {
          this.setupGame();
        }
      }, 5000);
    }
  }

  setupGame = () => {
    this.setState({
      cards: shuffle(generateCards()),
      score: [0, 0],
      activePlayer: 1,
      selected: [],
    });
  }

  render() {
    this.checkMatch();
    this.checkFinish();
    return (
      <>
        <Info
          activePlayer={this.state.activePlayer}
          score={this.state.score}
        />
        <PlayArea
          cards={this.state.cards}
          onClick={this.selectCard}
          selected={this.state.selected}
        />
        <button onClick={this.setupGame}>New Game</button>
      </>
    );
  }
}

export default Concentration;