import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <address className={styles.ContactInfo}>
      <h1>Rocket Game Corner</h1>
      <div>
        <p>123 Lucky Lane</p>
        <p>Celadon City, Kanto</p>
        <p>PokeZIP: 12345</p>
      </div>
      <p>Phone: 555-555-5555</p>
      <p>info@rocketgamecorner.com</p>
      <p>
        Hours: <span>All Day Every Day!</span>
      </p>
    </address>
  );
};

export default ContactInfo;
