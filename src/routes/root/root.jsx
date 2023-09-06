import styles from "./root.module.css";

const Root = () => {
  return (
    <div className={styles.rootRoute}>
      <section className={styles.callToAction}>
        <div className={styles.ctaBackgroundImage} aria-hidden />
        <p className={styles.cta1}>
          Rocket Game Corner is a convenient option for busy trainers who wish
          to expand their Pokemon collection.
        </p>
        <p className={styles.cta2}>Shop Now!</p>
        <p className={styles.cta3}>
          Our unique approach allows us to provide Pokemon at competitive rates
          from sources aligned with our values.
        </p>
      </section>
    </div>
  );
};

export default Root;
