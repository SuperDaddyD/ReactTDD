import React from "react";
import Counter from "../Counter";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
  const {getByTestId} = render(<Counter />);

  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});


test("counter should initially start with text of 0",()=>{
    const {getByTestId} = render(<Counter />)
    const counterEl = getByTestId("counter")
    expect(counterEl.textContent).toBe("0")
})

test("input contains initial value of 1",()=>{
    const {getByTestId} = render(<Counter/>)
    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")
})


test("add button render with + sign",()=>{
    const {getByTestId} = render(<Counter/>)
    const addBtnEl = getByTestId("addBtn")

    expect(addBtnEl.textContent).toBe("+")
})

test("add button render with - sign",()=>{
    const {getByTestId} = render(<Counter/>)
    const addBtnEl = getByTestId("subtractBtn")

    expect(addBtnEl.textContent).toBe("-")
})

