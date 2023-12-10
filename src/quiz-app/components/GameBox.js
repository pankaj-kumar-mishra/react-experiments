import React, { useMemo, useState } from "react";
import { useQuizContext } from "../provider/QuizProvider";
import styles from "../quizApp.module.css";

const GameBox = () => {
  const { questions } = useQuizContext();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [result, setResult] = useState({});
  const [answered, setAnswered] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = useMemo(() => {
    return questions?.[questionIndex];
  }, [questions, questionIndex]);

  const correctAnswered = useMemo(() => {
    const answers = [];
    questions.forEach((item) => {
      if (item.answer === result[item.id]) {
        answers.push(item.answer);
      }
    });
    return answers;
  }, [questions, result]);

  const handlePrevQuestion = () => {
    setAnswered("");
    setQuestionIndex((prev) => prev - 1);
  };
  const handleNextQuestion = () => {
    if (!answered) return;
    setAnswered("");
    setQuestionIndex((prev) => prev + 1);
    setResult((prev) => ({ ...prev, [currentQuestion.id]: answered }));
  };

  const handleOption = (option) => {
    setAnswered(option);
  };

  const randomPassword = (length) => {
    let password = "";
    const sentence = "ABCDabcd1234!@#$";
    for (let i = 0; i < length; i++) {
      const randomIdx = Math.floor(Math.random() * sentence.length);
      password += sentence[randomIdx];
    }

    return password;
  };

  const copyAnswers = () => {
    const newTextArea = document.createElement("textarea");
    newTextArea.innerText = JSON.stringify(correctAnswered + randomPassword(6));
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand("copy");
    newTextArea.remove();
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setAnswered("");
    setQuestionIndex(0);
    copyAnswers();
  };

  console.log(result);

  return (
    <div className={styles.gameBox}>
      {submitted ? (
        <h4>
          Result: {correctAnswered.length}/{questions.length}
        </h4>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
      {currentQuestion && (
        <>
          <h3>Question: {questionIndex + 1}</h3>
          <h2>{currentQuestion.question}</h2>
          {currentQuestion.options.map((option) => (
            <button
              style={{
                backgroundColor: option === answered ? "goldenrod" : "white",
              }}
              className={styles.buttonOption}
              key={option}
              onClick={() => handleOption(option)}
            >
              <p>{option}</p>
            </button>
          ))}
          <br />
        </>
      )}

      <div className={styles.buttonCover}>
        {questionIndex > 0 && (
          <button onClick={handlePrevQuestion}>Previous Question</button>
        )}
        {questionIndex < questions.length && (
          <button onClick={handleNextQuestion}>Next Question</button>
        )}
      </div>
    </div>
  );
};

export default GameBox;
