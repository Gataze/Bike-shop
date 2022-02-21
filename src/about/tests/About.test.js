import { screen, render } from "@testing-library/react";

import About from "../About";

test("asdas button", () => {
  render(<About />);

  const redButton = screen.getByRole("button", { name: /HIGH FIVE/i });
  expect(redButton).toHaveTextContent("HIGH FIVE");
});
