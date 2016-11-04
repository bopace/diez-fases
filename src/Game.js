import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <div className="Game-header">
          <h2>Diez fases</h2>
        </div>
        <p className="Game-intro">
          Soon, a game will be here. How exciting!
        </p>
      </div>
    );
  }
}

export default Game;
