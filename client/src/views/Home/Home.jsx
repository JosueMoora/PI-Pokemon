import style from "./Home.module.css";
import { useState, useEffect } from "react";
import {
  filterByType,
  filterByCreated,
  orderByAttack,
  orderByName,
  getPokemons,
  getTypes,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import Card from "../../components/Card/card";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPokemons())
    dispatch(getTypes())
},[dispatch])
  //loader
  const loader = useSelector((state) => state.loader);
  // pagination elements:
  const pokemons = useSelector((state) => state.pokemons);
  const [pokemonsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const last = currentPage * pokemonsPerPage;
  const first = last - pokemonsPerPage;
  const currentPokemons = pokemons.slice(first, last);
  const numberOfPages = pokemons.length / pokemonsPerPage;
  const pagination = (numberPage) => {
    setCurrentPage(numberPage);
    document.getElementById(`${currentPage}`).classList.remove("active");
    document.getElementById(`${numberPage}`).classList.toggle("active");
  };

  //filter
  const types = useSelector((state) => state.types);
  const [order, setOrder] = useState("");


  //filtered

  const handleFilterByType = (event) => {
    event.preventDefault();
    dispatch(filterByType(event.target.value));
    setCurrentPage(1);
    document.getElementById(`${currentPage}`).classList.remove("active");
    document.getElementById("1").classList.toggle("active");
  };

  const handleFilterByCreated = (event) => {
    event.preventDefault();
    dispatch(filterByCreated(event.target.value));
    setCurrentPage(1);
    document.getElementById(`${currentPage}`).classList.remove("active");
    document.getElementById("1").classList.toggle("active");
  };

  // ordering:

  const handleOrderByName = (event) => {
    event.preventDefault();
    dispatch(orderByName(event.target.value));
    setOrder(event.target.value);
    setCurrentPage(1);
    document.getElementById(`${currentPage}`).classList.remove("active");
    document.getElementById("1").classList.toggle("active");
  };

  const handleOrderByAttack = (event) => {
    event.preventDefault();
    dispatch(orderByAttack(event.target.value));
    setOrder(event.target.value);
    setCurrentPage(1);
    document.getElementById(`${currentPage}`).classList.remove("active");
    document.getElementById("1").classList.toggle("active");
  };

  // reset:

  const handleReset = (event) => {
    event.preventDefault();
    dispatch(getPokemons())
    dispatch(getTypes())
    document.getElementById("order").value = "order";
    document.getElementById("attack").value = "attack";
    document.getElementById("created").value = "data";
    document.getElementById("types").value = "type";
    setCurrentPage(1);
    document.getElementById(`${currentPage}`).classList.remove("active");
    document.getElementById("1").classList.toggle("active");

  };

  // next y previous buttons:

  const handleNext = (event) => {
    event.preventDefault();
    currentPage <= numberOfPages
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(currentPage);
    document.getElementById(`${currentPage}`).classList.remove("active");
    currentPage <= numberOfPages
      ? document.getElementById(`${currentPage + 1}`).classList.toggle("active")
      : document.getElementById(`${currentPage}`).classList.toggle("active");
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    currentPage > 1
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(currentPage);
    document.getElementById(`${currentPage}`).classList.remove("active");
    currentPage > 1
      ? document.getElementById(`${currentPage - 1}`).classList.toggle("active")
      : document.getElementById(`${currentPage}`).classList.toggle("active");
  };

  return (
    <div className={style.div}>
      <div className={style.filterBar}>
        <select id="order" onChange={(event) => handleOrderByName(event)}>
          <option value="order">Order by name</option>
          <option value="A-Z">A - Z</option>
          <option value="Z-A">Z - A</option>
        </select>
        <select id="attack" onChange={(event) => handleOrderByAttack(event)}>
          <option value="attack">Order by attack</option>
          <option value="min">Min</option>
          <option value="max">Max</option>
        </select>

        <select id="types" onChange={(event) => handleFilterByType(event)}>
          <option value="type">Order by type</option>
          <option value="All">All</option>
          {types.map((type) => {
            return (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            );
          })}
        </select>
        <select id="created" onChange={(event) => handleFilterByCreated(event)}>
          <option value="data">Order by data</option>
          <option value="All">All</option>
          <option value="db">DB</option>
          <option value="api">Api</option>
        </select>
        <button type="submit" onClick={(event) => handleReset(event)}>
          Reset
        </button>
        
      </div>
      <div className={style.container}>
        {
          !loader ? <Loading /> :
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
          <Pagination
            pokemonsPerPage={pokemonsPerPage}
            pokemons={pokemons.length}
            pagination={pagination}
            currentPage={currentPage}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
    </div>
  );
};

export default Home;
