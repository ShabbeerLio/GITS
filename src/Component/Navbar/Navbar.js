import React from "react";
import "./Navbar.css";
import gits from "../../Logo/gits.png";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navBar-main">
        <nav className="row navbar navbar-expand-lg navbar-light align-items-lg-end">
          <a className="navBar-logo" href="/">
            <img src={gits} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                 Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown" id="hover-dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="/services"
                >
                  Services
                </a>
                <div className="dropdown-menu mega-menu column2 ">
                  <li className="dropdown-submenu">
                    <a
                      href="/creative"
                      className="dropdown-item dropdown-toggle"
                    >
                      Creative
                    </a>
                    <ul className="dropdown-innermenu">
                      <li>
                        <a className="dropdown-item" href="/creative-design">
                          Creative Design
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/digital-film">
                          Digital Film
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item f-700"
                          href="/messaging-workshops"
                        >
                          Messaging workshops{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="/digital-marketing"
                    >
                      Digital Marketing
                    </a>
                    <ul className="dropdown-innermenu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="/search-engine-optimisation"
                        >
                          Search Engine Optimisation
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/content-marketing">
                          Content Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/influencer-marketing"
                        >
                          Influencer Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/social-media-optimisation"
                        >
                          Social Media Optimisation
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/pay-per-click">
                          Pay Per Click
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="/technology"
                    >
                      Tech
                    </a>
                    <ul className="dropdown-innermenu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="/website-development"
                        >
                          Website Development
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/app-development">
                          App Development
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/custom-software-development"
                        >
                          Custom Software Development
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/ui-ux-design">
                          UI/UX Design
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/case-studies">
                  Case Studies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/trends">
                  Cool Gai's Trends
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/career">
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;