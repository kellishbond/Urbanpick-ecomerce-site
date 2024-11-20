import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestsellers from '../components/Bestsellers'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Bestsellers />
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home