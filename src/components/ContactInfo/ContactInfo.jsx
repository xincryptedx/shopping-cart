import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <address className={styles.ContactInfo}>
      <div>
        <p>Celedon Game Corner</p>
        <p>123 Lucky Lane</p>
        <p>Celadon City, Kanto</p>
        <p>PokeZIP: 12345</p>
      </div>
      <p>info@rocketgamecorner.com</p>
      <p>Phone: 555-555-5555</p>
      <p>Hours: All Day Every Day!</p>
    </address>
  );
};

export default ContactInfo;
