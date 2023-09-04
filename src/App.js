import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav'
import NumberCounter from './views/NumberCounter'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleDecrease = () => {
    setCount(count - 1)
  }
  const handleIncrease = () => {
    setCount(count + 1)

  }
  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <NumberCounter decrease={handleDecrease} increase={handleIncrease} reset={handleReset} count={count} />
      </header>
    </div>
  );
}

export default App;
