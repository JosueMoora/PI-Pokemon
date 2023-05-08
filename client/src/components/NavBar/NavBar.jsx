import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getByName } from "../../redux/actions";
import style from "./NavBar.module.css";
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      alert("you must enter a name");
      setName("");
    } else {
      navigate("/home");
      dispatch(getByName(name));
      setName("");
    }
  };
  return (
    <div className={style.div}>
      <nav className={style.nav}>
        <NavLink exact to="/home" className={style.active}>
          Home
        </NavLink>
        <NavLink exact to="/create" className={style.active}>
          Create Pokemon
        </NavLink>
        <div className={style.searchForm}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="search for any pokemon"
            value={name}
          />
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Search
          </button>
        </div>
        <NavLink exact to="/about" className={style.active}>
          About
        </NavLink>

        <NavLink exact to="/" className={style.active}>
          Close App
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
