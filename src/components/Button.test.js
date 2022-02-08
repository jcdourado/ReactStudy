import { render, fireEvent } from "test-utils";
import React from "react";
import Button, { ButtonColors, ButtonVariants } from "./Button";
import { map } from "lodash";

test("renders a text", () => {
  const { getByText } = render(<Button>Click here</Button>);

  expect(getByText("Click here")).toBeInTheDocument();
});

test("trigger event on click", () => {
  const handleClick = jest.fn();

  const { getByRole } = render(<Button onClick={handleClick} />);

  fireEvent.click(getByRole("button"));

  expect(handleClick).toBeCalled();
});

test.each(Object.values(ButtonColors).map((item) => [item]))(
  "renders with color %s",
  (color) => {
    const { asFragment } = render(<Button color={color} />);

    expect(asFragment()).toMatchSnapshot();
  }
);

test.each(Object.values(ButtonVariants).map((item) => [item]))(
  "renders with variant %s",
  (variant) => {
    const { asFragment } = render(<Button variant={variant} />);

    expect(asFragment()).toMatchSnapshot();
  }
);

test("render with color primary and variant outlined", () => {
  const { asFragment } = render(<Button color="primary" variant="outlined" />);

  expect(asFragment()).toMatchSnapshot();
});

test("render with color primary and variant link", () => {
  const { asFragment } = render(<Button color="primary" variant="link" />);

  expect(asFragment()).toMatchSnapshot();
});
