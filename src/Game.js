import { useContext, useState } from 'react';

import Grid from './Grid';
import GameSizeContext from './GameSizeContext';
import Square from './Square';

function Game() {
  const size = useContext(GameSizeContext);

  const [squares, setSquares] = useState(Array(size * size).fill());

  const [player, setPlayer] = useState('X');

  return (
      <svg viewBox="0 0 320 370" preserveAspectRatio="xMidYMid meet">
        <text x="20" y="35" fontSize="35">Your move, Player {player}</text>
        <g transform="translate(10,60)">
          {Grid()}
          {squares.map((value, index) => Square(value, index, (index) => {
            const newSquares = squares.slice();
            newSquares[index] = player;
            setSquares(newSquares);

            if (player === 'X') {
              setPlayer('O');
            } else {
              setPlayer('X');
            }
          }))}
        </g>
      </svg>
  );
}

export default Game;


