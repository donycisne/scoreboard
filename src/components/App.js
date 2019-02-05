import React, { Component } from 'react';
import { Provider } from './Context'
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm'

class App extends Component {
  state = {
    players: [
      {
        name: 'Dony',
        score: 0,
        id: 1,
      },
      {
        name: 'Rose',
        score: 0,
        id: 2,
      },
      {
        name: 'Sam',
        score: 0,
        id: 3,
      },
      {
        name: 'Billy',
        score: 0,
        id: 4,
      },
    ],
  };

  prevPlayerId = this.state.players.length;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta,
    }));
  };

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) return highScore;
    return null;
  }

  handleAddPlayer = (name) => {
    if(name.trim() !== '') {
      this.setState(prevState => ({
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }));
    }
  }

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id),
      };
    });
  };

  render() {
    return (
      <Provider value={{
        players: this.state.players,
        actions:{
          addPlayer: this.handleAddPlayer,
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          highScore: this.getHighScore()
        }
      }}>
        <div className="scoreboard">
          <Header />
          <PlayerList />
          <AddPlayerForm />
        </div>
      </Provider>
    );
  }
}

export default App;
