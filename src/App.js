import React, { Component } from 'react';
import './App.css';
import Player from './Player';

const GAME = {
  defaultScore: 50,
  defaultNames: ["Player One", "Player Two"],
}

class App extends Component {
  constructor() {
    super();
    let players = GAME.defaultNames.map((name, index) => {
      return {
        id: index, 
        name: name, 
        score: GAME.defaultScore,
      }
    });
    this.state = { 
      players,
    };
  };
  changeScore(index, value) {
    let players = this.state.players.slice();
    players[index] = {
      name: players[index].name, 
      score: players[index].score + value,
    };
    this.setState({players});
  };
  startNewGame = () => {
    let players = this.state.players.slice();
    players.forEach(player => player.score = GAME.defaultScore);
    this.setState({players});
  };
  render() {
    return (
      <div className="App">
        <div className="App-players">
          {this.state.players.map((player, index) => 
            <Player 
              name={player.name} 
              score={this.state.players[index].score}
              changeScore={(value) => this.changeScore(index, value)} 
              key={player.id} 
            />
          )}
        </div>
        <div className="App-controls">
          <span onClick={this.startNewGame}>Start New Game</span>
        </div>  
      </div>
    );
  };
}

export default App;