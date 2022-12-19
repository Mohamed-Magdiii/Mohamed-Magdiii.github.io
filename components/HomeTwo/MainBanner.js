import React from "react";
import Link from "next/link";
const MainBanner = () => {
  return (
    <div className="main-banner-area-two jarallax">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-text">
              <span
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                Investment Retirement Insurance
              </span>

              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                Get Insurance For Almost Anything You Need
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="true"
              >
               Protection thorugh one of the best insurance companies
              </p>

              <div
                className="banner-btn"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <Link href="/contact">
                  <a className="default-btn">Get Started</a>
                </Link>
                <Link href="/contact">
                  <a className="default-btn active">Find An Agent</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 pr-0">
            <div
              className="banner-img"
              style={{ backgroundImage: `url(/images/banner/banner-img-right.jpg)` }}
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-once="true"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
