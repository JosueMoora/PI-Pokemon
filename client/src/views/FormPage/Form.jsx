import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createPokemon } from "../../redux/actions"
import { validation } from "./validate"
const Form = ()=> {
    const types = useSelector(state => state.types)
    const dispatch = useDispatch()
    //estado nuevo pokemon
    const [newPokemon, setNewPokemon] = useState({
        name: "",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        image:"",
        typeOne:"",
        typeTwo:"",
    })
    //estado de errores
    const [errors, setErrors] = useState({
        name: "",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        image:"",
        typeOne:"",
        typeTwo:"",
    })
    //controla estado de los inputs
    const handleInputChange = (event) =>{
        const property = event.target.name
        const value = event.target.value
        setErrors(validation({...newPokemon, [property]: value}))
        setNewPokemon({...newPokemon, [property]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createPokemon(newPokemon))
        alert('🎉 Pokemon creado satisfactoriamente! 🥳');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" name="name" value={newPokemon.name} onChange={handleInputChange} />
            </div>
            <div>
                <label>Hp: </label>
                <input type="number" name="hp" value={newPokemon.hp} onChange={handleInputChange} />
                {/* <span>{newPokemon.hp}</span> */}
                
            </div>
            <div>
                <label>Attack: </label>
                <input type="range" name="attack" value={newPokemon.attack} onChange={handleInputChange} />
                <span>{newPokemon.attack}</span>
            </div>
            <div>
                <label>Defense: </label>
                <input type="range" name="defense" value={newPokemon.defense} onChange={handleInputChange} />
                <span>{newPokemon.defense}</span>
            </div>
            <div>
                <label>Speed: </label>
                <input type="range" name="speed" value={newPokemon.speed} onChange={handleInputChange} />
                <span>{newPokemon.speed}</span>
            </div>
            <div>
                <label>Height: </label>
                <input type="range" name="height" value={newPokemon.height} onChange={handleInputChange} />
                <span>{newPokemon.height} cm</span>
            </div>  
            <div>
                <label>Weight: </label>
                <input type="range" name="weight" value={newPokemon.weight} onChange={handleInputChange} />
                <span>{newPokemon.weight} kg</span>
            </div>
            <div>
                <label>Image: </label>
                <input type="text" name="image" value={newPokemon.image} onChange={handleInputChange} />
            </div>
            <div>
                <label>Primary Type *</label>
                <select name="typeOne" value={newPokemon.typeOne} onChange={handleInputChange}>
                    {types?.map((type, i)=>(
                        <option key={i} value={type.name} name = {type.name} placeholder="">
                            {type.name}
                        </option>
                    ))}
                    <option defaultValue='default'>
                        {null}
                    </option>
                </select> <br/>
                <label>Secundary Type </label>
                <select name="typeTwo" value={newPokemon.typeTwo} onChange={e => handleInputChange(e)}>
                    {types?.map((type, i)=>(
                        <option key={i} value={type.name} name = {type.name} placeholder="">
                            {type.name}
                        </option>
                    ))}
                    <option defaultValue='default'>
                        {null}
                    </option>
                </select>
            </div>
            <button>Create Pokemon</button>
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            {errors.hp && <p style={{ color: "red" }}>{errors.hp}</p>}
        </form>
    )
}

export default Form