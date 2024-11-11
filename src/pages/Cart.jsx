import React from "react";
import { Link } from "react-router-dom";
import  { useState } from "react";
const Cart = () => {
  const [count, setCount] = useState(1); // Initial count is set to 1 (can be adjusted)

  // Increment function
  const handleIncrement = () => {
    setCount(count + 1); // Increase count by 1
  };

  // Decrement function
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1); // Decrease count by 1 but not below 0
    }
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
                    <tbody>
                      <tr>
                        <td className="product-item-img">
                          <img src="/grid/book3.jpg" alt="book" />
                        </td>
                        <td className="product-item-name">Battle Drive</td>
                        <td className="product-item-price">$28.00</td>
                        <td className="product-item-quantity">
                          <div className="quantity btn-quantity style-1 me-3">
                            <div className="input-group bootstrap-touchspin">
                              <span
                                className="input-group-addon bootstrap-touchspin-prefix"
                                style={{ display: "none" }}
                              />
                              <input
                                id="demo_vertical2"
                                type="text"
                                defaultValue={1}
                                name="demo_vertical2"
                                className="form-control"
                                style={{ display: "block" }}
                              />
                              <span
                                className="input-group-addon bootstrap-touchspin-postfix"
                                style={{ display: "none" }}
                              />
                              <span className="input-group-btn-vertical">
                                <button
                                  className="btn btn-default bootstrap-touchspin-up"
                                  type="button"
                                  onClick={handleIncrement} // Call increment on click
                                >
                                  <i className="ti-plus" />
                                </button>
                                <button
                                  className="btn btn-default bootstrap-touchspin-down"
                                  type="button"
                                  onClick={handleDecrement} // Call decrement on click
                                >
                                  <i className="ti-minus" />
                                </button>
                              </span>
                               {/* Display the current count */}
                            <input
                              type="text"
                              className="form-control"
                              value={count} // Bind count to input field
                              readOnly
                            />
                            </div>
                          </div>
                        </td>
                        <td className="product-item-totle">${(count * 28).toFixed(2)}</td>
                      <td className="product-item-close">
                        <a href="javascript:void(0);" className="ti-close" />
                      </td>
                      </tr>
                      <tr>
                        <td className="product-item-img">
                          <img src="/grid/book2.jpg" alt="book" />
                        </td>
                        <td className="product-item-name">Home</td>
                        <td className="product-item-price">$28.00</td>
                        <td className="product-item-quantity">
                          <div className="quantity btn-quantity style-1 me-3">
                            <div className="input-group bootstrap-touchspin">
                              <span
                                className="input-group-addon bootstrap-touchspin-prefix"
                                style={{ display: "none" }}
                              />
                              <input
                                id="demo_vertical2"
                                type="text"
                                defaultValue={1}
                                name="demo_vertical2"
                                className="form-control"
                                style={{ display: "block" }}
                              />
                              <span
                                className="input-group-addon bootstrap-touchspin-postfix"
                                style={{ display: "none" }}
                              />
                              <div className="input-group-btn-vertical">
                                <button
                                  className="btn btn-default bootstrap-touchspin-up"
                                  type="button"
                                  
                                >
                                  <i className="ti-plus" />
                                </button>
                                <button
                                  className="btn btn-default bootstrap-touchspin-down"
                                  type="button"
                                
                                >
                                  <i className="ti-minus" />
                                </button>
                             
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="product-item-totle">$28.00</td>
                        <td className="product-item-close">
                          <a href="javascript:void(0);" className="ti-close" />
                        </td>
                      </tr>
                      <tr>
                        <td className="product-item-img">
                          <img src="/grid/book4.jpg" alt="book" />
                        </td>
                        <td className="product-item-name">Such A Fun Age</td>
                        <td className="product-item-price">$28.00</td>
                        <td className="product-item-quantity">
                          <div className="quantity btn-quantity style-1 me-3">
                            <div className="input-group bootstrap-touchspin">
                              <span
                                className="input-group-addon bootstrap-touchspin-prefix"
                                style={{ display: "none" }}
                              />
                              <input
                                id="demo_vertical2"
                                type="text"
                                defaultValue={1}
                                name="demo_vertical2"
                                className="form-control"
                                style={{ display: "block" }}
                              />
                              <span
                                className="input-group-addon bootstrap-touchspin-postfix"
                                style={{ display: "none" }}
                              />
                              <span className="input-group-btn-vertical">
                                <button
                                  className="btn btn-default bootstrap-touchspin-up"
                                  type="button"
                                >
                                  <i className="ti-plus" />
                                </button>
                                <button
                                  className="btn btn-default bootstrap-touchspin-down"
                                  type="button"
                                >
                                  <i className="ti-minus" />
                                </button>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="product-item-totle">$28.00</td>
                        <td className="product-item-close">
                          <a href="javascript:void(0);" className="ti-close" />
                        </td>
                      </tr>
                      <tr>
                        <td className="product-item-img">
                          <img src="/grid/book1.jpg" alt="book" />
                        </td>
                        <td className="product-item-name">Real Life</td>
                        <td className="product-item-price">$28.00</td>
                        <div className="quantity btn-quantity style-1 me-3">
                          <div className="input-group bootstrap-touchspin">
                            <span
                              className="input-group-addon bootstrap-touchspin-prefix"
                              style={{ display: "none" }}
                            />
                            <input
                              id="demo_vertical2"
                              type="text"
                              defaultValue={1}
                              name="demo_vertical2"
                              className="form-control"
                              style={{ display: "block" }}
                            />
                            <span
                              className="input-group-addon bootstrap-touchspin-postfix"
                              style={{ display: "none" }}
                            />
                            <span className="input-group-btn-vertical">
                              <button
                                className="btn btn-default bootstrap-touchspin-up"
                                type="button"
                              >
                                <i className="ti-plus" />
                              </button>
                              <button
                                className="btn btn-default bootstrap-touchspin-down"
                                type="button"
                              >
                                <i className="ti-minus" />
                              </button>
                            </span>
                          </div>
                        </div>

                        <td className="product-item-totle">$28.00</td>

                        <td className="product-item-close">
                          <a href="javascript:void(0);" className="ti-close" />
                        </td>
                      </tr>
                      <tr>
                        <td className="product-item-img">
                          <img src="/grid/book6.jpg" alt="book" />
                        </td>
                        <td className="product-item-name">Cat Adventure</td>
                        <td className="product-item-price">$28.00</td>
                        <td className="product-item-quantity">
                          <div className="quantity btn-quantity style-1 me-3">
                            <div className="input-group bootstrap-touchspin">
                              <span
                                className="input-group-addon bootstrap-touchspin-prefix"
                                style={{ display: "none" }}
                              />
                              <input
                                id="demo_vertical2"
                                type="text"
                                defaultValue={1}
                                name="demo_vertical2"
                                className="form-control"
                                style={{ display: "block" }}
                              />
                              <span
                                className="input-group-addon bootstrap-touchspin-postfix"
                                style={{ display: "none" }}
                              />
                              <span className="input-group-btn-vertical">
                                <button
                                  className="btn btn-default bootstrap-touchspin-up"
                                  type="button"
                                >
                                  <i className="ti-plus" />
                                </button>
                                <button
                                  className="btn btn-default bootstrap-touchspin-down"
                                  type="button"
                                >
                                  <i className="ti-minus" />
                                </button>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="product-item-totle">$28.00</td>
                        <td className="product-item-close">
                          <a href="javascript:void(0);" className="ti-close" />
                        </td>
                      </tr>
                      <tr>
                        <td className="product-item-img">
                          <img src="/grid/book5.jpg" alt="book" />
                        </td>
                        <td className="product-item-name">Take Out Tango</td>
                        <td className="product-item-price">$28.00</td>
                        <td className="product-item-quantity">
                          <div className="quantity btn-quantity style-1 me-3">
                            <div className="input-group bootstrap-touchspin">
                              <span
                                className="input-group-addon bootstrap-touchspin-prefix"
                                style={{ display: "none" }}
                              />
                              <input
                                id="demo_vertical2"
                                type="text"
                                defaultValue={1}
                                name="demo_vertical2"
                                className="form-control"
                                style={{ display: "block" }}
                              />
                              <span
                                className="input-group-addon bootstrap-touchspin-postfix"
                                style={{ display: "none" }}
                              />
                              <span className="input-group-btn-vertical">
                                <button
                                  className="btn btn-default bootstrap-touchspin-up"
                                  type="button"
                                >
                                  <i className="ti-plus" />
                                </button>
                                <button
                                  className="btn btn-default bootstrap-touchspin-down"
                                  type="button"
                                >
                                  <i className="ti-minus" />
                                </button>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="product-item-totle">$28.00</td>
                        <td className="product-item-close">
                          <a href="javascript:void(0);" className="ti-close" />
                        </td>
                      </tr>
                    </tbody>
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
                        <td>$125.96</td>
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
                        <td>$506.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="form-group m-b25">
                    <a
                      href="shop-checkout.html"
                      className="btn btn-primary btnhover"
                      type="button"
                    >
                      Proceed to Checkout
                    </a>
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
