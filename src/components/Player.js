import React, { PureComponent }from 'react';
import { Consumer } from './Context'
import PropTypes from 'prop-types';
import Counter from './Counter';
import Crown from './Crown'

class Player extends PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    isHighScore: PropTypes.bool
  };

  render() {

    const { id, name, score, index, isHighScore } = this.props;

    return (
      <div className="player">
        <Consumer>
          { context => (
            <span className="player-name">
              <button
                className="remove-player"
                onClick={() => context.actions.removePlayer(id)}
              >✖</button>
              <Crown isHighScore={isHighScore} />
              {name}
            </span>
          )}
        </Consumer>
        <Counter
          score={score}
          index={index}
        />
      </div>
    );
  }
}

export default Player;
