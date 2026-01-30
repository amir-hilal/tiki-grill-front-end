import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import styles from './NotFound.module.css';

const NotFound: React.FC = () => {
  return (
    <>
      <Seo
        title="404 - Page Not Found | Tiki Grill"
        description="The page you're looking for doesn't exist. Return to Tiki Grill home page to explore our festival food menu."
        path="/404"
      />
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.message}>
          Oops! The page you're looking for seems to have wandered off to
          another festival.
        </p>
        <Link to="/" className={styles.homeLink}>
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
