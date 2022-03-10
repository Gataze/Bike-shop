import { screen, waitFor } from "@testing-library/react";
import { render } from "../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import MainPage from "../../home-page/MainPage";


test("Main manu tests", async () => {
  render(<MainPage />);

  //navigates home when you click the home link.
  const homeLink = screen.getByRole("link", { name: /home/i });
  userEvent.click(homeLink);

  const sliderHeader = screen.getByRole("heading", { name: "NEW MODEL" });
  const modelsHeader = screen.getByRole("heading", { name: "NEW MODELS" });
  const productsHeaderBefore = screen.queryByRole("heading", {
    name: /all products/i,
  });

  expect(sliderHeader).toBeInTheDocument();
  expect(modelsHeader).toBeInTheDocument();
  expect(productsHeaderBefore).not.toBeInTheDocument();

  //navigates to products section when you click products link.
  const productsLink = screen.getByRole("link", { name: /products/i });
  userEvent.click(productsLink);

  const productsHeaderAfter = screen.getByRole("heading", {
    name: /all products/i,
  });

  expect(productsHeaderAfter).toBeInTheDocument();

  await waitFor(async () => {
    const productsList = await screen.findAllByRole("img", { name: /bike$/i });
    expect(productsList).toHaveLength(3);
  });

  // navigates to about section when you click about link.
  
});


