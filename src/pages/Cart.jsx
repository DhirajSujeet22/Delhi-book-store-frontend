import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialItems = [
  {
    id: 1,
    image: "/grid/book3.jpg",
    name: "Battle Drive",
    price: 28,
    quantity: 1,
  },
  {
    id: 2,
    image: "/grid/book3.jpg",
    name: "Home",
    price: 28,
    quantity: 1,
  },
  {
    id: 3,
    image: "/grid/book3.jpg",
    name: "Battle Drive",
    price: 28,
    quantity: 1,
  },
  {
    id: 4,
    image: "/grid/book3.jpg",
    name: "Battle Drive",
    price: 28,
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialItems);

  // Increment quantity but limit it to 10
  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity < 10
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrement quantity
  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="page-content">
        {/* inner page banner */}
        <div
          className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm"
          style={{ backgroundImage: "url(images/background/bg3.jpg)" }}
        >
          <div className="container">
            <div className="dz-bnr-inr-entry">
              <h1>Cart</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}> Home</Link>
                  </li>
                  <li className="breadcrumb-item">Cart</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* inner page banner End*/}
        {/* contact area */}
        <section className="content-inner shop-account">
          {/* Product */}

          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table check-tbl">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Product name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th className="text-end">Close</th>
                      </tr>
                    </thead>
                    {cartItems.map((item) => (
                      <tbody key={item.id}>
                        <tr>
                          <td className="product-item-img">
                            <img src={item.image} alt="book" />
                          </td>
                          <td className="product-item-name">{item.name}</td>
                          <td className="product-item-price">
                            ${item.price.toFixed(2)}
                          </td>
                          <td className="product-item-quantity">
                            <div className="quantity btn-quantity style-1 me-3">
                              <div className="input-group bootstrap-touchspin">
                                <input
                                  id="demo_vertical2"
                                  type="text"
                                  value={item.quantity}
                                  readOnly
                                  name="demo_vertical2"
                                  className="form-control"
                                />
                                <span className="input-group-btn-vertical">
                                  <button
                                    className="btn btn-default bootstrap-touchspin-up"
                                    type="button"
                                    onClick={() => incrementQuantity(item.id)}
                                    disabled={item.quantity >= 10} // Disable button when quantity reaches 10
                                  >
                                    <i className="ti-plus" />
                                  </button>
                                  <button
                                    className="btn btn-default bootstrap-touchspin-down"
                                    type="button"
                                    onClick={() => decrementQuantity(item.id)}
                                    disabled={item.quantity <= 1} // Disable button when quantity is 1
                                  >
                                    <i className="ti-minus" />
                                  </button>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="product-item-totle">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                          <td className="product-item-close">
                            <a
                              href="javascript:void(0);"
                              onClick={() => removeItem(item.id)}
                              className="ti-close"
                            />
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="widget">
                  <form className="shop-form">
                    <h4 className="widget-title">Calculate Shipping</h4>
                    <div className="form-group">
                      <select className="default-select">
                        <option selected="">Credit Card Type</option>
                        <option value={1}>Another option</option>
                        <option value={2}>A option</option>
                        <option value={3}>Potato</option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="form-group col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Credit Card Number"
                        />
                      </div>
                      <div className="form-group col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Card Verification Number"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Coupon Code"
                      />
                    </div>
                    <div className="form-group">
                      <a
                        href="shop-cart.html"
                        className="btn btn-primary btnhover"
                        type="button"
                      >
                        Apply Coupon
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="widget">
                  <h4 className="widget-title">Cart Subtotal</h4>
                  <table className="table-bordered check-tbl m-b25">
                    <tbody>
                      <tr>
                        <td>Order Subtotal</td>
                        <td>${calculateTotal()}</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>Free Shipping</td>
                      </tr>
                      <tr>
                        <td>Coupon</td>
                        <td>$28.00</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>
                          ${(parseFloat(calculateTotal()) - 28).toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="form-group m-b25">
                    <Link
                      to="/checkout"
                      className="btn btn-primary btnhover"
                      type="button"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product END */}
        </section>
        {/* contact area End*/}
      </div>
    </>
  );
};

export default Cart;
