import style from "./Landing.module.css"
import { NavLink } from "react-router-dom";
import pokeBall from '../../assets/pokeball.png'
const Landing = () => {

    
    return (
        <div className={style.container}>
            <h1>Pokemon App</h1>
            <p>Immerse yourself in the world of pokemon, and enjoy meeting or creating your favorite characters.</p>
        <NavLink to="/home">
        <button className={style.button}>Start</button>
        </NavLink>
            <img src={pokeBall} alt="pokeball"  />   
        </div>
    )
}

export default Landing;

