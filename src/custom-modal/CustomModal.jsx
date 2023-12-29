import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./customModal.module.css";
import useOutsideClick from "./useOutsideClick";
import useWindowResize from "./useWindowResize";

const CustomModal = () => {
  const modalContentRef = useRef(null);
  const [show, setShow] = useState(false);
  //   to handle outside click of a section will trigger a function
  useOutsideClick(modalContentRef, () => setShow(false));
  //   to handle window resize event
  const { width, height } = useWindowResize();

  return (
    <div className={styles.container}>
      <h3>Custom Modal</h3>
      <button onClick={() => setShow((prev) => !prev)}>Show Modal</button>
      <div className={styles.content}>
        <h4>Width: {width}</h4>
        <h4>Height: {height}</h4>
        {show &&
          createPortal(
            <div className={styles.modal}>
              <button onClick={() => setShow(false)}>&times;</button>
              <div ref={modalContentRef} className={styles.modalContent}>
                <h2>HEADER</h2>
                <h4>BODY</h4>
                <h6>FOOTER</h6>
              </div>
            </div>,
            document.body
          )}
      </div>
    </div>
  );
};

export default CustomModal;
