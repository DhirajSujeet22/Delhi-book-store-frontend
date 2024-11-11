import React from "react";
import { Link } from "react-router-dom";
const Signin = () => {
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
              <h1>Login</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                  <Link to={"/"}> Home</Link>
                  </li>
                  <li className="breadcrumb-item">Login</li>
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
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="login-area">
                  <div className="tab-content">
                    <h4 style={{ fontSize: "30px", fontWeight: "bold" }}>
                      NEW CUSTOMER
                    </h4>
                    <p>
                      By creating an account with our store, you will be able to
                      move through the checkout process faster, store multiple
                      shipping addresses, view and track your orders in your
                      account and more.
                    </p>
                    <Link
                      className="btn btn-primary btnhover m-r5 button-lg radius-no"
                      to={"/registration"}
                    >
                      CREATE AN ACCOUNT
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="login-area">
                  <div className="tab-content nav">
                    <form id="login" className="tab-pane active col-12">
                      <h4
                        className="text-secondary"
                        style={{ fontSize: "30px", fontWeight: "bold" }}
                      >
                        LOGIN
                      </h4>
                      <p className="font-weight-600">
                        If you have an account with us, please log in.
                      </p>
                      <div className="mb-4">
                        <label className="label-title">E-MAIL *</label>
                        <input
                          name="dzName"
                          required=""
                          className="form-control"
                          placeholder="Your Email Id"
                          type="email"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="label-title">PASSWORD *</label>
                        <input
                          name="dzName"
                          required=""
                          className="form-control "
                          placeholder="Type Password"
                          type="password"
                        />
                      </div>
                      <div className="text-left">
                        <button className="btn btn-primary btnhover me-2">
                          login
                        </button>
                        <Link
                          data-bs-toggle="tab"
                          to={"/forgot-password"}
                          className="m-l5"
                        >
                          <i className="fas fa-unlock-alt" /> Forgot Password
                        </Link>
                      </div>
                    </form>
                    <form
                      id="forgot-password"
                      className="tab-pane fade  col-12"
                    >
                      <h4 className="text-secondary">FORGET PASSWORD ?</h4>
                      <p className="font-weight-600">
                        We will send you an email to reset your password.{" "}
                      </p>
                      <div className="mb-3">
                        <label className="label-title">E-MAIL *</label>
                        <input
                          name="dzName"
                          required=""
                          className="form-control"
                          placeholder="Your Email Id"
                          type="email"
                        />
                      </div>
                      <div className="text-left">
                        <Link
                          className="btn btn-outline-secondary btnhover m-r10"
                          data-bs-toggle="tab"
                          to={"#login"}
                        >
                          Back
                        </Link>
                        <button className="btn btn-primary btnhover">
                          Submit
                        </button>
                      </div>
                    </form>
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

export default Signin;
