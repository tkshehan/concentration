import React from 'react';
import './Card.css';

class Card extends React.Component {

  handleClick = () => {
    if (this.props.removed || this.props.selected) return;
    this.props.onClick(this.props.value, this.props.suit);
  }

  render() {
    let classNames = 'card';
    let card = '';

    if (this.props.selected) {
      card = <>{this.props.value}</>;
      classNames += ' selected';
    } else if (this.props.removed) {
      classNames += ' removed';
    } else {
      card = <> <div className="cardback">concentration</div> </>;
    }

    return (
      <div onClick={this.handleClick} className={classNames}>
        {card}
      </div>
    );
  }
}

export default Card;