import React from 'react'

const About = () => {
  return (
    <div className='about-section py-16'>
      <section id="about" className="about-section">
			
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-last order-lg-first">
						<div className="about-image">
							<img src="assets/images/about/about-image.svg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="about-content-wrapper">
							<div className="section-title">
								<h2 className="mb-10 text-[38px] font-bold">Perfect Solution Thriving Online Business</h2>
								<p className="mb-30 text-[16px] font-normal leading-[25px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.</p>
								<a href="#0" className="main-btn btn-hover border-btn no-underline">Discover More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
  )
}

export default About
