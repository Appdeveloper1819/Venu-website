import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 const base = "relative no-underline transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-cyan-dark after:origin-center after:transition-transform after:duration-300";

const linkClass = ({ isActive }) =>
  `${base} ${isActive ? "text-cyan-dark font-bold after:scale-x-100" : "text-gray-dark hover:text-cyan-dark after:scale-x-0 hover:after:scale-x-100"}`;

  return (
    <header className="header">
      <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg flex items-center justify-between w-full relative">
                <NavLink className="navbar-brand no-underline" to="/">
                  <h1 className="text-cyan-dark">VenuPilot</h1>
                </NavLink>
                <button
                  className="navbar-toggler border-0 shadow-none block lg:hidden"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon block w-6 h-0.5 bg-black mb-1"></span>
                  <span className="toggler-icon block w-6 h-0.5 bg-black mb-1"></span>
                  <span className="toggler-icon block w-6 h-0.5 bg-black"></span>
                </button>
                <div
                  className={`navbar-collapse sub-menu-bar w-full lg:flex lg:items-center lg:justify-end ${
                    menuOpen ? "block" : "hidden"
                  }`}
                >
                  <ul className="navbar-nav flex flex-col lg:flex-row lg:space-x-6 relative">
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        end
                        className={linkClass}
                        onClick={() => setMenuOpen(false)}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/about"
                        className={linkClass}
                        onClick={() => setMenuOpen(false)}
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/features"
                        className={linkClass}
                        onClick={() => setMenuOpen(false)}
                      >
                        Features
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/blogs"
                        className={linkClass}
                        onClick={() => setMenuOpen(false)}
                      >
                        Blogs
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/product"
                        className={linkClass}
                        onClick={() => setMenuOpen(false)}
                      >
                        Products
                      </NavLink>
                    </li>
                  </ul>
                  <div className="block mb-4 lg:hidden">
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        isActive
                          ? "main-btn btn-hover no-underline bg-cyan-dark text-white"
                          : "main-btn btn-hover no-underline hover:bg-cyan-dark hover:text-white"
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      Register
                    </NavLink>
                  </div>
                </div>
                <div className="header-btn hidden lg:block">
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive
                        ? "main-btn btn-hover no-underline bg-cyan-dark text-white"
                        : "main-btn btn-hover no-underline hover:bg-cyan-dark hover:text-white"
                    }
                  >
                    Register
                  </NavLink>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
