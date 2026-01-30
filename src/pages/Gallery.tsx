import Seo from '../components/Seo';
import GalleryGrid from '../components/GalleryGrid';
import styles from './Gallery.module.css';

const Gallery: React.FC = () => {
  const images = [
    { src: '/food-display.png', alt: 'Tiki Grill food display' },
    { src: '/front-display-2.png', alt: 'Tiki Grill front display' },
    { src: '/front-display.png', alt: 'Tiki Grill stand front view' },
  ];

  return (
    <>
      <Seo
        title="Gallery - Tiki Grill"
        description="View photos of our festival stand, food displays, and delicious offerings. See what makes Tiki Grill a favorite at festivals and events."
        path="/gallery"
      />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Gallery</h1>
          <p className={styles.subtitle}>
            See our stand and mouth-watering dishes
          </p>
        </header>

        <GalleryGrid images={images} />
      </div>
    </>
  );
};

export default Gallery;
