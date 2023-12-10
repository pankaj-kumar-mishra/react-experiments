import React, { createContext, useContext, useMemo } from "react";

const questions = [
  {
    id: 1,
    question: "Question 1",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
    answer: "Answer 1",
  },
  {
    id: 2,
    question: "Question 2",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
    answer: "Answer 2",
  },
  {
    id: 3,
    question: "Question 3",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
    answer: "Answer 3",
  },
  {
    id: 4,
    question: "Question 4",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
    answer: "Answer 4",
  },
  {
    id: 5,
    question: "Question 5",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
    answer: "Answer 5",
  },
];

const QuizContext = createContext({ questions: [] });

const QuizProvider = ({ children }) => {
  const values = useMemo(() => {
    return {
      questions,
    };
  }, []);

  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
};

const useQuizContext = () => useContext(QuizContext);

export { QuizProvider, useQuizContext };
