import { useContext, useState } from 'react';

import Grid from './Grid';
import GameSizeContext from './GameSizeContext';
import Square from './Square';
import findWinner from './gameRules';

function Game() {
  const size = useContext(GameSizeContext);

  const [squares, setSquares] = useState(Array(size * size).fill());

  const [player, setPlayer] = useState('X');

  const gameWinner = findWinner(squares, size);

  let status = `Your move, Player ${player}`;

  if (gameWinner) {
    if (gameWinner === 'Cat') {
      status = "Cat's game";
    } else {
      status = `Player ${gameWinner} wins!`;
    }
  }

  return (
      <svg viewBox="0 0 320 370" preserveAspectRatio="xMidYMid meet">
        <text x="20" y="35" fontSize="30">{status}</text>
        <g transform="translate(10,60)">
          {Grid()}
          {squares.map((value, index) => Square(value, index, (index) => {
            if (gameWinner) {
              return;
            }

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


