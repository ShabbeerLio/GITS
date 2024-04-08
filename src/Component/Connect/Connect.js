import React, { useRef, useState } from 'react'
import "./Connect.css"
import { IoLogoWhatsapp, IoLogoSkype } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";
import Faqs from '../Faqs/Faqs';

const Connect = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        user_name: '',
        user_number: '',
        user_email: '',
        message: ''
    });


    // Handle input changes and update the formData state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [messageSent, setMessageSent] = useState(false); // Track whether the message has been sent


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        setMessageSent(true);

        setTimeout(() => {
            setMessageSent(false);
        }, 2500);

        // emailjs.sendForm(
        //     'service_itw3fef',
        //     'template_4b6vwk8',
        //     form.current,
        //     'tXjdcsUNLR6f21ITO'
        // )
        //     .then((result) => {
        //         console.log(result.text);
        //         console.log("message sent")
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        // // Access the user's name, email, and message from the formData state
        const { user_name, user_number, user_email, message } = formData;

        console.log('Name:', user_name);
        console.log('Number:', user_number);
        console.log('Email:', user_email);
        console.log('Message:', message);

        setFormData({
            user_name: '',
            user_number: '',
            user_email: '',
            message: ''
        });
    };
    return (
        <>
        <div className='Connect'>
            <h3>Let's talk about you</h3>
            <p>Our team looks forward to hearing from you and these detail will help us to get back.</p>
            <div className="connect-main">
                <div className="connect-left">
                    <div className="profile-pic">
                        <img src="https://static.vecteezy.com/system/resources/previews/003/492/226/non_2x/side-view-of-positive-handsome-brunette-man-with-beard-in-white-shirt-standing-with-pleasure-smile-and-looking-away-with-joyful-expression-indoor-studio-shot-isolated-on-beige-background-free-photo.JPG" alt="" />
                        <img src="https://static.vecteezy.com/system/resources/previews/003/152/807/large_2x/portrait-of-young-man-with-glasses-on-a-black-background-free-photo.jpg" alt="" />
                    </div>
                    <h4>Consult our experts</h4>
                    <p>Elevate your journey and empower your choices with our experts' insightful guidance.</p>
                    <div className="contact-left-connect">
                        <button className="connect-button">
                            <p>Schedule a call <CgArrowLongRight /></p>
                        </button>
                        {/* <div className="connect-button">
                            <span className="button-content">Schedule a call <CgArrowLongRight /></span>
                        </div> */}
                        <div className="connect-items">
                            <a href="">
                                <IoLogoWhatsapp />
                            </a>
                            <a href="">
                                <IoLogoSkype />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="connect-right">
                    <div className="contactUs-box">
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="contact-form-box">
                                <div className='input-box'>
                                    <label>Name</label>
                                    <input
                                        name="user_name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleInputChange} required
                                    />
                                </div>

                                <div className='input-box'>
                                    <label>Email </label>
                                    <input
                                        name="user_email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange} required
                                    />
                                </div>
                                <div className='input-box'>
                                    <label>Number</label>
                                    <input
                                        name="user_number"
                                        type="number"
                                        value={formData.number}
                                        onChange={handleInputChange} required
                                    />
                                </div>
                                <div className='input-box'>
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange} required
                                    />
                                </div>
                            </div>
                            <div className="contact-form-box-button">
                                <button className="connect-button" type="submit">
                                    <p>Get a free Quote<CgArrowLongRight /></p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            <Faqs/>
        </>
    )
}

export default Connect
