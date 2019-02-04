import React, { PureComponent }from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Crown from './Crown'

class Player extends PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    changeScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
    isHighScore: PropTypes.bool
  };

  render() {

    const {
      id,
      name,
      score,
      index,
      changeScore,
      removePlayer,
      isHighScore
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button
            className="remove-player"
            onClick={() => removePlayer(id)}
          >✖</button>
          <Crown isHighScore={isHighScore} />
          {name}
        </span>
        <Counter
          score={score}
          index={index}
          changeScore={changeScore}
        />
      </div>
    );
  }
}

export default Player;
