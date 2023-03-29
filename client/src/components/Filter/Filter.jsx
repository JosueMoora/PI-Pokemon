import { useDispatch, useSelector } from "react-redux";
import {
  filterByCreated,
  filterByType,
  getPokemons,
  getTypes,
  orderByAttack,
  orderByName,
} from "../../redux/actions";
import style from "./Filter.module.css";
const Filter = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const handleFilterByType = (event) => {
    event.preventDefault();
    dispatch(filterByType(event.target.value));
    setCurrentPage(1);
  };

  const handleFilterByCreated = (event) => {
    event.preventDefault();
    dispatch(filterByCreated(event.target.value));
    setCurrentPage(1);
  };

  // ordering:

  const handleOrderByName = (event) => {
    event.preventDefault();
    dispatch(orderByName(event.target.value));
    setOrder(event.target.value);
    setCurrentPage(1);
  };

  const handleOrderByAttack = (event) => {
    event.preventDefault();
    dispatch(orderByAttack(event.target.value));
    setOrder(event.target.value);
    setCurrentPage(1);
  };



  const handleReset = (event) => {
    event.preventDefault();
    dispatch(getPokemons());
    dispatch(getTypes());
    document.getElementById("order").value = "order";
    document.getElementById("attack").value = "attack";
    document.getElementById("created").value = "data";
    document.getElementById("types").value = "type";
    setCurrentPage(1);
  };

  return (
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
  );
};

export default Filter;
