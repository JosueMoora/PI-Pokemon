import {NavLink} from 'react-router-dom'
import styles from './card.module.css';

function Card({ id, name, image, types, attack, weight, height }) {

  const typeColors = {
      normal: styles.cardNormal,
      fighting: styles.cardFighting,
      flying: styles.cardFlying,
      poison: styles.cardPoison,
      ground: styles.cardGround,
      rock: styles.cardRock,
      bug: styles.cardBug,
      ghost: styles.cardGhost,
      fire: styles.cardFire,
      steel: styles.cardSteel,
      grass: styles.cardGrass,
      electric: styles.cardElectric,
      water: styles.cardWater,
      psychic: styles.cardPsychic,
      dragon: styles.cardDragon,
      ice: styles.cardIce,
      dark: styles.cardDark,
      fairy: styles.cardFairy
  };

  const cardColor = typeColors[types[0]] || styles.cardDefault;

  return (
    <NavLink to={`/detail/${id}`}>
    <div className={`${styles.card} ${cardColor}`}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={name} />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{name}</p>
        
        {types[1] ? <p className={styles.type}>{types[0]} - {types[1]}</p> : <p className={styles.type}>{types[0]}</p> }
        <div className={styles.stats}>
          <div className={styles.stat}>
            <p className={styles.statLabel}>Weight</p>
            <p className={styles.statValue}>{weight}</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statLabel}>Attack</p>
            <p className={styles.statValue}>{attack}</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statLabel}>Weight</p>
            <p className={styles.statValue}>{height}</p>

          </div>
        </div>
      </div>
    </div>
    </NavLink>
  );
}

export default Card;
