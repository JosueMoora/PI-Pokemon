import style from "./Home.module.css";
import { useState, useEffect } from "react";
import { getPokemons, getTypes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error"
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";


const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  const loader = useSelector((state) => state.loader);
  const error = useSelector((state)=> state.error)
  const pokemons = useSelector((state) => state.filtered);
  const [pokemonsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const last = currentPage * pokemonsPerPage;
  const first = last - pokemonsPerPage;
  const currentPokemons = pokemons.slice(first, last);
  const numberOfPages = pokemons.length / pokemonsPerPage;

  const [order, setOrder] = useState("");
  console.log(order);


  const handleNext = (event) => {
    event.preventDefault();
    currentPage <= numberOfPages
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(currentPage);
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    currentPage > 1
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(currentPage);
  };


  return (
    <div className={style.div}>
      <Filter setCurrentPage={setCurrentPage} setOrder={setOrder} />
      {error ? 
      null
      :
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        pokemons={pokemons.length}
        currentPage={currentPage}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      }
      
      
        {!loader ? <Loading /> : error ? <Error /> : 
        <div className={style.container}>
          {
          currentPokemons?.map((pokemon) => {
            return (
              <Card
                id={pokemon.id}
                name={pokemon.name}
                attack={pokemon.attack}
                weight={pokemon.weight}
                height={pokemon.height}
                hp={pokemon.hp}
                image={pokemon.image}
                types={pokemon?.types}
              />
            );
          })
        }
        </div>
        }
    </div>
  );
};

export default Home;
