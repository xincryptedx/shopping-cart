import PropTypes from "prop-types";
import styles from "./FrequentQuestions.module.css";

const Question = (question, answer) => {
  // State for if the q is open
  // Only one can be open
  // If not this one selected then render as "closed"
  // If this one is selected then render as "open"

  return (
    <div className={styles.Question}>
      <p className={styles.questionText}>{question}</p>
      <p className={styles.answerText}>{answer}</p>
    </div>
  );
};

Question.PropTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Question;
