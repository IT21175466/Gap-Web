
import React from 'react'
import '../HomePage/HomePage.css';
import Home_image from '../HomePage/LandingPage.png';

const HomePage = () => {
  return (
    <div className='custom-container'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='custom-text-h1'>Explore The World And Discover Your Potential</h1>
            <p className='custom-text-p'>Connect with industry pros, discover opportunities, and showcase your skills. Join a thriving community, and empower your future. Your journey starts here!</p>
            <button class="btn custom-button3 my-2 my-sm-3" type="submit">Register for free</button>

          </div>
          <div className='col'>
            <img src={Home_image} alt='Your Image' className='img-fluid p-5' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;