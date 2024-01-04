import React, { useRef, useState } from "react";
import Counter from "./Counter";

const MultiCountdown = () => {
  const inputRef = useRef(null);
  const [timers, setTimers] = useState([]);

  const handleStartCountdown = () => {
    setTimers((prev) => [
      ...prev,
      { count: inputRef.current.value, id: Date.now() },
    ]);
    inputRef.current.value = "";
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Multi Countdown</h3>
      <div style={{ padding: "20px 0" }}>
        <label htmlFor="count">Enter number only </label>
        <input ref={inputRef} type="number" name="count" id="count" />
        <button onClick={handleStartCountdown}>Start</button>
      </div>

      {timers.map((item) => (
        <Counter key={item.id} count={item.count} />
      ))}
    </div>
  );
};

export default MultiCountdown;
