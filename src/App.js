import React, { Component } from 'react'
import './App.css'
import Player from './Player'

const GAME = {
  defaultScore: 50,
  defaultNames: ["Player One", "Player Two"],
}

class App extends Component {
  game = GAME
  constructor() {
    super()
    let players = []
    this.game.defaultNames.map((name, index) => 
      players.push({
        id: index, 
        name: name, 
        score: this.game.defaultScore,
      })
    )
    this.state = { 
      players: players,
    };
  }
  changeScore = (index, value) => {
    let copyOfPlayers = this.state.players
    copyOfPlayers[index].score += value
    this.setState({players: copyOfPlayers})
  }
  startNewGame = () => {
    let copyOfPlayers = this.state.players
    copyOfPlayers.map(player => player.score = this.game.defaultScore)
    this.setState({players: copyOfPlayers})
  }
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
  }
}

export default App
