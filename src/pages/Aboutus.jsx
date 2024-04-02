import React from 'react'
import Footer from './Footer'
import NavBar from '../component/mainPage/NavBar'
import './styles.css';

import ChildNav from '../component/mainPage/ChildNav'

const Aboutus = () => {
  return (
    <>
    <NavBar/>
    <ChildNav/>
    <div className="container mx-auto px-4 py-8">
    <div className='bg-customs h-[300px] flex flex-col justify-center items-center text-blue-900 mb-4 z-30 '>
    <h1 className="text-6xl font-bold mb-8 text-center">About Us</h1> 
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="text-lg">
        <h2 className="text-xl font-semibold mb-2">Welcome to Our Platform</h2>
        <p className="mb-4">
          Welcome to our online doctors appointment platform! We are dedicated to revolutionizing the way people access healthcare services.
          Our mission is to provide convenient and accessible healthcare solutions to everyone, regardless of their location or schedule.
        </p>
        <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Convenient online booking system</li>
          <li>Experienced and qualified doctors</li>
          <li>Secure and confidential appointments</li>
          <li>Easy access to medical records and prescriptions</li>
          <li>Affordable consultation fees</li>
        </ul>
      </div>
      <div className="text-lg">
        <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim, ligula nec tincidunt consequat, arcu felis interdum ipsum, ut vulputate purus ligula id eros. Integer dignissim tellus et dui malesuada, id lobortis felis tempus.
        </p>
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default Aboutus