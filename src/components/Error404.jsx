import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="page-wraper">
      <div
        className="error-page overlay-secondary-dark"
        style={{ backgroundImage: "url(images/background/bg3.jpg)" }}
      >
        <div className="error-inner text-center">
          <div className="dz_error" data-text={404}>
            404
          </div>
          <h2 className="error-head">
            We are sorry. But the page you are looking for cannot be found.
          </h2>
          <Link
         to={'/'}
            className="btn btn-primary btn-border btnhover white-border"
          >
            BACK TO HOMEPAGE
          </Link>
        </div> 
      </div>
    </div>
  );
};

export default Error404;
