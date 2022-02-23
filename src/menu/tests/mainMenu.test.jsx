import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MainPage from "../../home-page/MainPage";
import { BrowserRouter as Router } from "react-router-dom";

test("Main manu tests", async () => {
  render(
    <Router>
      <MainPage />
    </Router>
  );

  //Show slider section and new models section after (menu) "HOME" button is clicked.
  const homeButton = screen.getByRole("link", { name: /home/i });
  userEvent.click(homeButton);

  const sliderHeader = screen.getByRole("heading", { name: "NEW MODEL" });
  const modelsHeader = screen.getByRole("heading", { name: "NEW MODELS" });
  const productsHeaderBefore = screen.queryByRole("heading", {
    name: /all products/i,
  });

  expect(sliderHeader).toBeInTheDocument();
  expect(modelsHeader).toBeInTheDocument();
  expect(productsHeaderBefore).not.toBeInTheDocument();

  //Show products header and three products-list items after (menu) "PRODUCTS" button is clicked.
  const productsButton = screen.getByRole("link", { name: /products/i });

  userEvent.click(productsButton);

  const productsHeaderAfter = screen.getByRole("heading", {
    name: /all products/i,
  });

  expect(productsHeaderAfter).toBeInTheDocument();

  await waitFor(async () => {
    const productsList = await screen.findAllByRole("img", { name: /bike$/i });
    expect(productsList).toHaveLength(3);
  });
});

// test("Show about section after (menu) ABOUT button is clicked.", async () => {
//   const aboutButton = screen.getByRole("link", { name: /about/i });
//   userEvent.click(aboutButton);

//   const aboutSection = await screen.findByRole("region", { name: /about/i });
// });
