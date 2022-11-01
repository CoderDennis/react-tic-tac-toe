import './App.css';
import Game from './Game';
import GameSizeContext from './GameSizeContext';

function App() {
  return (
    <GameSizeContext.Provider value={3}>
      <svg viewBox="0 0 320 360" preserveAspectRatio="xMidYMid meet" height="100%" width="100%">
        {Game()}
      </svg>
    </GameSizeContext.Provider>
  );
}

export default App;
