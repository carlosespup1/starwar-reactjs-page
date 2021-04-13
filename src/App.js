import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar/navbar';
import AppState from './context/state/state';
import Characters from './components/characters/characters';

function App() {
  return (
    <AppState>
      <Navigation />
      <Characters />
    </AppState>
  );
}

export default App;
