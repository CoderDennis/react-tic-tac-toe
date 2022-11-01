import { useContext } from 'react';

import SquareO from './SquareO';
import SquareX from './SquareX';
import SquareClickable from './SquareClickable';
import GameSizeContext from './GameSizeContext';

function Square(value, index, handleSquareClick) {
  const size = useContext(GameSizeContext);

  const row = Math.floor(index / size);
  const col = index % size;
  const x = row * 100;
  const y = col * 100;
  return (
    <g key={index} transform={`translate(${x},${y})`}>
      {renderValue(value, () => handleSquareClick(index))}
    </g>
  )


}

function renderValue(value, squareClick) {
  if (value === 'X') {
    return SquareX();
  }
  if (value === 'O') {
    return SquareO();
  }
  return SquareClickable(squareClick);
}

export default Square;