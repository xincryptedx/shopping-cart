import PropTypes from "prop-types";
import styles from "./FrequentQuestions.module.css";

const Question = ({ question, index, toggleQuestion }) => {
  // State for if the q is open
  // Only one can be open
  // If not this one selected then render as "closed"
  // If this one is selected then render as "open"

  return (
    <div className={styles.Question} onClick={() => toggleQuestion(index)}>
      <p className={styles.questionText}>{question.question}</p>
      <p className={styles.answerText}>{question.answer}</p>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  toggleQuestion: PropTypes.func.isRequired,
};

export default Question;
