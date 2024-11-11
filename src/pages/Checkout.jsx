import React from 'react'
import { Link } from 'react-router-dom'
const Checkout = () => {
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
        <h1>Checkout</h1>
        <nav aria-label="breadcrumb" className="breadcrumb-row">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
            <Link to={"/"}> Home</Link>
            </li>
            <li className="breadcrumb-item">Checkout</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  {/* inner page banner End*/}
  {/* contact area */}
  <section className="content-inner-1">
    {/* Product */}
    <div className="container">
      <form className="shop-form">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="widget">
              <h4 className="widget-title">Billing &amp; Shipping Address</h4>
              <div className="form-group">
                <select className="default-select">
                  <option value={1}>Åland Islands</option>
                  <option value={2}>Afghanistan</option>
                  <option value={3}>Albania</option>
                  <option value={4}>Algeria</option>
                  <option value={5}>Andorra</option>
                  <option value={6}>Angola</option>
                  <option value={7}>Anguilla</option>
                  <option value={8}>Antarctica</option>
                  <option value={9}>Antigua and Barbuda</option>
                  <option value={10}>Argentina</option>
                  <option value={11}>Armenia</option>
                  <option value={12}>Aruba</option>
                  <option value={13}>Australia</option>
                </select>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, suite, unit etc."
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Town / City"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State / County"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Postcode / Zip"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <button
                className="btn btn-primary btnhover mb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#create-an-account"
              >
                Create an account <i className="fa fa-arrow-circle-o-down" />
              </button>
              <div id="create-an-account" className="collapse">
                <p>
                  Create an account by entering the information below. If you
                  are a returning customer please login at the top of the page.
                </p>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <button
              className="btn btn-primary btnhover mb-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#different-address"
            >
              Ship to a different address{" "}
              <i className="fa fa-arrow-circle-o-down" />
            </button>
            <div id="different-address" className="collapse">
              <p>
                If you have shopped with us before, please enter your details in
                the boxes below. If you are a new customer please proceed to the
                Billing &amp; Shipping section.
              </p>
              <div className="form-group">
                <select className="default-select">
                  <option value="">Åland Islands</option>
                  <option value="">Afghanistan</option>
                  <option value="">Albania</option>
                  <option value="">Algeria</option>
                  <option value="">Andorra</option>
                  <option value="">Angola</option>
                  <option value="">Anguilla</option>
                  <option value="">Antarctica</option>
                  <option value="">Antigua and Barbuda</option>
                  <option value="">Argentina</option>
                  <option value="">Armenia</option>
                  <option value="">Aruba</option>
                  <option value="">Australia</option>
                </select>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, suite, unit etc."
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Town / City"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State / County"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Postcode / Zip"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <p>
                Create an account by entering the information below. If you are
                a returning customer please login at the top of the page.
              </p>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Notes about your order, e.g. special notes for delivery"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="dz-divider bg-gray-dark text-gray-dark icon-center  my-5">
        <i className="fa fa-circle bg-white text-gray-dark" />
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="widget">
            <h4 className="widget-title">Your Order</h4>
            <table className="table-bordered check-tbl">
              <thead className="text-center">
                <tr>
                  <th>IMAGE</th>
                  <th>PRODUCT NAME</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-item-img">
                    <img src="/grid/book3.jpg" alt="" />
                  </td>
                  <td className="product-item-name">Prduct Item 5</td>
                  <td className="product-price">$28.00</td>
                </tr>
                <tr>
                  <td className="product-item-img">
                    <img src="/grid/book2.jpg" alt="" />
                  </td>
                  <td className="product-item-name">Prduct Item 4</td>
                  <td className="product-price">$36.00</td>
                </tr>
                <tr>
                  <td className="product-item-img">
                    <img src="/grid/book4.jpg" alt="" />
                  </td>
                  <td className="product-item-name">Prduct Item 3</td>
                  <td className="product-price">$28.00</td>
                </tr>
                <tr>
                  <td className="product-item-img">
                    <img src="/grid/book5.jpg" alt="" />
                  </td>
                  <td className="product-item-name">Prduct Item 2</td>
                  <td className="product-price">$36.00</td>
                </tr>
                <tr>
                  <td className="product-item-img">
                    <img src="/grid/book1.jpg" alt="" />
                  </td>
                  <td className="product-item-name">Prduct Item 1</td>
                  <td className="product-price">$28.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-6">
          <form className="shop-form widget">
            <h4 className="widget-title">Order Total</h4>
            <table className="table-bordered check-tbl mb-4">
              <tbody>
                <tr>
                  <td>Order Subtotal</td>
                  <td className="product-price">$125.96</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>Free Shipping</td>
                </tr>
                <tr>
                  <td>Coupon</td>
                  <td className="product-price">$28.00</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td className="product-price-total">$506.00</td>
                </tr>
              </tbody>
            </table>
            <h4 className="widget-title">Payment Method</h4>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name on Card"
              />
            </div>
            <div className="form-group">
              <select className="default-select">
                <option value="">Credit Card Type</option>
                <option value="">Another option</option>
                <option value="">A option</option>
                <option value="">Potato</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Credit Card Number"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Card Verification Number"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btnhover" type="button">
                Place Order Now{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* Product END */}
  </section>
  {/* contact area End*/}
</div>

   </>
  )
}

export default Checkout