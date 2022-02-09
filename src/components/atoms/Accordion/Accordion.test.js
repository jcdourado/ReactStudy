import React from "react";
import { render, screen, fireEvent } from "test-utils";

import Accordion from "./Accordion";
const title = "My title";
const text = "My children";

test("renders title", () => {
  render(<Accordion title={title}></Accordion>);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("renders without children", () => {
  render(<Accordion>{text}</Accordion>);

  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test("triggers onChange when it is clicked", async () => {
  const handleChange = jest.fn();

  render(<Accordion title={title} onChange={handleChange}></Accordion>);

  await fireEvent.click(screen.getByText(title));

  expect(handleChange).toBeCalled();
});

describe("when is controlled", () => {
  describe("when starts opened", () => {
    test("renders the children", () => {
      render(<Accordion open>{text}</Accordion>);

      expect(screen.queryByText(text)).toBeInTheDocument();
    });

    test("triggers onChange when it is clicked", async () => {
      const handleChange = jest.fn();

      render(<Accordion title={title} onChange={handleChange} open />);

      await fireEvent.click(screen.getByText(title));

      expect(handleChange).toBeCalled();
    });

    test("hides children on open changes to false", () => {
      const { rerender } = render(
        <Accordion title={title} open>
          {text}
        </Accordion>
      );

      rerender(
        <Accordion title={title} open={false}>
          {text}
        </Accordion>
      );

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });

    test("calls default function when it is clicked", async () => {
      render(<Accordion title={title} open />);

      await fireEvent.click(screen.getByText(title));
    });
  });

  describe("when starts closed", () => {
    test("renders without the children", () => {
      render(<Accordion>{text}</Accordion>);

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });
});
