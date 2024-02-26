import React, { useState } from 'react'
import "./Company.css"
import CompanyData from './CompanyData'

const Company = () => {

    const companyData = useState(CompanyData);
    
    return (
        <div className='Company'>
            <div className="Company-box">
                {companyData[0].map((item) => (
                    <>
                        <div className="Company-boxes">
                            <img src={item.cover} alt="" />
                            {item.cover}
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Company
