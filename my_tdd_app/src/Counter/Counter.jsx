import React, { useState } from "react";
import counterStyle from "./Counter.module.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);
  console.log(counterStyle["green"])

  const addToCounter = () => {
    setCounter(counter + input);
  };

  const subFromCounter = () => {
    setCounter(counter - input);
  };
  return (
    <div>
      <h1 data-testid="header">My Counter</h1>
      <h2 data-testid="counter"
      className={`${counter >= 100? counterStyle.green:""}${counter <=-100 ? counterStyle.red:""}` }
      >
      {counter}
      </h2>
      <button onClick={subFromCounter} data-testid="subtractBtn">
        -
      </button>
      <input
        className={counterStyle.center}
        data-testid="input"
        type="number"
        value={input}
        onChange={(e) => {
          setInput(parseInt(e.target.value));
        }}
      />
      <button onClick={addToCounter} data-testid="addBtn">
        +
      </button>
    </div>
  );
}
