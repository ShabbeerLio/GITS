import React from 'react'
import "./Home.css"
import Review from '../../Component/Review.js/Review'
import Banner from '../../Component/Banner/Banner'
import Connect from '../../Component/Connect/Connect'
import Partners from '../../Component/Partners/Partners'
import Portfolio from '../../Component/Portfolio/Portfolio'
import Services from '../../Component/Services/Services'
import Clints from '../../Component/Clints/Clints'
import HomeAbout from '../../Component/HomeAbout/HomeAbout'

const Home = () => {
  return (
    <div className='Home'>
      <div className="home-head">
        <Banner />
      </div>
      <div className="home-about">
        <HomeAbout />
      </div>
      <div className="home-items">
        <Clints />
      </div>
      <div className="home-items">
        <Services />
      </div>
      <div className="home-items-box">
        <div className="home-items">
          <Review />
        </div>
      </div>
      <div className="home-partners">
        <Partners />
      </div>
      <div className="home-portfolio">
        <Portfolio />
      </div>
      <div className="home-contactUs">
        <div className="home-items">
          <Connect />
        </div>
      </div>
    </div>
  )
}

export default Home