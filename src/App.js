import useStickyState from './useStickyState';

import Grid from './Grid';
import Square from './Square';
import findWinner from './gameRules';

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

  const viewBox = `0 0 ${size*100+20} ${size*100+size*15}`;

  return (
    <>
      <div id="menu">M</div>
      <svg viewBox={viewBox} preserveAspectRatio="xMidYMid meet">
        <text x="20" y={size*10} fontSize={size*10}>{status}</text>
        <g transform={`translate(10,${size*15})`}>
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


