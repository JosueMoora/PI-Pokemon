const { Type } = require('../db.js');


const getTypes = async () => {
  const resultados = await Type.findAll();
  return resultados;
  }
module.exports = {
    getTypes
};