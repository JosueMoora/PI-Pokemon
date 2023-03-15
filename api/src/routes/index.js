const { Router } = require('express');
const pokemons = require('./Pokemons.js')
const types = require('./Types.js')
const router = Router();


// Configurar los routers
router.use('/pokemons', pokemons)
router.use('/types', types)


module.exports = router;
