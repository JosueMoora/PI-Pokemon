const axios = require('axios')
const {Type} = require('../db')

const getTypes = async () => {
    try {
        await axios.get('https://pokeapi.co/api/v2/type')
        .then(response => response.data.results.map(async (type) => {
            Type.findOrCreate({
                where: {
                    name: type.name
                },
                order: ['name'],
            })
        }));
    } catch (error) {
        throw new Error (error);
    }
};

module.exports = {
    getTypes
};