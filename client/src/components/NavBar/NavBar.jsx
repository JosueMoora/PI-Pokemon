import axios from "axios"
import { useState } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import style from "./NavBar.module.css"
const NavBar = ()=> {
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const handleChange = (event) =>{
        setName(event.target.value)
    }
    const search = ()=> {
        if (!name){
            alert("debe introducir un nombre")
        } else {
            axios.get(`http://localhost:3001/pokemons/?name=${name}`.toLowerCase())
        .then((response) => {
          if (!response.data.id) return navigate("/error")
          navigate("/detail/" + response.data.id)
        })}
    }
    return (
      <div className={style.div}>
        <nav className={style.nav}>
          <NavLink exact to="/home" className={style.active}>
            Home
          </NavLink>
          <NavLink exact to="/create" className={style.active}>
            Create Pokemon
          </NavLink>
      <div className={style.searchForm}>
      <input type="text" onChange={handleChange} placeholder="search for any pokemon"value={name} onKeyDown={(event) => {
            if (event.key === "Enter") {
             search()
             setName('')
}}} />
      </div>
          <NavLink exact to="/about" className={style.active}>
            About
          </NavLink>

          <NavLink exact to="/" className={style.active}>
            Close App
          </NavLink>
    </nav>
    </div>
    )
}

export default NavBar