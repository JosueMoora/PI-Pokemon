import img from "../../assets/loading.gif"
import style from "./Loading.module.css"

const Loading = ()=> {
    return (
        <div  className={style.loading}>
            <img src={img} alt="Loading" />
        </div>

    )
    
}
export default Loading