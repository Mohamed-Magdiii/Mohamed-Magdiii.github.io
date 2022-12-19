import React from 'react';

const OurVision = () => {
    return (
			<>
        <div className="our-vision-area ptb-100">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div 
									className="about-img"
									data-aos="fade-up"
									data-aos-delay="500"
									data-aos-duration="1200"
									data-aos-once="true"
								>
									<img src="/images/vision-img.png" alt="Image" />
								</div>
							</div>

							<div className="col-lg-6">
								<div className="vision-content">
									<span>Our Vision</span>
									<h2>Our Vision to Help Clients to Reach The Goals</h2>

									<p>We have started our operation in Egypt in 2009 and are writing all lines of non-life business Including medical. Orient Takaful Insurance Egypt is now ranked No.1 in Takaful market & No.4 in the Egyptian Market Non-life insurance market.</p>

									<div className="vision-list">
										<ul>
											<li>
												<i className="bx bx-chevrons-right"></i>
												Save Money
											</li>
											<li>
												<i className="bx bx-chevrons-right"></i>
												Save Money
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</>
    )
}

export default OurVision;