import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

  state = {
    players: [
      {
        name: 'Dony',
        score: 0,
        id: 1,
      },
      {
        name: 'Samantha',
        score: 0,
        id: 2,
      },
      {
        name: 'Elizabeth',
        score: 0,
        id: 3,
      },
      {
        name: 'Edward',
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
  }

  render() {
    return (
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        actions:{
          addPlayer: this.handleAddPlayer,
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          highScore: this.getHighScore()
        }
      }}>
      { this.props.children }
      </ScoreboardContext.Provider>
    );
  }
}

export const Consumer = ScoreboardContext.Consumer;