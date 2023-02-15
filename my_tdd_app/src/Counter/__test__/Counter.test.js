import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

//Great Tutorial!!
//https://www.youtube.com/watch?v=GLSSRtnNY0g

//To stop repetative code
let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

//Example: Repetative style if not using beforeEach below

// test("header renders with correct text", () => {
//     const {getByTestId} = render(<Counter/>)

//     const headerEl = getByTestId("header");

//     expect(headerEl.textContent).toBe("My Counter");
//   });

//RENDERING PROPERLY TEST
test("header renders with correct text", () => {
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});

test("counter should initially start with text of 0", () => {
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
});

test("add button render with + sign", () => {
  const addBtnEl = getByTestId("addBtn");

  expect(addBtnEl.textContent).toBe("+");
});

test("add button render with - sign", () => {
  const subBtnEl = getByTestId("subtractBtn");

  expect(subBtnEl.textContent).toBe("-");
});

//FUNTIONALITY TEST

test("change value of input works correctly", () => {
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: 5,
    },
  });

  expect(inputEl.value).toBe("5");
});

test("when + button clicked value should add 1 to counter value", () => {
  const addBtnEl = getByTestId("addBtn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe("1");
});

test("when - button clicked value should subtract 1 from counter value", () => {
  const subBtnEl = getByTestId("subtractBtn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(subBtnEl);

  expect(counterEl.textContent).toBe("-1");
});

test("changing input value then clicking on add button works in sync values", () => {
  const addBtnEl = getByTestId("addBtn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: 5,
    },
  });
  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe("5");
});
test("changing input value then clicking on add button works in sync values", () => {
  const addBtnEl = getByTestId("subtractBtn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: 5,
    },
  });
  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe("-5");
});

test("adding then subtracting leads to the correct counter number", () => {
  const addBtnEl = getByTestId("addBtn");
  const subBtnEl = getByTestId("subtractBtn");
  const counter = getByTestId("counter");
  const inputEl = getByTestId("input");

  expect(counter.textContent).toBe("0");

  fireEvent.change(inputEl, {
    target: {
      value: 10,
    },
  });
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);

  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);

  expect(counter.textContent).toBe("20");

  fireEvent.change(inputEl, {
    target: {
      value: 5,
    },
  });

  fireEvent.click(addBtnEl);

  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);

  expect(counter.textContent).toBe("15");
});

test("counter contains correct class name", () => {
  const counter = getByTestId("counter");
  const inputEl = getByTestId("input");
  const addBtnEl = getByTestId("addBtn");
  const subBtnEl = getByTestId("subtractBtn");

  fireEvent.change(inputEl, {
    target: {
      value: 50,
    },
  });

  fireEvent.click(addBtnEl);

  expect(counter.className).toBe("");

  fireEvent.click(addBtnEl);

  expect(counter.className).toBe("green");

  fireEvent.click(addBtnEl);

  expect(counter.className).toBe("green");
  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);
  expect(counter.className).toBe("");

  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);

  expect(counter.className).toBe("red");
});
