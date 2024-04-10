import React from 'react'
import "./SocialMedia.css"
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const SocialMedia = () => {
    return (
        <>
            <div className="media-items">
                <Link to="https://twitter.com/globalitsources">
                    <p>
                        <FaTwitter />
                    </p>
                </Link>
                <Link to="https://www.pinterest.com/globalitsources/">
                    <p>
                        <FaInstagram />
                    </p>
                </Link>
                <Link to="https://www.facebook.com/globalitsourcescompany/">
                    <p>
                        <FaFacebookF />
                    </p>
                </Link>
                <Link to="https://www.youtube.com/user/GlobalITSources">
                    <p>
                        <FaYoutube />
                    </p>
                </Link>
                <Link to="https://www.linkedin.com/company/gits-projects-pvt-ltd">
                    <p>
                        <FaLinkedinIn />
                    </p>
                </Link>
            </div>
        </>
    )
}

export default SocialMedia
