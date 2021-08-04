import Counter from "../components/Counter";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  test("it initialises with a count of 0", () => {
    const countDisplay = screen.getByRole("figure");
    expect(countDisplay.textContent).toEqual("0");
  });

  test("on clicking the increment button it increases count by one", () => {
    const incrementButton = screen.getByRole("button", { name: "increment-count-btn" });
    const countDisplay = screen.getByRole("figure");
    userEvent.click(incrementButton);
    expect(countDisplay.textContent).toEqual("1");
  });

  test("on clicking the decrement button it decreases count by one", () => {
    const decrementButton = screen.getByRole("button", { name: "decrement-count-btn" });
    const countDisplay = screen.getByRole("figure");
    userEvent.click(decrementButton);
    expect(countDisplay.textContent).toEqual("-1");
  });
});
