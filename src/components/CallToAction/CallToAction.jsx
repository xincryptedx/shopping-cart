import { Link } from "react-router-dom";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <Link to="products" className={styles.CallToAction}>
      <div className={styles.ctaBackgroundImage} aria-hidden />
      <p>
        Rocket Game Corner is a convenient option for busy trainers who wish to
        expand their Pokemon collection.
      </p>
      <p className={styles.cta2}>Shop Now!</p>
      <p>
        Our unique approach allows us to provide Pokemon at competitive rates
        from sources aligned with our values.
      </p>
    </Link>
  );
};

export default CallToAction;
