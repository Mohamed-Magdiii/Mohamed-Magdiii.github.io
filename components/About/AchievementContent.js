import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Link from "next/link";

const AchievementContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={ toggler }
        sources={ [
          'https://www.youtube.com/watch?v=_oSnjsRJReo'
        ] }
      />
 
      <div className="achievement-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="video-img">
                <img src="/images/about-image-7.jpg" alt="Image" />

                <div className="video">
                  <div
                    onClick={ () => setToggler(!toggler) }
                    className="video-btn"
                  >
                    <i className="flaticon-play-button"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="achievement-content">
                <span>Achievement</span>
                <h2>We have Achieved Many National Award For Our Success</h2>

                <p>
                Effective June 21, 2019, AM Best has assigned an FSR of A (Excellent) and a Long-Term ICR of “a+” to Orient Takaful Insurance Company (S.A.E.) (Orient Takaful) (Egypt), a subsidiary of Orient. The outlook assigned to these ratings is stable. The ratings reflect Orient’s balance sheet strength, which AM Best categorizes as very strong, as well as its very strong operating performance, neutral business profile and appropriate enterprise risk management.
                </p>

                <Link href="/contact">
                  <a className="default-btn">Be Connected</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementContent;
