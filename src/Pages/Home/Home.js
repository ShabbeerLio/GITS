import React from 'react'
import "./Home.css"
import FeaturedBox from '../../Component/FeaturedBox/FeaturedBox'
// import WorkBox from '../../Component/WorkBox/WorkBox'
import Solution from '../../Component/Solution/Solution'
import Experties from '../../Component/Experties/Experties'
import Addver from '../../Component/Advmt/Addver'
import Company from '../../Component/Company/Company'
import Review from '../../Component/Review.js/Review'
import Banner from '../../Component/Banner/Banner'
// import Footer from '../../Component/Footer/Footer'
import Connect from '../../Component/Connect/Connect'
import Partners from '../../Component/Partners/Partners'
import Portfolio from '../../Component/Portfolio/Portfolio'
import Services from '../../Component/Services/Services'

const Home = () => {
  return (
    <div className='Home'>
      <div className="home-head">
        <Banner />
      </div>
      {/* <div className="home-featured">
        <h2>Featured in the news</h2>
        <FeaturedBox />
      </div> */}
      {/* <div className="home-solution">
        <Solution />
      </div> */}
      {/* <div className="home-experties">
        <h2>Our Industry Expertise</h2>
        <Experties />
      </div> */}
      {/* <div className="home-advertise">
        <div className="advertise-box">
          <Addver />
        </div>
      </div> */}
      {/* <div className="home-company">
        <Company />
      </div> */}
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