import React from 'react'
import "./Portfolio.css"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const countUpOptions = {
        start: 0,
        duration: 5,
        useEasing: true,
        separator: ',',
    };
    return (
        <div className='Portfolio' ref={ref}>
            <h3>Entrusted for business shaping approaches.</h3>
            <p>Not just a typical mobile application development company, but a transformative tech partner for you</p>
            <div className="portfolio-counter">
                <div className="pfcounter-items">
                    <h1>{inView ? <CountUp end={10} {...countUpOptions} /> : 0}+</h1>
                    <p>Professional Experience</p>
                </div>
                <div className="pfcounter-items">
                    <h1>{inView ? <CountUp end={100} {...countUpOptions} /> : 0}+</h1>
                    <p>Products & Solutions Delivered</p>
                </div>
                <div className="pfcounter-items">
                    <h1>{inView ? <CountUp end={80} {...countUpOptions} /> : 0}%</h1>
                    <p>Recurring Clints</p>
                </div>
                <div className="pfcounter-items">
                    <h1>{inView ? <CountUp end={6} {...countUpOptions} /> : 0}+</h1>
                    <p>Experts</p>
                </div>
                <div className="pfcounter-items">
                    <h1>{inView ? <CountUp end={360} {...countUpOptions} /> : 0}&deg;</h1>
                    <p>Design Solution Delivered</p>
                </div>
               
            </div>
        </div>
    )
}

export default Portfolio
