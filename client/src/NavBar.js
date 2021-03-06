import { NavLink } from 'react-router-dom'

function NavBar({ onLogout }){

    return(
        <div>
            <NavLink style={{ marginRight: '10px'}} to='/'>Home</NavLink>
            <NavLink style={{ marginRight: '10px'}} to='/games'>Games</NavLink>
            <NavLink style={{ marginRight: "10px" }} to='/mygames'>MyGames </NavLink>
            <NavLink style={{ marginRight: '10px'}} to='/about'>About</NavLink>
            <NavLink onClick={onLogout} style={{ marginRight: '10px'}} to='/'> Logout </NavLink>
        </div>
    )
}
export default NavBar