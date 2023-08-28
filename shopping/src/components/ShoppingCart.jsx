import React, { Component } from 'react';


class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
      showCart: true,
    };
  }

  toggleCart = () => {
    this.setState((prevState) => ({
      showCart: !prevState.showCart,
    }));
  };

  render() {
    const { items, showCart } = this.state;

    return (
      <div className="shopping-cart">
        <button className="toggle-button" onClick={this.toggleCart}>
          Toggle Cart
        </button>
        {showCart ? (
          <div>
            <h2>Shopping Cart</h2>
            <ul>
              {items.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Your cart is currently empty.</p>
        )}
      </div>
    );
  }
}

export default ShoppingCart;
