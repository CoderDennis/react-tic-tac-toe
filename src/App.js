import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './App.css';
import useStickyState from './useStickyState';

import Grid from './Grid';
import Square from './Square';
import findWinner from './gameRules';
import { useEffect, useCallback } from 'react';

function App() {
  const [size, setSize] = useStickyState(3, 'size');

  const [squares, setSquares] = useStickyState(Array(size * size).fill(), 'squares');

  const [player, setPlayer] = useStickyState('X', 'current-player');

  const gameWinner = findWinner(squares, size);

  let status = `Your move, Player ${player}`;

  if (gameWinner) {
    if (gameWinner === 'Cat') {
      status = "Cat's game";
    } else {
      status = `Player ${gameWinner} wins!`;
    }
  }

  const reset = useCallback(() => {
    setSquares(Array(size * size).fill());
    setPlayer('X');
  }, [size, setSquares, setPlayer])

  useEffect(() => {
    if (squares.length !== size * size) {
      // reset game when size changed
      reset();
    }
  }, [size, squares, reset]);

  const viewBox = `0 0 ${size*110} ${size*116}`;

  const gridSizes = Array(7).fill().map((_, i) => i+3);

  return (
    <>
      <div id="menu">
        <FontAwesomeIcon icon={solid('rotate')} onClick={reset} />
        {gridSizes.map(s => <span key={s} onClick={() => setSize(s)}>{s}x{s}</span>)}
        <span onClick={() => setSize(42)}>42x42</span>
      </div>
      <svg viewBox={viewBox} preserveAspectRatio="xMidYMid meet">
        <text x={size*10} y={size*12} fontSize={size*10}>{status}</text>
        <g transform={`translate(${size*5},${size*15})`}>
          {Grid(size)}
          {squares.map((value, index) => Square(value, index, size, (index) => {
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
    </>
  );
}

export default App;


