import './App.css';
import { Nav } from './components/Nav';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header>
        <Nav />
      </Header>
    </div>
  );
}

export default App;
