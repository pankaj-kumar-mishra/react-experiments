import React, { useRef } from "react";
import { useState } from "react";
import styles from "./otpVerification.module.css";

const OtpInput = () => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(4).fill(""));

  const handleOnChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // shift focus to next input box
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    console.log("🚀 ~ file: OtpVerification.jsx:15 ~ otp:", otp.join(""));
  };

  return (
    <div>
      <h4>Enter your OTP</h4>
      <div className={styles.otpContainer}>
        {otp.map((item, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={item}
            onChange={(e) => handleOnChange(index, e.target.value)}
            // ref={inputRefs.current[index]}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

const OtpVerification = () => {
  return (
    <div>
      <h2>OtpVerification</h2>
      <OtpInput />
    </div>
  );
};

export default OtpVerification;
