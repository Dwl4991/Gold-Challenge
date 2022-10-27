import React, { useState } from 'react'
// import { Link } from "react-router-dom";
import HeroSection from '../../components/hero-section';
import OurServices from '../../components/our-services';
import Why from '../../components/why';
import './style.scss'
const Homepage = () => {
  const [name, setName] = useState('ade')
  const props = {
    name, 
    setName,
  }
  return (
    <div className='homepage'>
      <HeroSection {...props}  />
      <OurServices {...props}  />
      <Why {...props} />
    </div>
  )
}

export default Homepage