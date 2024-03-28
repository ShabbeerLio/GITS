import React from 'react'
import "./Partners.css"
import p1 from "../../Assets/Partners/microsoft-solution.png"
import p2 from "../../Assets/Partners/aws-partner.png"
import p3 from "../../Assets/Partners/kpmg.png"
import p4 from "../../Assets/Partners/google_partner.png"
import p5 from "../../Assets/Partners/google_cloud.png"

const Partners = () => {
    return (
        <div className='partners'>
            <h3>Our Partners</h3>
            <p>We are associated with these renowned tech giants to provide our clients with innovative development
                solutions.</p>
                <div className="partners-box">
                    <div className="partners-item">
                        <img src={p1} alt="" />
                    </div>
                    <div className="partners-item">
                        <img src={p2} alt="" />
                    </div>
                    <div className="partners-item">
                        <img src={p3} alt="" />
                    </div>
                    <div className="partners-item">
                        <img src={p4} alt="" />
                    </div>
                    <div className="partners-item">
                        <img src={p5} alt="" />
                    </div>
                </div>
        </div>
    )
}

export default Partners
