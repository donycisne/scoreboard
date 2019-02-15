import React from 'react';
import Stats from './Stats'
import Stopwatch from './Stopwatch'

const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <Stats />
      <Stopwatch />
    </header>
  );
};

export default Header;
