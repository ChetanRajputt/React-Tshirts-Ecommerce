import React from 'react'
import { ColorMonthSection, ExploreDesignSection, FeaturedProducts, GrabOfferSection, Hero, NewsLetterSection } from '../components/index'

const Home = () => {
  return (
    <main>
      <Hero />
      <ColorMonthSection />
      <GrabOfferSection />
      <FeaturedProducts />
      <ExploreDesignSection />
      <NewsLetterSection />
    </main>
  )
}

export default Home
