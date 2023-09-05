import './Nav.scss'
import { Link, NavLink } from 'react-router-dom'
const Nav = () => {
    return (
        <>
            <div className="topnav">
                <NavLink activeClassName="active" to="/" exact>Home</NavLink>
                <NavLink to="/timer">Timer</NavLink>
                <NavLink to="/todo">Todo apps</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </>
    )
}

export default Nav