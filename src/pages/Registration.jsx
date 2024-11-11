import React from 'react'
import { Link } from 'react-router-dom'
const Registration = () => {
  return (
    <>
    <div className="page-content">
  {/* inner page banner */}
  <div
    className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm"
    style={{ backgroundImage: "" }}
  >
    <div className="container">
      <div className="dz-bnr-inr-entry">
        <h1 >Registration</h1>
        <nav aria-label="breadcrumb" className="breadcrumb-row">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}> Home</Link>
            </li>
            <li className="breadcrumb-item">Registration</li>
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
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6 mb-4">
          <div className="login-area">
            <form>
              <h4 className="text-secondary"  style={{ fontSize: "30px", fontWeight: "bold" }}>Registration</h4>
              <p className="font-weight-600">
                If you don't have an account with us, please Registration.
              </p>
              <div className="mb-4">
                <label className="label-title">Username *</label>
                <input
                  name="dzName"
                  required=""
                  className="form-control"
                  placeholder="Your Username"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="label-title">Email address *</label>
                <input
                  name="dzName"
                  required=""
                  className="form-control"
                  placeholder="Your Email address"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label className="label-title">Password *</label>
                <input
                  name="dzName"
                  required=""
                  className="form-control "
                  placeholder="Type Password"
                  type="password"
                />
              </div>
              <div className="mb-5">
                <small>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <a href="privacy-policy.html">privacy policy</a>.
                </small>
              </div>
              <div className="text-left">
                <button className="btn btn-primary btnhover w-100 me-2">
                  Register
                </button>
              </div>
              <h1 style={{padding:'10px'}}>If already registered ! <Link to={'/Signin'}> Login here </Link> </h1>
            </form>
          </div>
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

export default Registration