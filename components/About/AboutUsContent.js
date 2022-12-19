import React from 'react';

const AboutUsContent = () => {
    return (
        <div className="about-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-content">
							<span>About Us</span>
							<h2>ORIENT INSURANCE – EGYPT</h2>

							<p>Orient Takaful Insurance Egypt is an affiliate company of the UAE based Orient Insurance PJSC which is the market leader in UAE and operating in 7 countries and 100% owned by Al Futtaim business group. Orient Takaful Insurance Egypt is an Egyptian shareholding company subject to the provisions of Law No. 10 of 1981 and its amendments and has a license No. (30) from the General Authority for Financial Control. It is also worth to mention that our mother company is “A” rated by both S&P and AM Best. Orient Takaful Insurance Egypt is a Joint Venture between Orient PJSC and 2 UAE based banks operating in Egypt.</p>	

							<p>We have started our operation in Egypt in 2009 and are writing all lines of non-life business Including medical. Orient Takaful Insurance Egypt is now ranked No.1 in Takaful market & No.4 in the Egyptian Market Non-life insurance market.</p>

							<div className="about-list">
								<ul>
									<li>
										<i className="flaticon-checked"></i>
										Save Money
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Fast Application
									</li>
									
								</ul>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div 
							className="about-img"
							data-aos="fade-up"
							data-aos-delay="500"
							data-aos-duration="1200"
							data-aos-once="true"
						>
							<img src="/images/about-img.png" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUsContent;