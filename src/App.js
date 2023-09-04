import logo from './logo.svg';
import './App.scss';
import Nav from './views/Nav'
import Todo from './views/Todo'
import Users from './views/Users'
import { useState, useEffect } from 'react'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([
    { id: Math.random(0, 1000), title: 'ok', type: 'ok' },
    { id: Math.random(0, 1000), title: 'ko', type: 'ko' },
    { id: Math.random(0, 1000), title: 'ok', type: 'ok' },
    { id: Math.random(0, 1000), title: 'ko', type: 'ko' }
  ])

  useEffect(() => {
    console.log('run useeffect')
  })

  const handleOnChangeInput = e => {
    setTodo(e.target.value)
  }

  const handleAdd = () => {
    if (todo === '') {
      alert('missing param! ')
      return
    }
    let newTodos = { id: Math.random(0, 1000), title: todo, type: 'ok' }
    setTodos([...todos, newTodos])
    setTodo('')
  }

  const handleDelete = (id) => {
    let newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Todo todo={todo} todos={todos} handleAdd={handleAdd} handleOnChangeInput={handleOnChangeInput} handleDelete={handleDelete} /> */}
        {/* <Todo todos={todos.filter(todo => todo.type === 'ok')} /> */}
        <Users />
      </header>
    </div>
  );
}

export default App;
