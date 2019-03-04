import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

  state = {
    players: [],
  };

  prevPlayerId = this.state.players.length;

  componentDidMount() {
    const playersStorage = localStorage.getItem('players', this.state.players);
    if (playersStorage) {
      this.setState({ players: JSON.parse(playersStorage) });
    }
  }

  setLocalStorage() {
    localStorage.setItem('players', JSON.stringify(this.state.players));
  }

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta,
    }), this.setLocalStorage);
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
      }), this.setLocalStorage);
    }
  }

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id),
      };
    }, this.setLocalStorage);
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
