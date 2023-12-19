import React from "react";
import styles from "./multiStepper.module.css";
import Stepper from "./Stepper";

const Buttons = ({ onPrevClick, onNextClick, prevDisabled, nextDisabled }) => {
  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.buttons}>
        <button disabled={prevDisabled} onClick={onPrevClick}>
          Previous
        </button>
        <button disabled={nextDisabled} onClick={onNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

const StepOne = ({ onPrevClick, onNextClick, test, currentStep }) => {
  return (
    <div>
      <h1>Step One: {test}</h1>
      <Buttons
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        prevDisabled={currentStep === 0}
      />
    </div>
  );
};
const StepTwo = ({ onPrevClick, onNextClick, test, currentStep }) => {
  return (
    <div>
      <h1>Step Two: {test}</h1>
      <Buttons
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        prevDisabled={currentStep === 0}
      />
    </div>
  );
};
const StepThree = ({ onPrevClick, onNextClick, test, currentStep }) => {
  return (
    <div>
      <h1>Step Three: {test}</h1>
      <Buttons
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        prevDisabled={currentStep === 0}
      />
    </div>
  );
};
const StepFour = ({ onPrevClick, onNextClick, test, currentStep }) => {
  return (
    <div>
      <h1>Step Four: {test}</h1>
      <Buttons
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        prevDisabled={currentStep === 0}
      />
    </div>
  );
};

const MultiStepper = () => {
  const list = [
    <StepOne test="StepOne" />,
    <StepTwo test="StepTwo" />,
    <StepThree test="StepThree" />,
    <StepFour test="StepFour" />,
  ];
  return (
    <div>
      <h2>Multi Stepper</h2>
      <Stepper list={list} />
    </div>
  );
};

export default MultiStepper;
