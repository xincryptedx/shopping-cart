import PropTypes from "prop-types";
import styles from "./FrequentQuestions.module.css";

const Question = ({ questionText, answerText, open, index }) => {
  // State for if the q is open
  // Only one can be open
  // If not this one selected then render as "closed"
  // If this one is selected then render as "open"

  return (
    <div className={styles.Question}>
      <p className={styles.questionText}>{questionText}</p>
      <p className={styles.answerText}>{answerText}</p>
    </div>
  );
};

Question.propTypes = {
  questionText: PropTypes.string.isRequired,
  answerText: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  toggleQuestion: PropTypes.func.isRequired,
};

export default Question;
