import React from 'react'
import "./FeaturedBox.css"

const FeaturedBox = () => {
    return (
        <>
            <div className="featured-detail-box">
                <div className="featured-detail-box-left">
                    <div className="box-heading">
                        <p>Advertising</p>
                        <p>Campign India</p>
                    </div>
                    <h4>heading of the featured-card</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aperiam. Possimus explicabo ducimus repudiandae eaque eius minus ea ex voluptate.</p>
                </div>
                <div className="featured-detail-box-left">
                    <div className="box-heading">
                        <p>Advertising</p>
                        <p>Campign India</p>
                    </div>
                    <h4>heading of the featured-card</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aperiam. Possimus explicabo ducimus repudiandae eaque eius minus ea ex voluptate.</p>
                </div>
            </div>
            <div className="featured-viewall">
                <p>View all</p>
            </div>
            <div className="featured-detail-box2">
                <div className="featured-detail-box2-left">
                    <h3>subheading of the card</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab deserunt nesciunt eius reprehenderit voluptatem, aperiam culpa maiores similique ratione!</p>
                </div>
                <div className="featured-detail-box2-left">
                    <img src="https://images.unsplash.com/photo-1690885744537-1ff88d3ff9ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </>
    )
}

export default FeaturedBox
