import CallToAction from "../../components/CallToAction/CallToAction";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import FrequentQuestions from "../../components/FrequentQuestions/FrequentQuestions";
import styles from "./root.module.css";

const Root = () => {
  return (
    <div className={styles.rootRoute}>
      <CallToAction />
      <ContactInfo />
      <FrequentQuestions />
    </div>
  );
};

export default Root;
