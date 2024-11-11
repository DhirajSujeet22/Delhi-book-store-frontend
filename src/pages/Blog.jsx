import React from "react";
import { Link } from "react-router-dom";
const Blog = () => {
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
              <h1>Blog Grid</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                  <Link to={"/"}> Home</Link>
                  </li>
                  <li className="breadcrumb-item">Blog Grid</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* inner page banner End*/}
        {/* Blog Large */}
        <section className="content-inner-1 bg-img-fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="dz-blog style-1 bg-white m-b30">
                  <div className="dz-media dz-img-effect zoom">
                    <img src="/large/blog2.jpg" alt="" />
                  </div>
                  <div className="dz-info">
                    <h4 className="dz-title">
                      <a href="blog-details.html">
                        The library is inhabited by spirits that come out of the
                        pages.
                      </a>
                    </h4>
                    <p className="m-b0">
                      Sed auctor magna lacus, in placerat nisl sollicitudin ut.
                      Morbi feugiat ante velit, eget convallis arcu iaculis vel.
                      Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed
                      auctor.
                    </p>
                    <div className="dz-meta meta-bottom">
                      <ul className="border-0 pt-0">
                        <li className="post-date">
                          <i className="far fa-calendar fa-fw m-r10" />7 March,
                          2022
                        </li>
                        <li className="post-author">
                          <i className="far fa-user fa-fw m-r10" />
                          By <a href="javascript:void(0);"> Johne Doe</a>
                        </li>
                        <li className="post-comment">
                          <a href="javascript:void(0);">
                            <i className="far fa-comment-alt fa-fw" />
                            <span>15</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="dz-blog style-1 bg-white m-b30">
                  <div className="dz-media dz-img-effect zoom">
                    <img src="/large/blog1.jpg" alt="/" />
                  </div>
                  <div className="dz-info">
                    <h4 className="dz-title">
                      <a href="blog-detail.html">
                        The 5 Secrets About Library Only A Handful Of People
                        Know.
                      </a>
                    </h4>
                    <p className="m-b0">
                      Sed auctor magna lacus, in placerat nisl sollicitudin ut.
                      Morbi feugiat ante velit, eget convallis arcu iaculis vel.
                      Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed
                      auctor.
                    </p>
                    <div className="dz-meta meta-bottom">
                      <ul className="border-0 pt-0">
                        <li className="post-date">
                          <i className="far fa-calendar fa-fw m-r10" />7 March,
                          2022
                        </li>
                        <li className="post-author">
                          <i className="far fa-user fa-fw m-r10" />
                          By <a href="javascript:void(0);"> Johne Doe</a>
                        </li>
                        <li className="post-comment">
                          <a href="javascript:void(0);">
                            <i className="far fa-comment-alt fa-fw" />
                            <span>15</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="dz-blog style-1 bg-white m-b30">
                  <div className="dz-media dz-img-effect zoom">
                    <img src="/large/blog3.jpg" alt="/" />
                  </div>
                  <div className="dz-info">
                    <h4 className="dz-title">
                      <a href="blog-details.html">
                        Most Effective Ways To Overcome Library's Problem.
                      </a>
                    </h4>
                    <p className="m-b0">
                      Sed auctor magna lacus, in placerat nisl sollicitudin ut.
                      Morbi feugiat ante velit, eget convallis arcu iaculis vel.
                      Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed
                      auctor.
                    </p>
                    <div className="dz-meta meta-bottom">
                      <ul className="border-0 pt-0">
                        <li className="post-date">
                          <i className="far fa-calendar fa-fw m-r10" />7 March,
                          2022
                        </li>
                        <li className="post-author">
                          <i className="far fa-user fa-fw m-r10" />
                          By <a href="javascript:void(0);"> Johne Doe</a>
                        </li>
                        <li className="post-comment">
                          <a href="javascript:void(0);">
                            <i className="far fa-comment-alt fa-fw" />
                            <span>15</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="dz-blog style-1 bg-white m-b30">
                  <div className="dz-media dz-img-effect zoom">
                    <img src="/large/blog4.jpg" alt="" />
                  </div>
                  <div className="dz-info">
                    <h4 className="dz-title">
                      <a href="blog-detail.html">
                        You Should Experience Library At Least Once In Lifetime
                      </a>
                    </h4>
                    <p className="m-b0">
                      Sed auctor magna lacus, in placerat nisl sollicitudin ut.
                      Morbi feugiat ante velit, eget convallis arcu iaculis vel.
                      Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed
                      auctor.
                    </p>
                    <div className="dz-meta meta-bottom">
                      <ul className="border-0 pt-0">
                        <li className="post-date">
                          <i className="far fa-calendar fa-fw m-r10" />7 March,
                          2022
                        </li>
                        <li className="post-author">
                          <i className="far fa-user fa-fw m-r10" />
                          By <a href="javascript:void(0);"> Johne Doe</a>
                        </li>
                        <li className="post-comment">
                          <a href="javascript:void(0);">
                            <i className="far fa-comment-alt fa-fw" />
                            <span>15</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="pagination text-center style-1 p-t20">
              <li className="page-item">
                <a className="page-link prev" href="javascript:void(0);">
                  Prev
                </a>
              </li>
              <li className="page-item">
                <a className="page-link active" href="javascript:void(0);">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link next" href="javascript:void(0);">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
