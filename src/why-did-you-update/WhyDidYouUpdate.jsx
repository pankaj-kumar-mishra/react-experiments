import { useState } from "react";
import useWhyDidYouUpdate from "./useWhyDidYouUpdate";

const TestRenderExample = (props) => {
  useWhyDidYouUpdate("TestRenderExample", props);
  return (
    <div>
      <h2>Count is {props.count}</h2>
    </div>
  );
};

const TestRenderExampleTwo = (props) => {
  useWhyDidYouUpdate("TestRenderExample Two", props);
  return (
    <div>
      <h2>Count is {props.count}</h2>
    </div>
  );
};

const TestRenderExampleThree = (props) => {
  useWhyDidYouUpdate("TestRenderExample Three", props);
  return (
    <div>
      <h2>Data is {JSON.stringify(props.data)}</h2>
    </div>
  );
};

const WhyDidYouUpdate = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({ a: "a", b: "b" });

  return (
    <div>
      <h1>WhyDidYouUpdate</h1>
      <h3>Parent Count {count}</h3>
      <TestRenderExample count={count} />
      <TestRenderExampleTwo />
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      <TestRenderExampleThree data={data} />
      <button
        style={{ display: "block" }}
        onClick={() => setData({ b: "b", a: "a" })}
      >
        Update Same Properties
      </button>
      <button
        style={{ display: "block" }}
        onClick={() => setData({ b: "b", c: "c", a: "a" })}
      >
        Update New Properties
      </button>
    </div>
  );
};

export default WhyDidYouUpdate;
