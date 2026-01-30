import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { businessInfo, formatPhone } from '../data/business';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>{businessInfo.name}</h3>
          <p>Festival Favorites, Served Hot</p>
          <p>Serving at festivals, fairs, and community events</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact</h3>
          <p>
            <a href={`tel:${businessInfo.phone}`}>
              {formatPhone(businessInfo.phone)}
            </a>
          </p>
          <p>
            <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
          </p>
          <p>
            {businessInfo.address.street}
            <br />
            {businessInfo.address.city}, {businessInfo.address.state}{' '}
            {businessInfo.address.zip}
          </p>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Tiki Grill. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
