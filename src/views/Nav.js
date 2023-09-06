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
                <NavLink to="/youtube-search">Youtube Search</NavLink>
            </div>
        </>
    )
}

export default Nav