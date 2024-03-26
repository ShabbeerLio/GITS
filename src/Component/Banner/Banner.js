import React from 'react'
import "./Banner.css"
import Bimg from "../../Assets/Banner1.jpg"
import { IoCall } from "react-icons/io5";

const Banner = (props) => {

    return (
        <>
            <div className='Banners' id={props.id}>
                <div className="banner-image">
                    <img src={Bimg} alt="" />
                </div>
                <div className="Banners-detail">
                    <div className="banner-title">
                        <h1>SEO Company Noida</h1>
                    </div>
                    <div className="banner-desc">
                        <h4>SEO is the most powerful source to get organic traffic on a website. SEO helps a business grows organically and established itself as a brand. Being the SEO company is Noida, we offer authentic SEO services.</h4>
                    </div>
                    <div className="banner-button">
                        <p><IoCall /> Call Now</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
