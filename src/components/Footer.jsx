import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className=" footer bg-white pt-120 pb-12 border-t border-gray-200">
			<div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
						<div className="footer-widget">
							<div className="logo">
								<Link className='no-underline' to="/">
								 {/* <img src="assets/images/logo/logo.svg" alt="logo"/> */}
								 <h1 className="text-cyan-dark">VenuPilot</h1>
								 </Link>
							</div>
							<p className="desc text-[16px] font-normal leading-[25px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt.</p>
							<ul className="social-links">
								<li><Link className='no-underline' to="https://www.facebook.com"><i className="lni lni-facebook"></i></Link></li>
								<li><Link className='no-underline' to="https://www.linkedin.com"><i className="lni lni-linkedin"></i></Link></li>
								<li><Link className='no-underline' to="https://www.instagram.com"><i className="lni lni-instagram"></i></Link></li>
								<li><Link className='no-underline' to="https://x.com"><i className="lni lni-twitter"></i></Link></li>
							</ul>
						</div>
					</div>
					<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 offset-xl-1">
						<div className="footer-widget">
							<h3 className='text-[25px] font-bold'>About Us</h3>
							<ul className="links">
								<li><Link className='no-underline' to="/">Home</Link></li>
								<li><Link className='no-underline' to="/about">About</Link></li>
								<li><Link className='no-underline' to="/features">Features</Link></li>
								<li><Link className='no-underline' to="/pricing">Pricing</Link></li>
								<li><Link className='no-underline' to="/contact">Contact</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
						<div className="footer-widget">
							<h3 className='text-[25px] font-bold'>Services</h3>
							<ul className="links text-align-start">
								<li><Link className='no-underline' to="#0">SaaS Focused</Link></li>
								<li><Link className='no-underline' to="#0">Awesome Design</Link></li>
								<li><Link className='no-underline' to="#0">Ready to Use</Link></li>
								<li><Link className='no-underline' to="#0">Essential Selection</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-6">
						<div className="footer-widget">
							<h3 className='text-[25px] font-bold'>Subscribe Newsletter</h3>
							<form action="#">
								<input type="email" placeholder="Email"/>
								<button className="main-btn btn-hover">Subscribe</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</footer>
    </div>
  )
}

export default Footer
