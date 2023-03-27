import React from "react";
import style from './Pagination.module.css'
const Pagination = ({
  pokemonsPerPage,
  pokemons,
  pagination,
  handleNext,
  handlePrevious,
}) => {
  
  const numOfPages = [];
  const amountOfPages = Math.ceil(pokemons / pokemonsPerPage);
  for (let i = 1; i <= amountOfPages; i++) {
    numOfPages.push(i);
  }

  return (
    <div className={style.pagination}>
      <button className="prev-button" onClick={(e) => handlePrevious(e)}>
        ←
      </button>

      {numOfPages?.map((page) => {
        return (
          <button
            className="page-num"
            id={page}
            key={page}
            onClick={() => pagination(page)}
          >
            {page}
          </button>
        );
      })}
      <button className="next-button" onClick={(e) => handleNext(e)}>
        →
      </button>
    </div>
  );
};

export default Pagination;
