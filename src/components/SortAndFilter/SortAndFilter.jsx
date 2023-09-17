import useSetStockTimer from "../../hooks/useSetStockTimer";
import styles from "./SortAndFilter.module.css";
import PropTypes from "prop-types";

const SortAndFilter = ({ nextUpdate }) => {
  const stockTimer = useSetStockTimer(nextUpdate);

  return (
    <section className={styles.SortAndFilter}>
      <p className={styles.stockTimer}>New Stock: {stockTimer}</p>
      <button>Sort</button>
      <button>Filter</button>
    </section>
  );
};

SortAndFilter.propTypes = {
  nextUpdate: PropTypes.instanceOf(Date),
};

export default SortAndFilter;
