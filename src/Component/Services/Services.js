import React from 'react'
import "./Services.css"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";
import ServiceData from './ServiceData';

const Services = () => {

    return (
        <div className='Services'>
            <h3>What We Bring to the Table</h3>
            <p>We transform ideas into realities by providing end-to-end product development solutions from strategizing to production.</p>
            <ul>
                {ServiceData.map((item) => (
                    <li className={item.className} id={item.id}>
                        <div className="services-box">
                            <div className="service-box-heading">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                            <div className="service-box-main">
                                <div className="service-box-left">
                                    {item.detail.map((e) => (
                                        <>
                                            <div className="service-left-box">
                                                <h4><IoIosCheckmarkCircleOutline />{e.name} <CgArrowLongRight /></h4>
                                                <ul>
                                                    {e.desc.map((i) => (
                                                        <li>{i.desc}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    ))}
                                </div>
                                <div className="service-box-right">
                                    <img src={item.cover} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Services
