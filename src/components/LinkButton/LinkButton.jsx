import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./LinkButton.module.css";

const LinkButton = ({ text = "button", to, className }) => {
  return (
    <Link className={`${className} ${styles.LinkButton}`} to={to}>
      {text}
    </Link>
  );
};

LinkButton.propTypes = {
  text: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func])
    .isRequired,
  className: PropTypes.string,
};

export default LinkButton;
