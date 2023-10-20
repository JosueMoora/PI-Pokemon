import style from "./Landing.module.css";
import { NavLink } from "react-router-dom";
import pokeBall from "../../assets/pokeball.png";
const Landing = () => {
  return (
    <main className={style.container}>
      <section className={style.section}>
      <h1>Pokemon App</h1>
      <p>
        Immerse yourself in the world of pokemon, and enjoy meeting or creating
        your favorite characters.
      </p>
      {/* <button className={style.button}> */}
        <NavLink className={style.linkButton}  to="/home">Start</NavLink>
      {/* </button> */}
      </section>
      <section className={style.section1}>
      <img src={pokeBall} alt="pokeball" />
      </section>
    </main>
  );
};

export default Landing;
