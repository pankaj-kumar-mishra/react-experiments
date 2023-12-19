import React, { useEffect, useState, cloneElement } from "react";
import styles from "./multiStepper.module.css";

const Stepper = ({ list = [] }) => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const tempSteps = [];
    for (let index = 0; index < list.length; index++) {
      tempSteps.push(
        <div
          className={`${styles.step} ${
            currentStep >= index && styles.stepActive
          }`}
          key={index}
          onClick={() => setCurrentStep(index)}
        >
          {index + 1}
        </div>
      );
    }
    setSteps(tempSteps);
  }, [currentStep, list.length]);

  const onPrevClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onNextClick = () => {
    if (currentStep < list.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const progressLineWidth = (100 / (list.length - 1)) * currentStep;

  return (
    <section className={styles.stepper}>
      <div className={styles.stepsContainer}>
        <div className={styles.steps}>{steps}</div>
        <div
          className={`${styles.progressLine} ${styles.progressLinePlaceholder}`}
        />
        <div
          className={styles.progressLine}
          style={{ width: `${progressLineWidth}%` }}
        />
      </div>
      <div className={styles.content}>
        {cloneElement(list[currentStep], {
          onPrevClick,
          onNextClick,
          currentStep,
        })}
      </div>
    </section>
  );
};

export default Stepper;
