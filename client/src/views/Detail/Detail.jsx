import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import Loading from "../../components/Loading/Loading"
import style from "./Detail.module.css"
const Detail = ()=> {
    
    const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/pokemons/${id}`)
      .then((response) => {
        return setPokemon(response.data);
      })

  }, [id]);

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
                    <h1># {pokemon.id} - {pokemon.name.toUpperCase()}</h1>
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