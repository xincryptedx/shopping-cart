import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <address className={styles.ContactInfo}>
      <h1>Contact Us!</h1>
      <p>Phone: 555-555-5555</p>
      <p>info@rocketgamecorner.com</p>
      <p>
        Hours: <span>All Day Every Day!</span>
      </p>
      <div>
        <p>Rocket Game Corner</p>
        <p>123 Lucky Lane</p>
        <p>Celadon City, Kanto</p>
        <p>PokeZIP: 12345</p>
      </div>
    </address>
  );
};

export default ContactInfo;
