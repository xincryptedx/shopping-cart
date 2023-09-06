import styles from "./root.module.css";

const Root = () => {
  return (
    <div className={styles.rootRoute}>
      <section className={styles.callToAction}>
        <p>
          Rocket Game Corner is a convenient option for busy trainers who wish
          to expand their Pokemon collection.
        </p>
        <p>Shop Now!</p>
        <p>
          Our unique approach allows us to provide Pokemon at competitive rates
          from sources aligned with our values.
        </p>
      </section>
    </div>
  );
};

export default Root;
