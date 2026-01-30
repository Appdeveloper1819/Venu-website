import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar flex items-center justify-between w-full">
                <Link className="navbar-brand" to="/">
                  <h1 className="text-cyan-dark">VenuPilot</h1>
                </Link>
                <div className="block lg:hidden">
                  <Link
                    to="#"
                    className="main-btn btn-hover no-underline inline-block"
                  >
                    Try Demo
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <Link to="#" className="main-btn btn-hover no-underline">
                    Try Demo
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
