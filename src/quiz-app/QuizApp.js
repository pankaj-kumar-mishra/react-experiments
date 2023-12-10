import React from "react";
import { GameForm, GameBox } from "./components";
import { QuizProvider } from "./provider/QuizProvider";
import styles from "./quizApp.module.css";

const QuizApp = () => {
  return (
    <QuizProvider>
      <div className={styles.app}>
        <h2>Quiz App</h2>
        <GameForm />
        <GameBox />
      </div>
    </QuizProvider>
  );
};

export default QuizApp;
