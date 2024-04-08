import React, { useEffect, useState } from 'react'
import "./Footer.css"
import Logo from "../../Logo/gits.png"
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import SocialMedia from '../SocialMedia/SocialMedia';
import Star from '../Stars/Star';
import Faqs from '../Faqs/Faqs';

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
                                <span><FaPhone/></span>
                                <a href="">120-4151836</a>
                            </p>
                            <p>
                                <span><FaPhone/></span>
                                <a href="">9958732814</a>
                            </p>
                            <p>
                                <span><FaEnvelope/></span>
                                <a href="">info@globalitsources.com</a>
                            </p>
                            <SocialMedia/>
                        </div>
                        <div className="quick-link">
                            <h4>About Us</h4>
                            <ul>
                                <li>
                                    <a href="/about">Team</a>
                                </li>
                                <li>
                                    <a href="/projects">Contact Us</a>
                                </li>
                                <li>
                                    <a href="/blogs"> Careers</a>
                                </li>
                                <li>
                                    <a href="/help">Portfolio</a>
                                </li>
                                <li>
                                    <a href="/career">Blogs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-services">
                            <h4>Services</h4>
                            <ul>
                                <li>
                                    <a href="">Mobile App Development</a>
                                </li>
                                <li>
                                    <a href="">web App Development</a>
                                </li>
                                <li>
                                    <a href="">Mobile App Design</a>
                                </li>
                                <li>
                                    <a href="">CRM Software Development</a>
                                </li>
                                <li>
                                    <a href="">Mobile App Testing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-industries">
                            <h4>Industries</h4>
                            <ul>
                                <li>
                                    <a href="">E-Governance</a>
                                </li>
                                <li>
                                    <a href="">Finance</a>
                                </li>
                                <li>
                                    <a href="">Healthcare</a>
                                </li>
                                <li>
                                    <a href="">E-Commerce</a>
                                </li>
                                <li>
                                    <a href="">Electric Vehicle</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-technologies">
                            <h4>Technologies</h4>
                            <ul>
                                <li>
                                    <a href="">Artificial Intelligence</a>
                                </li>
                                <li>
                                    <a href="">Blockchain</a>
                                </li>
                                <li>
                                    <a href="">IoT</a>
                                </li>
                                <li>
                                    <a href="">Data Science</a>
                                </li>
                                <li>
                                    <a href="">AR/VR</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-down">
                    <div className="footer-copyright">
                        <p>© 2024 Global IT Sources</p>
                        <Star stars={stars} reviews={reviews} text={"reviews"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
