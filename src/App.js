import logo from './logo.svg';
import './App.scss';
import Nav from './views/Nav'
import Todo from './views/Todo'
import Users from './views/Users'
import Blogs from './views/Blogs'
import AddBlog from './views/AddBlog'
import DetailBlog from './views/DetailBlog'
import NotFound from './views/Notfound'
import { CountdownClass, CountdownHook } from './views/Countdown';
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
  const [todo, setTodo] = useState('')
  const [isTimesUp, setIsTimesUp] = useState(false)
  const [todos, setTodos] = useState([
    { id: Math.random(0, 1000), title: 'ok', type: 'ok' },
    { id: Math.random(0, 1000), title: 'ko', type: 'ko' },
    { id: Math.random(0, 1000), title: 'ok', type: 'ok' },
    { id: Math.random(0, 1000), title: 'ko', type: 'ko' }
  ])

  useEffect(() => {
    // console.log('run useeffect')
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

  const onTimesUp = () => {
    setIsTimesUp(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route exact={true} path="/">
              <Users />
            </Route>
            <Route path="/timer">
              {isTimesUp && <div>Time's up</div>}
              <CountdownClass onTimesUp={onTimesUp} />
              <span>_______________________</span>
              <CountdownHook onTimesUp={onTimesUp} />
            </Route>
            <Route path="/todo">
              <Todo todo={todo} todos={todos} handleAdd={handleAdd} handleOnChangeInput={handleOnChangeInput} handleDelete={handleDelete} />
            </Route>
            <Route path='/blog' exact>
              <Blogs />
            </Route>
            <Route path='/blog/:id'>
              <DetailBlog />
            </Route>
            <Route path='/add-blog'>
              <AddBlog />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>

        </Router>

      </header>
    </div>
  );
}

export default App;
