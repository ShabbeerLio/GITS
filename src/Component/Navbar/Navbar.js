import React from 'react'
import "./Navbar.css"
import gits from "../../Logo/gits.png"

const Navbar = () => {
    return (
        <div className='navBar'>
            <div className="navBar-main">
                <div className="navBar-logo">
                    <img src={gits} alt="" />
                </div>
                <div className="navBar-menu">
                    <ul>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/case-studies">Case Studies</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/trends">Cool Gai's Trends</a></li>
                        <li><a href="/career">Career</a></li>
                        <li><a href="/ contact-us">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
