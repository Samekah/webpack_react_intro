import Form from "../components/Form";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  beforeEach(() => {
    render(<Form />);
  });

  test("it initialises with a count of 0", () => {
    const nameInput = screen.getByLabelText("name");
    userEvent.type(nameInput, "Tom{enter}"); //{enter represents submitting form}
  });
});
