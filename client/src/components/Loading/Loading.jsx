import img from "../../assets/loading.gif"
import style from "./Loading.module.css"

const Loading = ()=> {
    return (
        <div>
            <img src={img} alt="Loading" />
            <h1>Loading...</h1>
        </div>

    )
    
}
export default Loading