import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination'
import  Features  from '../components/Features'
import GalleryComp from '../components/GalleryComp'
import Banner from '../components/Banner'
import Contact from '../components/ContactComp'
const Home = () => {
  
  return (
    <div>
        <Hero />
        <FeatureDestination/>
        <Features/>
        <GalleryComp/>
        <Banner/>
          <Contact/>


    </div>
  )
}

export default Home
