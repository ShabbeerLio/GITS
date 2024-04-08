import React from 'react'
import "./HomeAbout.css"
import img1 from "../../Assets/Home/homeAbout1.jpg"
import img2 from "../../Assets/Home/homeAbout2.jpg"
import { CgArrowLongRight } from "react-icons/cg";

const HomeAbout = () => {
    return (
        <div className='homedetail'>
            <div className="homedetail-head">
                <h1>Digital Marketing Agency in Noida</h1>
                <p>Global IT Sources is a full-service Digital Marketing Agency that has been helping brands thrive online with its services since its advent in 2013 with holistic solutions that help you generate quality leads. </p>
            </div>
            <div className="homedetail-body">
                <div className="home-des">
                    <span>GITS</span>
                </div>
                <div className="detail-body-left">
                    <h2> Starting right from generating a good volume of quality leads, we accelerate processes and the efficiency of lead conversion through automation and efficient digital marketing.</h2>
                </div>
                <div className="detail-body-right">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className="homedetail-body1">
                <div className="detail-body1-right">
                    <img src={img2} alt="" />
                </div>
                <div className="detail-body1-left">
                    <h3>Stand Out of the Crowd. Generate More Leads and Close More Deals!</h3>
                    <p>We understand that the ease of access to the internet has given your potential prospects access to more information and knowledge. Their behavior in choosing and buying products and services has changed. </p>
                    <p>Hence, Global IT Sources has developed certain strategies and automation related to SEO, Web Design, Content Writing, Social Media Marketing, E-Commerce Solutions, and Google PPC Management for businesses like yours to help increase your sales and marketing efficiency and generate more ROI. </p>
                    <p>We can’t emphasize enough on the importance of Digital Marketing, so we'll let our number speak. Ever since we started in 2013, through our SEO services each of our customers has had an average 300% growth in leads. </p>
                    <button className="connect-button">
                        <p>Read More <CgArrowLongRight /></p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout
