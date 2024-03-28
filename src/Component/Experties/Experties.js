import React from 'react'
import "./Experties.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Experties = () => {
    return (
        <div className='Experties'>
            <OwlCarousel
                className='owl-theme'
                items={6}
                loop margin={10}
                nav>
                <div className='item'>
                    <div className="item-image">
                        <img src="https://images.unsplash.com/photo-1708443683276-8a3eb30faef2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <span className="indot"></span>
                    <h5>Automobile</h5>
                </div>
                <div className='item'>
                    <div className="item-image">
                        <img src="https://images.unsplash.com/photo-1707707289494-af5b6017f7ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDN8fHxlbnwwfHx8fHw%3D" alt=""></img>
                    </div>
                    <span className="indot"></span>
                    <h5>Services & New-Age Business</h5>
                </div>
                <div className='item'>
                    <div className="item-image">
                        <img src="https://media.istockphoto.com/id/1189491089/photo/profile-view-of-young-happy-indian-businessman-in-suit-smiling.webp?b=1&s=170667a&w=0&k=20&c=xJKn2CscIg4ynFdpDBv0jnkRryVeu3SzQV-jnwSAMaQ=" alt=""></img>
                    </div>
                    <span className="indot"></span>
                    <h5>Consumer Technology</h5>
                </div>
                <div className='item'>
                    <div className="item-image">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt=""></img>
                    </div>
                    <span className="indot"></span>
                    <h5>Banking & Insurance</h5>
                </div>
                <div className='item'>
                    <div className="item-image">
                        <img src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt=""></img>
                    </div>
                    <span className="indot"></span>
                    <h5>Industrial & Manufacturing</h5>
                </div>
                <div className='item'>
                    <div className="item-image">
                        <img src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt=""></img>
                    </div>
                    <span className="indot"></span>
                    <h5>FMCG</h5>
                </div>
                <div className='item'>
                    <div className="item-image">
                        <img src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt=""></img>
                    </div>
                    <span className="indot"></span>
                    <h5>Healith & Wellness</h5>
                </div>
                <div className='item'>
                    <div className="item-image">
                        <img src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt=""></img>
                    </div>
                    <span className="indot"></span>
                    <h5>Travel & Lifestyle</h5>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default Experties
