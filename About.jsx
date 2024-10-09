import React from 'react'
import './About.css'
import about_us from '../assets/volunteer.jpg'
const About = () => {
  return (
    <>
    <h1 className='about-title'>About Us</h1>
    <div className='about'>
        <div className='about-left'>
            <img src={about_us} className='about-img' alt="about"/>
        </div>
        <div className='about-right'>
            <h3 className='about-heading'>Who are we and what we do?</h3>
            <p>At Our Ngo, our mission is to empower communities by providing the tools, resources, and support they need to create sustainable change. We envision a world where every individual has the opportunity to thrive, regardless of their background or circumstances. Our work is driven by a commitment to equality, justice, and compassion, ensuring that everyone we serve can build a brighter, more resilient future. Through our dedicated programs and initiatives, we strive to make a lasting impact on the lives of those who need it most, fostering a culture of inclusivity and hope.</p>
        </div>
    </div>
    </>
    
  )
}

export default About