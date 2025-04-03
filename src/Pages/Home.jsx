import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Client from '../Components/Client'
import About from '../Components/About'
import Count from '../Components/Count'
import Design from '../Components/Design'
import Card from '../Components/Card'
import Demo from '../Components/Demo'
import Footer from '../Components/Footer'
import Scroll from '../Components/Scroll'


const Home = () => {
  return (
    <div>
        <Navbar/>
        
        <Hero/>
        <Scroll/>
        <Client/>
        <About/>
        <Count/>
        <Design/>
        <Card/>
        <Demo/>
        <Footer/>
    </div>
  )
}

export default Home