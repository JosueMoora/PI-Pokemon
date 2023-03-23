import axios from "axios"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import style from "./NavBar.module.css"
const NavBar = ()=> {
    const [name, setName] = useState("")
    const handleChange = (event) =>{
        setName(event.target.value)
    }
    const search = ()=> {
        if (!name){
            alert("debe introducir un nombre")
        } else {
            axios.get(`http://localhost:3001/pokemons/?name=${name}`.toLowerCase())
        .then((response) => {
          <NavLink to={"http://localhost:3001/pokemons/Detail/" + response.data.id}></NavLink>
        })
        
        }
    }
    return (
        <div className={style.div}>
            <NavLink to="/home">HOME</NavLink>
            <NavLink to="/create">CREATE POKEMON</NavLink>
            <input type="text" onChange={handleChange} placeholder="search your pokemon"
          value={name}
          onKeyDown={(evento) => {
            if (evento.key === "Enter") {
              search();
            }
          }}
        ></input>
        <button  onClick={search}>Buscar</button>
            <NavLink to="/">CLOSE APP</NavLink>
        </div>
    )
}

export default NavBar