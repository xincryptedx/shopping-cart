import useSetStockTimer from "../../hooks/useSetStockTimer";
import styles from "./SortAndFilter.module.css";
import PropTypes from "prop-types";

const SortAndFilter = ({ nextUpdate, region }) => {
  const stockTimer = useSetStockTimer(nextUpdate);

  return (
    <section className={styles.SortAndFilter}>
      <p className={styles.stockTimer}>New Stock: {stockTimer}</p>
      <p className={styles.region}>
        Region: {region[0].toUpperCase() + region.slice(1)}
      </p>
    </section>
  );
};

SortAndFilter.propTypes = {
  nextUpdate: PropTypes.instanceOf(Date),
  region: PropTypes.string,
};

export default SortAndFilter;
