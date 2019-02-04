import React, { PureComponent }from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    changeScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired
  };

  render() {

    const {id, name, score, index, changeScore, removePlayer} = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button
            className="remove-player"
            onClick={() => removePlayer(id)}
          >✖</button>
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
