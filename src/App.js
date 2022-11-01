import './App.css';
import Game from './Game';
import GameSizeContext from './GameSizeContext';

function App() {
  return (
    <GameSizeContext.Provider value={3}>
      {Game()}
    </GameSizeContext.Provider>
  );
}

export default App;
