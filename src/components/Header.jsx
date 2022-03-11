import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div id='main'>
        <Navbar />
        <div className='name'>
          <h1><span>Launch your app</span> With Confidence and Creativity</h1>
          <p className='details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, asperiores modi accusantium, quisquam facere tenetur similique praesentium fugiat minima distinctio optio sit ipsa fuga. Qui ducimus magni debitis saepe autem?</p>
          <a href='#' className='cv-btn'>Download</a>
        </div>
    </div>
  )
}

export default Header