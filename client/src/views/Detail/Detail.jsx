import axios from "axios"
import { useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import Loading from "../../components/Loading/Loading"
import style from "./Detail.module.css"
const Detail = ()=> {
    const navigate = useNavigate()
    const {id} = useParams()
    const [pokemon, setPokemon] = useState();
    useEffect(() => {
    axios
      .get(`/pokemons/${id}`)
      .then((response) => {
        return setPokemon(response.data);
      })

  }, [id]);
    
const handleDelete = (event) =>{
  event.preventDefault()
  axios.delete(`/pokemons/${id}`)
  alert("Pokemon deleted 😔")
  navigate("/home")
} 

  const typeIcon = {
    normal: "🟦",
    fighting: "🥊",
    flying: "🦅",
    poison: "☠️",
    ground: "🟤",
    rock: "🪨",
    bug: "🐛",
    ghost: "👻",
    fire: "🔥",
    steel: "🔩",
    grass: "🌿",
    electric: "⚡️",
    water: "💧",
    psychic: "🔮",
    dragon: "🐲",
    ice: "❄️",
    dark: "🌑",
    fairy: "🧚"
  }
  
  
  

  const icon = typeIcon[pokemon?.types[0]];
  const icon2 = typeIcon[pokemon?.types[1]];

    return (
        <div className={style.container}>
            {
                pokemon ?
                
                <div className={style.detail}>
                  <div className={style.info}>
                    <h1>STATS: </h1>
                    <h2>💖 {pokemon.hp}  </h2>
                    <h2>⚔️ {pokemon.attack} </h2>
                    <h2>🛡️ {pokemon.defense} </h2>
                    <h2>🚀 {pokemon.speed} </h2>
                    <h1>FEATURES</h1>
                    <h2>📏 {pokemon.height}" </h2>
                    <h2>⚖️ {pokemon.weight} lb </h2>
                    <h1>TYPES:</h1>
                    {pokemon.types[1] ? <h2>{icon} {pokemon.types[0].toUpperCase()} <br /> {icon2} {pokemon.types[1].toUpperCase()}</h2> : <h2>{icon} {pokemon.types[0].toUpperCase()}</h2> }
                  </div>
                    <div className={style.imagen}>
                    <div className={style.button}>
                    <h1># {pokemon.id} - {pokemon.name.toUpperCase()}</h1>
                    {pokemon.id > 1010 && <button onClick={event => handleDelete(event)}>❌</button>}
                    </div>
                    <img src={pokemon.image} alt={pokemon.name} />
                    </div>
                </div>
               :
               <Loading /> 
            }
        </div>
    )
}

export default Detail