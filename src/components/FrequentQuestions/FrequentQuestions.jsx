import { useState } from "react";
import styles from "./FrequentQuestions.module.css";
import questionData from "./questions";
import Question from "./Question";

const FrequentQuestions = () => {
  const [questions, setQuestions] = useState(questionData);

  return (
    <div className={styles.FAQ}>
      {questions.map((entry, index) => {
        return (
          <Question
            questionText={entry.question}
            answerText={entry.answer}
            open={entry.open}
            questions={questions}
            setQuestions={setQuestions}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default FrequentQuestions;
