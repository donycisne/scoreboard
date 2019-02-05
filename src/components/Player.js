import React, { PureComponent }from 'react';
import { Consumer } from './Context'
import PropTypes from 'prop-types';
import Counter from './Counter';
import Crown from './Crown'

class Player extends PureComponent {

  static propTypes = {
    index: PropTypes.number.isRequired,
    isHighScore: PropTypes.bool
  };

  render() {

    const { index, isHighScore } = this.props;

    return (
      <div className="player">
        <Consumer>
          { ({ actions, players }) => (
            <span className="player-name">
              <button
                className="remove-player"
                onClick={() => actions.removePlayer(players[index].id)}
              >✖</button>
              <Crown isHighScore={isHighScore} />
              { players[index].name }
            </span>
          )}
        </Consumer>
        <Counter index={index} />
      </div>
    );
  }
}

export default Player;
