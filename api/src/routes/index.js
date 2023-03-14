const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemons = require('./Pokemons.js')
const types = requiere('./Types.js')


// Configurar los routers
router.use('/pokemons', pokemons)
router.use('/types', types)


module.exports = router;
