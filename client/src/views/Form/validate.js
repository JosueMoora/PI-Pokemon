const regexText= /^[a-z A-Z]*$/;
export const validation = (data) =>{
    const errors = {};
    
        if(!regexText.test(data.name)) errors.name = "The name must contain only letters";
        if(data.name.length > 10 ) errors.name = "The name must not be longer than 10 characters";
        if(data.name.length <= 2 ) errors.name = "The name must be longer than 2 characters";
        if(!data.name) errors.name = "The name field is required";
  
        if(data.hp <= 0 || data.hp > 1000) errors.hp = "The hp field must be between 1 and 1000."
    
        if(data.attack <= 0 || data.attack > 1000) errors.attack = "The attack field must be between 1 and 1000"
    
        if(data.defense <= 0 || data.defense > 1000) errors.defense = "The defense field must be between 1 and 1000"
  
        if(!data.typeOne ) errors.typeOne = 'The Primary type field is required" '
    

    return errors;
}


