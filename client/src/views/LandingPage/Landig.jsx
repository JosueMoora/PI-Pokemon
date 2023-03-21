// import style from "./Landing.module.css"
import { NavLink } from "react-router-dom";
const Landing = () => {
    return (
        <>
        <h1>This is my landing page</h1>
        <NavLink to="/home">
            <button>
                Inicio
            </button>
        </NavLink>
        </>
    )
}

export default Landing;