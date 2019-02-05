import React from 'react'
import { Consumer } from './Context'
import Player from './Player'

const PlayerList = () => {
  return (
    <Consumer>
      { context => (
        <React.Fragment>
          {context.players.map((player, index) =>
            <Player
              {...player}
              key={player.id.toString()}
              index={index}
              isHighScore={context.actions.highScore === player.score}
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
  );
}

export default PlayerList;
