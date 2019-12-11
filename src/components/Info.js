import React from 'react';
import './Info.css';

function Info(props) {
  return (
    <div className="info">
      <h2 className="currentPlayer">
        Player {props.activePlayer}'s Turn
      </h2>

      <div className="score">
        <h4>
          Player 1: {props.score[0]}
        </h4>
        <h4>
          Player 2: {props.score[1]}
        </h4>
      </div>
    </div>
  );
}

export default Info;