import React from 'react'
import { Consumer } from './Context'
import Player from './Player'

const PlayerList = () => {
  return (
    <Consumer>
      { ({ players, actions }) => (
        <div  className={ players.length === 0 ? "no-player-list" : "player-list"}>
          {players.map((player, index) =>
            <Player
              {...player}
              key={player.id.toString()}
              index={index}
              isHighScore={actions.highScore === player.score}
            />
          )}
        </div >
      )}
    </Consumer>
  );
}

export default PlayerList;
