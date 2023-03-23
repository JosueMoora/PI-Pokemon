const regexText= /^[a-z A-Z]*$/;
// const regexTypes = /^[a-zA-Z]*$/;
export const validation = (data) => {
    const errors = {}
    if(!regexText.test(data.name)) errors.name = "El nombre solo debe contener letras";
    if(data.name.length > 10 ) errors.name = "El nombre no debe tener mas de 10 caracteres";
    if(data.name.length <= 2 ) errors.name = "El nombre debe tener mas de 2 caracteres";
    if(data.name.length === 0 ) errors.name = "El campo name es obligatorio";
    if(data.hp <= 0 || data.hp > 1000) errors.hp = "El campo hp debe ser entre 1 y 1000"

    return errors
}

// export const validationAttack = (data) => {
//     const errors = {}
//         if(data.hp <= 0 || data.hp > 1000) errors.hp = "El campo hp debe ser entre 1 y 1000"
    
// }

