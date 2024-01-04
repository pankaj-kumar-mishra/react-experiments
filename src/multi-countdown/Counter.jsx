import React from "react";
import useCounter from "./useCounter";

const Counter = ({ count = 0 }) => {
  const time = useCounter(count);

  if (time < 0) {
    return null;
  }

  return (
    <span style={{ backgroundColor: "goldenrod", margin: 5, padding: 5 }}>
      Time: {time}
    </span>
  );
};

export default Counter;
