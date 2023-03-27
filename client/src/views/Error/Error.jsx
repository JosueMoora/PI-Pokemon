import sad from "../../assets/sad.png"
import style from "./Error.module.css"
const error = () => {
    return (
        <div className={style.error}>
            <img src={sad} alt="Pokemon not found" placeholder="Pokemon not found"/>
            <h1>No pokemon found, but don't worry, you can create it.  </h1>
        </div>
    )
}

export default error