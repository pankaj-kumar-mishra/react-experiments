import React, { useState } from "react";
import styles from "./accordion.module.css";

const data = [
  { id: 1, question: "Question 1", answer: "Answer 1" },
  { id: 2, question: "Question 2", answer: "Answer 2" },
  { id: 3, question: "Question 3", answer: "Answer 3" },
  { id: 4, question: "Question 4", answer: "Answer 4" },
  { id: 5, question: "Question 5", answer: "Answer 5" },
];

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [isMultiSelection, setIsMultiSelection] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const handleClick = (id) => {
    if (isMultiSelection) {
      const tempMultiSelected = [...multiSelected];
      const idx = tempMultiSelected.indexOf(id);
      if (idx === -1) {
        tempMultiSelected.push(id);
      } else {
        tempMultiSelected.splice(idx, 1);
      }
      setMultiSelected(tempMultiSelected);
    } else {
      setSelected(selected === id ? null : id);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Accordion</h3>
      <button onClick={() => setIsMultiSelection((prev) => !prev)}>
        Enable {isMultiSelection ? "Single" : "Multi"} Selection
      </button>
      <div className={styles.content}>
        {data.map((item) => {
          const isSelected = isMultiSelection
            ? multiSelected.includes(item.id)
            : selected === item.id;

          return (
            <div key={item.id} className={styles.item}>
              <button
                onClick={() => handleClick(item.id)}
                className={styles.title}
              >
                <h4>{item.question}</h4>
                <h3>{isSelected ? "-" : "+"}</h3>
              </button>
              {isSelected && (
                <div className={styles.description}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
