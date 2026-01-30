import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import MenuCard from '../components/MenuCard';
import { getFeaturedItems } from '../data/menu';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const featuredItems = getFeaturedItems();

  return (
    <>
      <Seo
        title="Tiki Grill - Festival Favorites, Served Hot"
        description="Festival food perfection! Enjoy Gyros, Jumbo Turkey Legs, Blooming Onions, Garbage Fries, Funnel Cakes, and more at festivals and events across North Carolina."
        path="/"
      />
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Tiki Grill</h1>
        <p className={styles.heroTagline}>Festival Favorites, Served Hot</p>
        <div className={styles.ctaButtons}>
          <Link to="/menu" className={styles.ctaButton}>
            View Menu
          </Link>
          <Link to="/contact" className={styles.ctaButton}>
            Contact Us
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Featured Items</h2>
          <div className={styles.featuredGrid}>
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <div className={styles.souvenirHighlight}>
          <h3>🥤 Souvenir Cup Special</h3>
          <p>42 OZ souvenir cup with free refills on Lemonade & Sweet Tea!</p>
        </div>
      </div>
    </>
  );
};

export default Home;
