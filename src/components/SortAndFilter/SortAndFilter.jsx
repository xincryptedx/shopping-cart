import styles from "./SortAndFilter.module.css";

const SortAndFilter = () => {
  const stockTimer = "48:36";

  return (
    <section className={styles.SortAndFilter}>
      <p className={styles.stockTimer}>New Stock: {stockTimer}</p>
      <button>Sort</button>
      <button>Filter</button>
    </section>
  );
};

export default SortAndFilter;
