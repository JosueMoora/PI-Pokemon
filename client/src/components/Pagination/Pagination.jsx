import React from "react";
import style from './Pagination.module.css'
const Pagination = ({
  pokemonsPerPage,
  pokemons,
  handleNext,
  handlePrevious,
  currentPage,
}) => {
  
  const numOfPages = [];
  const amountOfPages = Math.ceil(pokemons / pokemonsPerPage);
  for (let i = 1; i <= amountOfPages; i++) {
    numOfPages.push(i);
  }

  return (
    <div className={style.pagination}>
      {numOfPages.length > 1 ? <> <button onClick={(e) => handlePrevious(e)}> ← </button> <h1>{currentPage} of {numOfPages.length}</h1> <button onClick={(e) => handleNext(e)}> → </button> </> : <h1>{currentPage}</h1> }
    </div>
  );
};

export default Pagination;
