import _ from 'lodash';

function findWinner(squares, size) {
  const rows = _.chunk(squares, size);
  const winnerByRow = findWinnerFromRows(rows);
  if (winnerByRow) return winnerByRow;

  const cols = _.zip.apply(_, rows);
  const winnerByCol = findWinnerFromRows(cols);
  if (winnerByCol) return winnerByCol;

  // check diagonal from top-left to bottom-right:
  const diagonal = Array(rows.length).fill();
  for (let i = 0; i < rows.length; i++) {
    diagonal[i] = rows[i][i];
  }

  if (diagonal[0] && diagonal.every( v => v === diagonal[0] )) {
    return diagonal[0];
  }

  // check diagonal from top-right to bottom-left:
  for (let i = 0; i < rows.length; i++) {
    diagonal[i] = rows[i][rows.length-i-1]
  }

  if (diagonal[0] && diagonal.every( v => v === diagonal[0] )) {
    return diagonal[0];
  }

  if (squares.every(v => v)) return 'Cat';

  // no winner found
  return undefined;
}

function findWinnerFromRows(rows) {

  let [winningRow] = rows.filter(row => row[0] && row.every( v => v === row[0] ));

  if (winningRow) {
    return winningRow[0];
  }

  return undefined;
}

export default findWinner;