import './App.css';
import Grid from './Grid';

function App() {
  return (
    <svg viewBox="0 0 320 320" preserveAspectRatio="xMidYMid meet" height="100%" width="100%">
      <g transform="translate(10,10)">
        {Grid()}
      </g>
    </svg>
  );
}

export default App;
