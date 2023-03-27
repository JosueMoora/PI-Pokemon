import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.div}>
      <div className={style.container}>
      <h1>POKEMON APP</h1>
      <p>
      This project was created for educational purposes and aims to display and store information about the famous Pokemon characters. Among its functionalities are the possibility of filtering by type, attack, sorting from A-Z or Z-A, as well as filtering whether the pokemon is from the API or from the database. 
      </p>
      <p>
      In summary, this application allows Pokemon fans to explore the wide variety of characters that exist in the universe of the franchise, while at the same time it gives them the possibility of creating their own pokemon and storing them in the database.
      </p>
      </div>
    </div>
  );
};

export default About;
