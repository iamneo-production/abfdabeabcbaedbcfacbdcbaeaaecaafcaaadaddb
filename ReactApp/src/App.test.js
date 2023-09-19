import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders_without_crashing", () => {
    render(<App />);
  });
  describe("displaying all the products in the initial render", () => {
    it("displays_product1_during_the_initial_render", () => {
      const { getByText } = render(<App />);
      const product1 = getByText("Product 1");
      expect(product1).toBeInTheDocument();
    });

    it("displays_product_2_during_the_initial_render", () => {
      const { getByText } = render(<App />);
      const product2 = getByText("Product 2");
      expect(product2).toBeInTheDocument();
    });

    it("displays_product_3_during_the_initial_render", () => {
      const { getByText } = render(<App />);
      const product3 = getByText("Product 3");
      expect(product3).toBeInTheDocument();
    });

    it("displays_product_4_during_the_initial_render", () => {
      const { getByText } = render(<App />);
      const product4 = getByText("Product 4");
      expect(product4).toBeInTheDocument();
    });

    it("displays_product_5_during_the_initial_render", () => {
      const { getByText } = render(<App />);
      const product5 = getByText("Product 5");
      expect(product5).toBeInTheDocument();
    });
  });
  describe('adds a product to the cart when "Add to Cart" is clicked', () => {
    it('adds_product_1_to_the_cart_when_add_to_cart_is_clicked', () => {
      const { getByText, queryByText } = render(<App />);
      const product1 = getByText("Product 1");
      fireEvent.click(product1);
      const addToCartButton = getByText("Add to Cart");
      fireEvent.click(addToCartButton);
      const cartItem = queryByText("Product 1 - $19.99");
      expect(cartItem).toBeInTheDocument();
    });

    it('adds_product_2_to_the_cart_when_add_to_cart_is_clicked', () => {
      const { getByText, queryByText } = render(<App />);
      const product2 = getByText("Product 2");
      fireEvent.click(product2);
      const addToCartButton = getByText("Add to Cart");
      fireEvent.click(addToCartButton);
      const cartItem = queryByText("Product 2 - $29.99");
      expect(cartItem).toBeInTheDocument();
    });

    // Repeat the above pattern for other products...
  });

  it("displays_total_amount_and_cart_items_correctly_in_the_cart", () => {
    const { getByText } = render(<App />);
    const product1 = getByText("Product 1");
    const product2 = getByText("Product 2");
    fireEvent.click(product1);
    const addToCartButton1 = getByText("Add to Cart");
    fireEvent.click(addToCartButton1);
    fireEvent.click(product2);
    const addToCartButton2 = getByText("Add to Cart");
    fireEvent.click(addToCartButton2);
    const totalAmount = getByText("Total Amount: $49.98");
    expect(totalAmount).toBeInTheDocument();
    const cartItem1 = getByText("Product 1 - $19.99");
    const cartItem2 = getByText("Product 2 - $29.99");
    expect(cartItem1).toBeInTheDocument();
    expect(cartItem2).toBeInTheDocument();
  });

  it("displays_total_amount_and_cart_items_correctly_for_all_products", () => {
    const { getByText } = render(<App />);
    const product1 = getByText("Product 1");
    const product2 = getByText("Product 2");
    const product3 = getByText("Product 3");
    const product4 = getByText("Product 4");
    const product5 = getByText("Product 5");
    fireEvent.click(product1);
    const addToCartButton1 = getByText("Add to Cart");
    fireEvent.click(addToCartButton1);
    fireEvent.click(product2);
    const addToCartButton2 = getByText("Add to Cart");
    fireEvent.click(addToCartButton2);
    fireEvent.click(product3);
    const addToCartButton3 = getByText("Add to Cart");
    fireEvent.click(addToCartButton3);
    fireEvent.click(product4);
    const addToCartButton4 = getByText("Add to Cart");
    fireEvent.click(addToCartButton4);
    fireEvent.click(product5);
    const addToCartButton5 = getByText("Add to Cart");
    fireEvent.click(addToCartButton5);
    const totalAmount = getByText("Total Amount: $99.95");
    expect(totalAmount).toBeInTheDocument();
    const cartItem1 = getByText("Product 1 - $19.99");
    const cartItem2 = getByText("Product 2 - $29.99");
    const cartItem3 = getByText("Product 3 - $14.99");
    const cartItem4 = getByText("Product 4 - $24.99");
    const cartItem5 = getByText("Product 5 - $9.99");
    expect(cartItem1).toBeInTheDocument();
    expect(cartItem2).toBeInTheDocument();
    expect(cartItem3).toBeInTheDocument();
    expect(cartItem4).toBeInTheDocument();
    expect(cartItem5).toBeInTheDocument();
  });

  it("displays_an_empty_cart_message_when_the_cart_is_empty", () => {
    const { getByText } = render(<App />);
    const emptyCartMessage = getByText("Your cart is empty.");
    expect(emptyCartMessage).toBeInTheDocument();
  });

  describe("Displaying 'Add to cart' when the product is clicked", () => {
    it("displays_add_to_cart_button_when_product_1_is_clicked", () => {
      const { getByText } = render(<App />);
      const product1 = getByText("Product 1");
      fireEvent.click(product1);
      const addToCartButton = getByText("Add to Cart");
      expect(addToCartButton).toBeInTheDocument();
    });

    it("displays_add_to_cart_button_when_product_2_is_clicked", () => {
      const { getByText } = render(<App />);
      const product2 = getByText("Product 2");
      fireEvent.click(product2);
      const addToCartButton = getByText("Add to Cart");
      expect(addToCartButton).toBeInTheDocument();
    });

    // Repeat the above pattern for other products...
  });

  it('displays_add_to_cart_button_and_hides_it_after_clicking', () => {
    const { getByText, queryByText } = render(<App />);

    // Initially, "Add to Cart" button should not be displayed
    const addToCartButton = queryByText("Add to Cart");
    expect(addToCartButton).not.toBeInTheDocument();

    // Get the product element and click on it
    const product1 = getByText("Product 1");
    fireEvent.click(product1);

    // After clicking, "Add to Cart" button should be displayed
    const addedToCartButton = getByText("Add to Cart");
    expect(addedToCartButton).toBeInTheDocument();
    fireEvent.click(addedToCartButton);

    // After clicking again, "Add to Cart" button should be hidden
    expect(addedToCartButton).not.toBeInTheDocument();
  });
});
