import React, { useEffect, useState } from 'react'
import "./Footer.css"
import Logo from "../../Logo/gits.png"
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import SocialMedia from '../SocialMedia/SocialMedia';
import Star from '../Stars/Star';
import Faqs from '../Faqs/Faqs';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [reviews, setReviews] = useState(34)
    const [stars, setStars] = useState(4.5);
    return (
        <>
            <div className="footer">
                <div className="footer-main">
                    {/* <Faqs/> */}
                    <div className="footer-items">
                        <div className="footer-detail">
                            <img src={Logo} alt="" />
                            <p>
                                <span><FaPhone /></span>
                                <Link to="tel: 1204151836">120-4151836</Link>
                            </p>
                            <p>
                                <span><FaPhone /></span>
                                <Link to="tel: +919958732814">+91 9958732814</Link>
                            </p>
                            <p>
                                <span><FaEnvelope /></span>
                                <Link to="mailto:info@globalitsources.com"> info@globalitsources.com</Link>
                            </p>
                            <SocialMedia />
                        </div>
                        <div className="quick-link">
                            <h4>Quick Link</h4>
                            <ul>
                                <li>
                                    <Link to="/about-us">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/projects">Projects</Link>
                                </li>
                                <li>
                                    <Link to="/help">Help Desk</Link>
                                </li>
                                <li>
                                    <Link to="/career">Career With Us</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-services">
                            <h4>Services</h4>
                            <ul>
                                <li>
                                    <Link to="">Mobile App Development</Link>
                                </li>
                                <li>
                                    <Link to="">web App Development</Link>
                                </li>
                                <li>
                                    <Link to="">Mobile App Design</Link>
                                </li>
                                <li>
                                    <Link to="">CRM Software Development</Link>
                                </li>
                                <li>
                                    <Link to="">Mobile App Testing</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-industries">
                            <h4>Industries</h4>
                            <ul>
                                <li>
                                    <Link to="">E-Governance</Link>
                                </li>
                                <li>
                                    <Link to="">Finance</Link>
                                </li>
                                <li>
                                    <Link to="">Healthcare</Link>
                                </li>
                                <li>
                                    <Link to="">E-Commerce</Link>
                                </li>
                                <li>
                                    <Link to="">Electric Vehicle</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-technologies">
                            <h4>Technologies</h4>
                            <ul>
                                <li>
                                    <Link to="">Artificial Intelligence</Link>
                                </li>
                                <li>
                                    <Link to="">Blockchain</Link>
                                </li>
                                <li>
                                    <Link to="">IoT</Link>
                                </li>
                                <li>
                                    <Link to="">Data Science</Link>
                                </li>
                                <li>
                                    <Link to="">AR/VR</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-down">
                    <div className="footer-copyright">
                        <p>© 2024 Global IT Sources</p>
                        <Star stars={stars} reviews={reviews} text={"reviews"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
