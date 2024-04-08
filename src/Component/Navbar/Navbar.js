import React from "react";
import "./Navbar.css";
import gits from "../../Logo/gits.png";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = (props) => {
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
                <a className="nav-link" href="/about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown" id="hover-dropdown">
                <a
                  className="nav-link "
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="/services"
                >
                  Services <FaChevronDown />
                </a>
                <div className="dropdown-menu mega-menu column2 ">
                  <li className="dropdown-submenu">
                    <a
                      href="/creative"
                      className="dropdown-item "
                    >
                      SEO
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item "
                      href="/digital-marketing"
                    >
                      PPC
                    </a>

                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item "
                      href="/technology"
                    >
                      Social Media
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item "
                      href="/technology"
                    >
                      Website Design
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item "
                      href="/technology"
                    >
                      Content Marketing
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item "
                      href="/technology"
                    >
                      Branding
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item "
                      href="/technology"
                    >
                      Remarketing
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item "
                      href="/technology"
                    >
                      CRO
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item "
                      href="/technology"
                    >
                      Inbound Marketing
                    </a>
                  </li>
                </div>
              </li>
              <li className="nav-item dropdown" id="hover-dropdown">
                <a
                  className="nav-link "
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="/services"
                >
                  Company<FaChevronDown />
                </a>
                <div className="dropdown-menu mega-menu column2 ">
                  <li className="dropdown-submenu">
                    <a
                      href="/creative"
                      className="dropdown-item "
                    >
                      Industry Sectors
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item "
                      href="/digital-marketing"
                    >
                      Career
                    </a>

                  </li>
                </div>
              </li>
              <li className="nav-item dropdown" id="hover-dropdown">
                <a
                  className="nav-link "
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="/services"
                >
                  How We Help <FaChevronDown />
                </a>
                <div className="dropdown-menu mega-menu column2 ">
                  <li className="dropdown-submenu">
                    <a
                      href="/creative"
                      className="dropdown-item "
                    >
                      Why Choose GITS
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item "
                      href="/digital-marketing"
                    >
                      GITS's 6-Step Marketing Process
                    </a>

                  </li>
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item "
                      href="/digital-marketing"
                    >
                      Need Digital Marketing?
                    </a>

                  </li>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  How We Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ contact-us">
                  Contact Us
                </a>
              </li>
              <div className="contact-button">
                <a className="" href="">
                  <p> <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                        <animateTransform attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></animateTransform>
                      </path>
                      <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                        <set id="lineMdPhoneCallLoop0" attributeName="opacity" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" to="1"></set>
                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.2s" values="4;8"></animate>
                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s" dur="0.3s" values="0;4"></animate>
                        <set attributeName="opacity" begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s" to="0"></set>
                      </path>
                      <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                        <set attributeName="opacity" begin="1s;lineMdPhoneCallLoop0.begin+3s" to="1"></set>
                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s;lineMdPhoneCallLoop0.begin+3s" dur="0.2s" values="10;20"></animate>
                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s" dur="0.3s" values="0;10"></animate>
                        <set attributeName="opacity" begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s" to="0"></set>
                      </path>
                    </g>
                  </svg> Request a Call</p>
                </a>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;