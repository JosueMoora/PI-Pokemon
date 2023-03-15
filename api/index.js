//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Type} = require("./src/db")
const fetch  = require("node-fetch" )

const preLoadTypes = async () => {
  const url = "https://pokeapi.co/api/v2/type";

  const types = await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw Error(error.message);
    });

  types.results.forEach((tipo) => {
    Type.findOrCreate({
      where: { name: tipo.name},
    });
  });
};
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async() => {
    try {
      await preLoadTypes();
    } catch (error) {
      console.log(error);
    }
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
