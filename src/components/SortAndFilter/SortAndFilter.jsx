import useSetStockTimer from "../../hooks/useSetStockTimer";
import styles from "./SortAndFilter.module.css";
import PropTypes from "prop-types";

const SortAndFilter = ({ nextUpdate, region }) => {
  const stockTimer = useSetStockTimer(nextUpdate);

  const regionTranslations = {
    "original-johto": "Johto",
    "original-sinnoh": "Sinnoh",
    "original-unova": "Unova",
    "updated-alola": "Alola",
  };

  const prepareRegionString = (region) => {
    const translatedRegion = regionTranslations[region];
    if (translatedRegion) {
      return translatedRegion;
    }

    // If no translation is found, capitalize the first letter.
    return region[0].toUpperCase() + region.slice(1);
  };

  return (
    <section className={styles.SortAndFilter}>
      <p className={styles.stockTimer}>New Stock: {stockTimer}</p>
      <p className={styles.region}>Region: {prepareRegionString(region)}</p>
    </section>
  );
};

SortAndFilter.propTypes = {
  nextUpdate: PropTypes.instanceOf(Date),
  region: PropTypes.string,
};

export default SortAndFilter;
