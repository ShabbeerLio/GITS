import React, { useState } from 'react'
import "./Review.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactOwlCarousel from 'react-owl-carousel';
import clutch from "../../Assets/Partners/clutch_white.png"
import Star from '../Stars/Star';
import { CgArrowLongRight } from "react-icons/cg";
import ReviewData from './ReviewData';

const Review = () => {

    const [stars, setStars] = useState(5);
    return (
        <div className='Review'>
            <h3>What Our Clints Have To Say</h3>
            <p> take pride in long-term relationships with our clients and appreciate their kind words for our on-time deliverables.</p>
            <div className="Review-box">
                <div className="review-box-left">
                    <div className="left-box-img">
                        <img src={clutch} alt="" />
                        <Star stars={stars} />
                    </div>
                    <div className="connect-button">
                        <span className="button-content">Go to Clutch <CgArrowLongRight /></span>
                    </div>
                    <div className="reviews-reviews">
                        <p>34 reviews</p>
                    </div>
                </div>
                <div className="review-box-right">

                    <ReactOwlCarousel
                        className='owl-theme'
                        items={2}
                        loop={Infinity}
                        margin={10}
                    >
                        {ReviewData.map((item) => (
                            <div className='Review-boxes' key={item.id}>
                                <div className='Review-box-image'>
                                    <img src={item.cover} alt="" />
                                    <Star stars={stars} />
                                </div>
                                <h4>{item.name}</h4>
                                <p>{item.brand}</p>
                                <div className="people-desc">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </ReactOwlCarousel>

                </div>

            </div>
        </div>
    )
}

export default Review
