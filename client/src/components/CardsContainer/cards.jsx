import { useSelector } from "react-redux";
import Card from "../Card/card";
import style from "./cards.module.css"
import Loading from "../Loading/Loading"
const Cards = () => {
  const pokemons = useSelector(state => state.pokemons)
  if (!pokemons.length) return <Loading />
  return (
    <div className={style.container}>
      {pokemons.map((pokemon) => {
        return <Card
            id={pokemon.id}
            image = {pokemon.image}
            name={pokemon.name}
            types={pokemon.types}
            Types={pokemon.Types}
        />;
      })}
    </div>
  );
};

export default Cards;
