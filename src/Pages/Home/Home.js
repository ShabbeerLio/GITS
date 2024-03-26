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
import Footer from '../../Component/Footer/Footer'

const Home = () => {
  return (
    <div className='Home'>
      <div className="home-head">
        <Banner />
      </div>
      <div className="home-featured">
        <h2>Featured in the news</h2>
        <FeaturedBox />
      </div>
      <div className="home-work">
        <h2>Our Work</h2>
        {/* <WorkBox/> */}
        work section
      </div>
      <div className="home-solution">
        {/* <h2>Our Solutions</h2> */}
        <Solution />
      </div>
      <div className="home-experties">
        <h2>Our Industry Expertise</h2>
        <Experties />
      </div>
      <div className="home-advertise">
        <div className="advertise-box">
          <Addver />
        </div>
      </div>
      <div className="home-company">
        {/* <h2>Our Industry Expertise</h2> */}
        <Company />
      </div>
      <div className="home-review">
        <div className="review-box">
          <Review />
        </div>
      </div>
      <div className="home-company">
        {/* <h2>Our Industry Expertise</h2> */}
        <Company />
      </div>
    </div>
  )
}

export default Home