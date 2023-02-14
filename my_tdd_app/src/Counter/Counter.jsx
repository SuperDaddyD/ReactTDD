import React,{useState} from "react";

export default function Counter() {
    const [counter,setCounter] = useState(0)
  return (
    <div>
      <h1 data-testid="header">My Counter</h1>
      <h2 data-testid="counter">{counter}</h2>
      <button data-testid="subtractBtn">-</button>
      <input data-testid="input" type="text" value="1" />
      <button data-testid="addBtn">+</button>
    </div>
  );
}
