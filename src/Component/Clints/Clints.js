import React from 'react'
import "./Clints.css"
import ClintsData from './ClintsData'

const Clints = () => {
    return (
        <div className='clints'>
            <h1>SOME OF OUR ESTEEMED CLIENTS</h1>
            <p>We are proud to have eminent partners who have supported us all along this journey to help us deliver maximum value and satisfy our clients to the fullest.</p>
            <div className="clints-images">
                {ClintsData.map((item) => (
                    <a href={item.link}>
                        <img src={item.cover} alt="" />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Clints
