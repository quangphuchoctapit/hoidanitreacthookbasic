import './Nav.scss'
import { Link, NavLink } from 'react-router-dom'
const Nav = () => {
    return (
        <>
            <div className="topnav">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/timer">Timer</NavLink>
                <NavLink to="/todo">Todo app</NavLink>
                <NavLink to='/blog'>Blog app</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </>
    )
}

export default Nav