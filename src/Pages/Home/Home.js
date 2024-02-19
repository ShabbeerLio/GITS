import React from 'react'
import "./Home.css"
import FeaturedBox from '../../Component/FeaturedBox/FeaturedBox'
import WorkBox from '../../Component/WorkBox/WorkBox'

const Home = () => {
  return (
    <div className='Home'>
      <div className="home-head">
        Video
      </div>
      <div className="home-featured">
        <h2>Featured in the news</h2>
        <FeaturedBox/>
      </div>
      <div className="home-work">
        <h2>Our Work</h2>
        <WorkBox/>
      </div>
    </div>
  )
}

export default Home