import React, { useState } from "react";
import styles from "../quizApp.module.css";

const GameForm = () => {
  const [noOfQuestions, setNoOfQuestions] = useState(2);
  const [category, setCategory] = useState("sports");
  const [difficulty, setDifficulty] = useState("easy");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(noOfQuestions, category, difficulty);
  };

  return (
    <section>
      <form>
        <h3>Setup Quiz</h3>
        <div className={styles.formDiv}>
          <label htmlFor="noOfQuestions">Number of questions</label>
          <input
            type="number"
            name="noOfQuestions"
            id="noOfQuestions"
            min={2}
            max={10}
            value={noOfQuestions}
            onChange={(e) => setNoOfQuestions(e.target.value)}
          />
        </div>
        <div className={styles.formDiv}>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="sports">Sports</option>
            <option value="history">History</option>
            <option value="politics">Politics</option>
          </select>
        </div>
        <div className={styles.formDiv}>
          <label htmlFor="difficulty">Difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </section>
  );
};

export default GameForm;
