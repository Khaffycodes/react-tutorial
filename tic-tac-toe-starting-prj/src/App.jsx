import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        GaMEBOaRD
      </div>
      LOG
    </main>
  );
}

export default App;
