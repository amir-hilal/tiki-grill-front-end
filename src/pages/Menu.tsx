import Seo from '../components/Seo';
import MenuCard from '../components/MenuCard';
import { categories, getItemsByCategory } from '../data/menu';
import styles from './Menu.module.css';

const Menu: React.FC = () => {
  return (
    <>
      <Seo
        title="Menu - Tiki Grill"
        description="Explore our full menu of festival favorites including Gyros, Jumbo Turkey Legs, Blooming Onions, Garbage Fries, Funnel Cakes, and more. Family size portions available!"
        path="/menu"
      />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Our Menu</h1>
          <p className={styles.subtitle}>
            Big bold flavors, fresh made for you
          </p>
        </header>

        {categories.map((category) => {
          const items = getItemsByCategory(category);
          return (
            <section key={category} className={styles.category}>
              <h2 className={styles.categoryTitle}>{category}</h2>
              <div className={styles.menuGrid}>
                {items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          );
        })}

        <div className={styles.specialNote}>
          <p>
            ***Lemonade/Sweet Tea come in a 42 OZ souvenir cup with free
            refills!***
          </p>
        </div>
      </div>
    </>
  );
};

export default Menu;
