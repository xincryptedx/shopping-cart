import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.ContactInfo}>
      <p>Address:</p>
      <p>Email:</p>
      <p>Phone:</p>
      <p>Hours:</p>
    </div>
  );
};

export default ContactInfo;
