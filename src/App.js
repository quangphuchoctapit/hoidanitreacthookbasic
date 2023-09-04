import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hell odog </h1>
      </header>
    </div>
  );
}

export default App;
