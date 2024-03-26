import React, { useEffect, useState } from 'react'
import "./Footer.css"
import Logo from "../../Logo/gits.png"
import Wave from '../Wave/Wave'

const Footer = (props) => {

    return (
        <>
            <div className="footer">
                <Wave />
                <div className="footer-main">
                    <div className="footer-detail">
                        <img src={Logo} alt="" />
                        <p>We prioritize customer satisfaction and security. Trust us to be your go-to key maker.</p>
                    </div>
                    <div className="quick-link">
                        <h2>Quick Link</h2>
                        <ul>
                            <li>
                                <a href="/about">About Our Company</a>
                            </li>
                            <li>
                                <a href="/projects">Recent Projects</a>
                            </li>
                            <li>
                                <a href="/blogs"> Latest Blogs</a>
                            </li>
                            <li>
                                <a href="/help">Help Desk</a>
                            </li>
                            <li>
                                <a href="/career">Career With Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-services">
                        <h2>Services</h2>
                        <ul>
                            <li>SEO</li>
                            <li>PPC</li>
                            <li>Social Media</li>
                            <li>Website Design</li>
                            <li>Content Marketing</li>
                            <li>Branding</li>
                            <li>Remarketing</li>
                            <li>CRO</li>
                            <li>Inbound Marketing</li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h2>Contact </h2>
                        <ul>
                            <li>
                                <p>

                                </p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus!
                            </li>
                            <li>
                                <p>

                                </p>
                                <a href="tel: +91">
                                    +91 9876543210
                                </a>
                            </li>
                            <li>
                                <p>

                                </p>
                                <a href="tel: +91">
                                    +91 9876543210
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-down">
                    <div className="footer-copyright">
                        <p>© 2024 Global IT Sources</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
