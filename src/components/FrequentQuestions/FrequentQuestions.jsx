import { useState } from "react";
import styles from "./FrequentQuestions.module.css";
import questionData from "./questions";
import Question from "./Question";

const FrequentQuestions = () => {
  const [questions, setQuestions] = useState(questionData);

  const toggleQuestion = (index) => {
    setQuestions(
      questions.map((entry, i) => {
        if (i === index) {
          entry.open = !entry.open;
        } else {
          entry.open = false;
        }

        return entry;
      })
    );
  };

  return (
    <div className={styles.FAQ}>
      {questions.map((entry, index) => {
        return (
          <Question
            question={entry}
            toggleQuestion={toggleQuestion}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default FrequentQuestions;
