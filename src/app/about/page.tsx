import React from 'react'

const About = () => {
  return (
    <div className='about-container'>
      <img className='myimg' src="about-pic.png" alt="bg-pic" />
      <div className='overlay'>
        <h1 className='about-heading'>About Us</h1>
        <p className='para'>
          Welcome to My Watches, we believe that every moment matters. Our collection blends timeless
          elegance with modern craftsmanship, offering watches that are both functional and stylish. 
          Made with precision and attention to detail, each piece is designed to last. From classic 
          leather straps to sleek stainless steel, our watches are made from high-quality materials.
          Whether for everyday wear or special occasions, My Watches provides versatile designs for 
          both men and women. We create more than just accessories; we create pieces that reflect your unique 
          style. Trust My Watches to keep you on time, in style.
        </p> 
      </div>
    </div>
  )
}

export default About;
