const { Router } = require('express');
const { Type } = require('../db.js');
const { getTypes } = require('../controllers/getTypes.js');
const router = Router();


router.get("/", async (req, res) => {
    try {
      const listaPokemones = await getTypes();
      res.status(200).json(listaPokemones);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


module.exports = router;