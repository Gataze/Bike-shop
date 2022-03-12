import { screen, waitFor } from "@testing-library/react";
import { render } from "../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import MainPage from "../../home-page/MainPage";


test("Main manu navigation tests", async () => {
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
    const productsList = await screen.findAllByRole("img", { name: /bikesPreview\/$/i });
    expect(productsList).toHaveLength(3);
  });

  // navigates to about section when you click about link.
  const aboutLink = screen.getByRole("link", { name: /about/i });
  userEvent.click(aboutLink);

  const aboutHeader = screen.getByRole("heading", { name: /about us/i})
  expect(aboutHeader).toBeInTheDocument();
});


test("User menu tests", () => {
  render(<MainPage />)


  //user login link test - login form should be shown
  const loginIcon = screen.getByTitle("login");
  userEvent.click(loginIcon);
  expect(screen.getByRole("heading", {name: /log in to your account/i})).toBeInTheDocument();

  //user cart link test - cart should be shown
  const cartIcon = screen.getByTitle("cart");
  userEvent.click(cartIcon)
  expect(screen.getByRole("heading", {name: /cart/i})).toBeInTheDocument()

  //cart icon counter tests
  

})



