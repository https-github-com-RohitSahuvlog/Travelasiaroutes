import React from 'react'
import HomePageLandingSection from '../components/HomePageLandingSection'
import AboutUsSection from '../components/AboutUsSection'
import FestivalSection from '../components/FestivalSection'
import TestimonailSection from '../components/TestimonailSection'
import WhyUsSection from '../components/WhyUsSection'
import Newsletter from '../components/Newsletter'
import ScrollVideoSection from '../components/ScrollVideoSection'
import JetExpeditions from '../components/JetExpeditions'
import SliderComponent from '../components/SliderComponent'
import TravelVlog from '../components/TravelVlog'
import LandingCarousal from '../components/LandingCarousal'
import AwardSection from '../components/AwardSection'

export default function LandingPage() {
  return (
    <div className='landing-page'>
        {/* <HomePageLandingSection/> */}
        <LandingCarousal/>
        <AwardSection/>
        <FestivalSection/>
        <TravelVlog/>
        <AboutUsSection/>
        <TestimonailSection/>
        <WhyUsSection/>
        <JetExpeditions/>
        <Newsletter/>
        <ScrollVideoSection/>
    </div>
  )
}
