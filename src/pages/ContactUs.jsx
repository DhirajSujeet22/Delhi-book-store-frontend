import React from "react";
import { Link } from "react-router-dom";
const ContactUs = () => {
  return (
    <>
      <>
        {/* inner page banner */}
        <div
          className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm"
          style={{ backgroundImage: "url(images/background/bg3.jpg)" }}
        >
          <div className="container">
            <div className="dz-bnr-inr-entry">
              <h1>Contact</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                  <Link to={"/"}> Home</Link>
                  </li>
                  <li className="breadcrumb-item">Contact</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="content-inner-2 pt-0">
          <div className="map-iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219"
              style={{
                border: 0,
                width: "100%",
                minHeight: "100%",
                marginBottom: "-8px",
              }}
              allowFullScreen=""
            />
          </div>
        </div>
        <section
          className="contact-wraper1"
          style={{ backgroundImage: "url(images/background/bg2.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="contact-info">
                  <div className="section-head text-white style-1">
                    <h3 className="title text-white">Get In Touch</h3>
                    <p>
                      If you are interested in working with us, please get in
                      touch.
                    </p>
                  </div>
                  <ul className="no-margin">
                    <li className="icon-bx-wraper text-white left m-b30">
                      <div className="icon-md">
                        <span className="icon-cell text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-map-pin"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx={12} cy={10} r={3} />
                          </svg>
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className=" dz-tilte text-white">Our Address</h5>
                        <p>
                          1247/Plot No. 39, 15th Phase, Huab Colony, Kukatpally,
                          Hyderabad
                        </p>
                      </div>
                    </li>
                    <li className="icon-bx-wraper text-white left m-b30">
                      <div className="icon-md">
                        <span className="icon-cell text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-mail"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dz-tilte text-white">Our Email</h5>
                        <p>
                          info@gmail
                          <br />
                          services@gmail.com
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 m-b40">
                <div className="contact-area1 m-r20 m-md-r0">
                  <div className="section-head style-1">
                    <h6 className="sub-title text-primary">CONTACT US</h6>
                    <h3 className="title m-b20">Get In Touch With Us</h3>
                  </div>
                  <form
                    className="dz-form dzForm"
                    method="POST"
                    action="https://bookland.dexignzone.com/xhtml/script/contact_smtp.php"
                  >
                    <input
                      type="hidden"
                      className="form-control"
                      name="dzToDo"
                      defaultValue="Contact"
                    />
                    <div className="dzFormMsg" />
                    <div className="input-group">
                      <input
                        required=""
                        type="text"
                        className="form-control"
                        name="dzName"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="input-group">
                      <input
                        required=""
                        type="text"
                        className="form-control"
                        name="dzEmail"
                        placeholder="Email Adress"
                      />
                    </div>
                    <div className="input-group">
                      <input
                        required=""
                        type="text"
                        className="form-control"
                        name="dzPhoneNumber"
                        placeholder="Phone No."
                      />
                    </div>
                    <div className="input-group">
                      <textarea
                        required=""
                        name="dzMessage"
                        rows={5}
                        className="form-control"
                        defaultValue={"Message"}
                      />
                    </div>
                    <div className="mb-3">
                      <div
                        className="g-recaptcha"
                        data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                        data-callback="verifyRecaptchaCallback"
                        data-expired-callback="expiredRecaptchaCallback"
                      />
                      <input
                        className="form-control d-none"
                        style={{ display: "none" }}
                        data-recaptcha="true"
                        required=""
                        data-error="Please complete the Captcha"
                      />
                    </div>
                    <div>
                      <button
                        name="submit"
                        type="submit"
                        value="submit"
                        className="btn w-100 btn-primary btnhover"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default ContactUs;
