import React from 'react'
import { Link } from 'react-router-dom'
const Wishlist = () => {
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
        <h1>Wishlist</h1>
        <nav aria-label="breadcrumb" className="breadcrumb-row">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
            <Link to={"/"}> Home</Link>
            </li>
            <li className="breadcrumb-item">Wishlist</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  {/* inner page banner End*/}
  <div className="content-inner-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="table-responsive">
            <table className="table check-tbl">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Product name</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Add to cart </th>
                  <th>Close</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-item-img">
                    <img src="/grid/book3.jpg" alt="" />
                  </td>
                  <td className="product-item-name">Prduct Item 1</td>
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
                  <td className="product-item-totle">
                    <a
                      href="shop-cart.html"
                      className="btn btn-primary btnhover"
                    >
                      Add To Cart
                    </a>
                  </td>
                  <td className="product-item-close">
                    <a href="javascript:void(0);" className="ti-close" />
                  </td>
                </tr>
                <tr>
                  <td className="product-item-img">
                    <img src="/grid/book2.jpg" alt="img" />
                  </td>
                  <td className="product-item-name">Prduct Item 2</td>
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
                  <td className="product-item-totle">
                    <a
                      href="shop-cart.html"
                      className="btn btn-primary btnhover"
                    >
                      Add To Cart
                    </a>
                  </td>
                  <td className="product-item-close">
                    <a href="javascript:void(0);" className="ti-close" />
                  </td>
                </tr>
                <tr>
                  <td className="product-item-img">
                    <img src="/grid/book1.jpg" alt="img" />
                  </td>
                  <td className="product-item-name">Prduct Item 3</td>
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
                  <td className="product-item-totle">
                    <a
                      href="shop-cart.html"
                      className="btn btn-primary btnhover"
                    >
                      Add To Cart
                    </a>
                  </td>
                  <td className="product-item-close">
                    <a href="javascript:void(0);" className="ti-close" />
                  </td>
                </tr>
                <tr>
                  <td className="product-item-img">
                    <img src="/grid/book4.jpg" alt="" />
                  </td>
                  <td className="product-item-name">Prduct Item 4</td>
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
                  <td className="product-item-totle">
                    <a
                      href="shop-cart.html"
                      className="btn btn-primary btnhover"
                    >
                      Add To Cart
                    </a>
                  </td>
                  <td className="product-item-close">
                    <a href="javascript:void(0);" className="ti-close" />
                  </td>
                </tr>
                <tr>
                  <td className="product-item-img">
                    <img src="/grid/book5.jpg" alt="" />
                  </td>
                  <td className="product-item-name">Prduct Item 5</td>
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
                  <td className="product-item-totle">
                    <a
                      href="shop-cart.html"
                      className="btn btn-primary btnhover"
                    >
                      Add To Cart
                    </a>
                  </td>
                  <td className="product-item-close">
                    <a href="javascript:void(0);" className="ti-close" />
                  </td>
                </tr>
                <tr>
                  <td className="product-item-img">
                    <img src="/grid/book6.jpg" alt="" />
                  </td>
                  <td className="product-item-name">Prduct Item 6</td>
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
                  <td className="product-item-totle">
                    <a
                      href="shop-cart.html"
                      className="btn btn-primary btnhover"
                    >
                      Add To Cart
                    </a>
                  </td>
                  <td className="product-item-close">
                    <a href="javascript:void(0);" className="ti-close" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default Wishlist