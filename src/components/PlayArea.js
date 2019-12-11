import React from 'react';
import Card from './Card';

import './PlayArea.css';

class PlayArea extends React.Component {

  render() {
    const cards = this.props.cards.map((card, index) => {
      let selected = false;
      if (this.props.selected.includes(index)) {
        selected = true;
      }
      return (
        <Card
          value={card.value}
          suit={card.suit}
          selected={selected}
          removed={card.removed}
          onClick={this.props.onClick}
          key={index}
        />
      );
    });

    return (
      <div className="playarea">
        <div className="cards">
          {cards}
        </div>
      </div>
    );
  }
}

export default PlayArea;