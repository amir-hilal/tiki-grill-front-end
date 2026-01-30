import Seo from '../components/Seo';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <>
      <Seo
        title="About Us - Tiki Grill"
        description="Learn about Tiki Grill's story, our passion for festival food, and our commitment to serving big bold flavors at festivals, fairs, and community events."
        path="/about"
      />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>About Tiki Grill</h1>
        </header>

        <div className={styles.content}>
          <p>
            Welcome to Tiki Grill, where festival food meets perfection! We're
            passionate about bringing big, bold flavors to festivals, fairs, and
            community events across North Carolina and beyond.
          </p>

          <h2>Our Story</h2>
          <p>
            Tiki Grill was born from a love of great food and the vibrant
            atmosphere of festivals. We believe that festival food should be
            more than just a quick bite—it should be an experience. That's why
            we focus on fresh-made items, generous portions, and flavors that
            keep people coming back for more.
          </p>

          <div className={styles.highlights}>
            <ul>
              <li>Fresh ingredients, made to order</li>
              <li>Family-size portions for sharing</li>
              <li>Bold, authentic flavors</li>
              <li>Friendly service with a smile</li>
            </ul>
          </div>

          <h2>What We Serve</h2>
          <p>
            From our famous Jumbo Turkey Legs to our crispy Blooming Onions,
            every item on our menu is crafted with care. We specialize in
            festival favorites that satisfy big appetites—think loaded Garbage
            Fries, authentic Gyros, tender Chicken Platters, and sweet Funnel
            Cakes that melt in your mouth.
          </p>

          <h2>Where to Find Us</h2>
          <p>
            We travel to festivals, fairs, and special events throughout the
            region. Our vibrant stand is hard to miss, and the aroma of our
            fresh-cooked food draws crowds from across the venue. Whether you're
            at a local fair or a large festival, look for the Tiki Grill—we'll
            be ready to serve you!
          </p>

          <p>
            <strong>Let's make your next event unforgettable.</strong> Contact
            us to book Tiki Grill for your festival or community gathering.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
