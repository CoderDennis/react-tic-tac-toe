import { useContext, useState } from 'react';

import Grid from './Grid';
import GameSizeContext from './GameSizeContext';
import Square from './Square';

function Game() {
  const size = useContext(GameSizeContext);

  const [squares, setSquares] = useState(Array(size * size).fill());

  const [player, setPlayer] = useState('X');

  // console.log(squares);

  return (
    <g transform="translate(10,50)">
      {Grid()}
      {squares.map((value, index) => Square({value, index}, (index) => {
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
  );
}

export default Game;


