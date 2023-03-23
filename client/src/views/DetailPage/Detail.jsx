import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import Loading from "../../components/Loading/Loading"
import imgDefault from "../../assets/pokemon.png"
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

    return (
        <div>
            {
                pokemon ?
                <div>
                    <img src={pokemon.image ?  pokemon.image : imgDefault} alt={pokemon.name} />
                    <h1>{pokemon.name}</h1>
                    <h1>Estadisticas: </h1>
                    <h2>Attack: {pokemon.attack}</h2>
                    <h2>Defense: {pokemon.defense}</h2>
                    <h2>Speed: {pokemon.speed}</h2>
                    <h2>Hp: {pokemon.hp}</h2>
                    <h1>Caracteristicas</h1>
                    <h2>Height: {pokemon.height}</h2>
                    <h2>Weight{pokemon.weight}</h2>
                    {pokemon.Types 
                ? pokemon.Types[1] 
                    ? <h2>Type: {pokemon.Types[0].name} <br />{pokemon.Types[1].name}</h2> 
                    : <h2>Type: {pokemon.Types[0].name}</h2>  
                : <h2>Type: {pokemon.types[0]} <br/> {pokemon.types[1]}</h2> }
                </div>
               :
               <Loading /> 
            }
        </div>
    )
}

export default Detail