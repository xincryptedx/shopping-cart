import CallToAction from "../../components/CallToAction/CallToAction";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import styles from "./root.module.css";

const Root = () => {
  return (
    <div className={styles.rootRoute}>
      <CallToAction />
      <ContactInfo />
    </div>
  );
};

export default Root;
