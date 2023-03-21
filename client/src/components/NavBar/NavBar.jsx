import { NavLink } from "react-router-dom"
import style from "./NavBar.module.css"
const NavBar = ()=> {
    return (
        <div className={style.div}>
            <NavLink to="/home">HOME</NavLink>
            <NavLink to="/create">CREATE POKEMON</NavLink>
            <NavLink to="/detail/:id">DETAIL POKEMON</NavLink>
            <NavLink to="/">CLOSE APP</NavLink>
        </div>
    )
}

export default NavBar