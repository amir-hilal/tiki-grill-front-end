import { MenuItem } from '../data/menu';
import styles from './MenuCard.module.css';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className={styles.image}
            loading="lazy"
            width="400"
            height="200"
          />
        ) : (
          <div className={styles.placeholder} aria-label="No image available">
            🍴
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{item.name}</h3>
          <span className={styles.price}>${item.price.toFixed(2)}</span>
        </div>
        <p className={styles.description}>{item.description}</p>
        {(item.familySize || item.choiceOfMeat) && (
          <div className={styles.badges}>
            {item.familySize && (
              <span className={`${styles.badge} ${styles.familySize}`}>
                Family Size
              </span>
            )}
            {item.choiceOfMeat && (
              <span className={`${styles.badge} ${styles.choiceOfMeat}`}>
                Choice of Meat
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuCard;
