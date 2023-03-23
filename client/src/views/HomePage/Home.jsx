import Cards from "../../components/CardsContainer/cards"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "../../redux/actions"

const Home = ()=> {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])
    return (
        <div>
            <Cards/>
        </div>
        
    )
}

export default Home