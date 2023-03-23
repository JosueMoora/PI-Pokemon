import { NavLink } from "react-router-dom"
import style from "./card.module.css"
const Card = (props) => {
    return (
        <div className={style.card}>
            <NavLink to={`/detail/${props.id}`}>
                <img src={props.image} alt={props.name} />
                <h1>Name: {props.name}</h1>
            </NavLink>
            {props.Types ? props.Types.map(type => <h3>Type: {type.name}</h3>) : props.types.map(type => <h3>Type: {type}</h3>)}
        </div>
    );
}
export default Card