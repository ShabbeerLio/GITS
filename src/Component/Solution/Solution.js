import React, { useState } from 'react'
import "./Solution.css"
import BrandData from './BrandData'
import TechData from './TechData';
import PRData from './PRData';
import DigitalData from './DigitalData';
import Creative from './Creative';

const Solution = () => {

    const BrandDatas = useState(BrandData);
    const TechDatas = useState(TechData);
    const PRDatas = useState(PRData);
    const DigitalDatas = useState(DigitalData);
    const CreativeDatas = useState(Creative);

    return (
        <div className='Solution'>
            <div className="solution-left">
                <h2>Our Solution</h2>
                <p>ANTS’ customised power solutions and a mighty pack of genius minds will ensure every marketing brief finds its worth. So, ready to scale up?</p>
                <div className="featured-viewall solution-btn">
                    <p>View all</p>
                </div>
            </div>
            <div className="solution-right">
                <div className="solution-right-box">
                    <div className="solution-right-row">
                        <h4>Brand</h4>
                        <ul>
                            {BrandDatas[0].map((item) => (
                                <>
                                    <li key={item.id}>{item.title}</li>
                                </>
                            ))}
                        </ul>
                        <h4>Tech</h4>
                        <ul>
                            {TechDatas[0].map((item) => (
                                <>
                                    <li key={item.id}>{item.title}</li>
                                </>
                            ))}
                           </ul>
                        <h4>PR</h4>
                        <ul>
                        {PRDatas[0].map((item) => (
                                <>
                                    <li key={item.id}>{item.title}</li>
                                </>
                            ))}
                           </ul>
                    </div>
                    <div className="solution-right-row">
                        <h4>Digital</h4>
                        <ul>
                        {DigitalDatas[0].map((item) => (
                                <>
                                    <li key={item.id}>{item.title}</li>
                                </>
                            ))}
                          </ul>
                    </div>
                    <div className="solution-right-row">
                        <h4>Creative</h4>
                        <ul>
                        {CreativeDatas[0].map((item) => (
                                <>
                                    <li key={item.id}>{item.title}</li>
                                </>
                            ))}
                             </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution
