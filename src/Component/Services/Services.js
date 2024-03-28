import React from 'react'
import "./Services.css"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";

const Services = () => {
    return (
        <div className='Services'>
            <h3>What We Bring to the Table</h3>
            <p>We transform ideas into realities by providing end-to-end product development solutions from strategizing to production.</p>
            <ul>
                <li className='strategy' id='card_1'>
                    <div className="services-box">
                        <div className="service-box-heading">
                            <h3>Strategy</h3>
                            <p>We sketch an effective schematic to superimpose market trends with business requirements.</p>
                        </div>
                        <div className="service-box-main">
                            <div className="service-box-left">
                                <h4><IoIosCheckmarkCircleOutline/>Business Analysis <CgArrowLongRight/></h4>
                                <ul>
                                    <li>We conduct a detailed market analysis, monitor ROI, and hand risk management.</li>
                                    <li>Our business analysts carry out in-depth research and perform competitive analysis</li>
                                </ul>
                            </div>
                            <div className="service-box-right"></div>
                        </div>
                    </div>
                </li>
                <li className='design' id='card_2'>
                    <div className="services-box">
                        <div className="service-box-heading">
                            <h3>Design</h3>
                            <p>We belive in the essentiality of a seamless and intuitive design in enhancing user experience.</p>
                        </div>
                        <div className="service-box-main">
                            <div className="service-box-left">
                                <h4><IoIosCheckmarkCircleOutline/>Business Analysis <CgArrowLongRight/></h4>
                                <ul>
                                    <li>We conduct a detailed market analysis, monitor ROI, and hand risk management.</li>
                                    <li>Our business analysts carry out in-depth research and perform competitive analysis</li>
                                </ul>
                            </div>
                            <div className="service-box-right"></div>
                        </div>
                    </div>
                </li>
                <li className='digital' id='card_3'>
                    <div className="services-box">
                        <div className="service-box-heading">
                            <h3>Digital Governance</h3>
                            <p>We deliver e-governance services for an extensive user base across diverse government segments.</p>
                        </div>
                        <div className="service-box-main">
                            <div className="service-box-left">
                                <h4><IoIosCheckmarkCircleOutline/>Business Analysis <CgArrowLongRight/></h4>
                                <ul>
                                    <li>We conduct a detailed market analysis, monitor ROI, and hand risk management.</li>
                                    <li>Our business analysts carry out in-depth research and perform competitive analysis</li>
                                </ul>
                            </div>
                            <div className="service-box-right"></div>
                        </div>
                    </div>
                </li>
                <li className='development' id='card_4'>
                    <div className="services-box">
                        <div className="service-box-heading">
                            <h3>End-to-end Product Development</h3>
                            <p>In all of our projects we ensure an immersive end-to-end product development experience.</p>
                        </div>
                        <div className="service-box-main">
                            <div className="service-box-left">
                                <h4><IoIosCheckmarkCircleOutline/>Business Analysis <CgArrowLongRight/></h4>
                                <ul>
                                    <li>We conduct a detailed market analysis, monitor ROI, and hand risk management.</li>
                                    <li>Our business analysts carry out in-depth research and perform competitive analysis</li>
                                </ul>
                            </div>
                            <div className="service-box-right"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Services
