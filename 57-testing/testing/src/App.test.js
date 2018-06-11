import React from "react";
import ReactDOM from "react-dom";
import App, { multiply, Paragraph } from "./App";
// import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("multiplies numbers", () => {
  expect(multiply(4, 5)).toEqual(20);
});

describe("Paragraph", () => {
  let p;

  beforeEach(() => {
    p = shallow(<Paragraph />);
  });

  it("renders the correct string in the paragraph tag", () => {
    expect(p).toEqual("Application is under test control");
  });
});
