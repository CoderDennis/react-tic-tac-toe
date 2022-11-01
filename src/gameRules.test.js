import findWinner from './gameRules';

test('X with middle row returns X', () => {
  const squares = Array(9).fill();
  squares[3] = 'X';
  squares[4] = 'X';
  squares[5] = 'X';

  const winner = findWinner(squares, 3);
  expect(winner).toBe('X');
});

test('X with middle column returns X', () => {
  const squares = Array(9).fill();
  squares[1] = 'X';
  squares[4] = 'X';
  squares[7] = 'X';

  const winner = findWinner(squares, 3);
  expect(winner).toBe('X');
});

test('X with top-left to bottom-right diagonal returns X', () => {
  const squares = Array(9).fill();
  squares[0] = 'X';
  squares[4] = 'X';
  squares[8] = 'X';

  const winner = findWinner(squares, 3);
  expect(winner).toBe('X');
});

test('X with bottom-left to top-right diagonal returns X', () => {
  const squares = Array(9).fill();
  squares[6] = 'X';
  squares[4] = 'X';
  squares[2] = 'X';

  const winner = findWinner(squares, 3);
  expect(winner).toBe('X');
});

test('filled grid with no winner returns Cat', () => {
  const squares = ['X', 'O', 'O',
                   'O', 'X', 'X',
                   'O', 'X', 'O'
                  ];

  const winner = findWinner(squares, 3);
  expect(winner).toBe('Cat');
});