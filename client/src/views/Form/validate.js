const regexText= /^[a-z A-Z]*$/;
export const validation = (data, currentInput) =>{
    const errors = {};

    // ...

    if (currentInput === 'name') {
        if(!regexText.test(data.name)) errors.name = "The name must contain only letters";
        if(data.name.length > 10 ) errors.name = "The name must not be longer than 10 characters";
        if(data.name.length <= 2 ) errors.name = "The name must be longer than 2 characters";
        if(!data.name) errors.name = "The name field is required";
    } else if (currentInput === 'hp') {
        if(data.hp <= 0 || data.hp > 1000) errors.hp = "The hp field must be between 1 and 1000."
    } else if (currentInput === 'attack') {
        if(data.attack <= 0 || data.attack > 1000) errors.attack = "The attack field must be between 1 and 1000"
    } else if (currentInput === 'defense') {
        if(data.defense <= 0 || data.defense > 1000) errors.defense = "The defense field must be between 1 and 1000"
    } else if (currentInput === 'speed') {
        if(data.speed <= 0 || data.speed > 1000) errors.speed = "The speed field must be between 1 and 1000"
    } else if (currentInput === 'height') {
        if(data.height <= 0.3 || data.height > 48) errors.height = 'The height field must be between 0.3 and 48" '
    } else if (currentInput === 'weight') {
        if(data.weight <= 0 || data.weight > 2300) errors.weight = 'The weight field must be between 1 and 2300 lb" '
    } else if (currentInput === 'typeOne') {
        if(!data.typeOne ) errors.typeOne = 'The Primary type field is required" '
    }

    return errors;
}


