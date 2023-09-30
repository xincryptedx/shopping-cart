import PropTypes from "prop-types";
import styles from "./FrequentQuestions.module.css";

const Question = ({
  questionText,
  answerText,
  open,
  questions,
  setQuestions,
}) => {
  // State for if the q is open
  // Only one can be open
  // If not this one selected then render as "closed"
  // If this one is selected then render as "open"

  const toggleQuestion = (index) => {
    setQuestions(
      questions.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

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
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  setQuestions: PropTypes.func.isRequired,
};

export default Question;
