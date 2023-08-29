import React from "react";
import HomePageLandingSection from "../components/HomePageLandingSection";
import AboutUsSection from "../components/AboutUsSection";
import FestivalSection from "../components/FestivalSection";
import TestimonailSection from "../components/TestimonailSection";
import WhyUsSection from "../components/WhyUsSection";
import Newsletter from "../components/Newsletter";
import ScrollVideoSection from "../components/ScrollVideoSection";
import JetExpeditions from "../components/JetExpeditions";
import SliderComponent from "../components/SliderComponent";
import TravelVlog from "../components/TravelVlog";
import LandingCarousal from "../components/LandingCarousal";
import AwardSection from "../components/AwardSection";
import styled from "@emotion/styled";
import image from "../images/mapbackground.png";
const Landingpage = styled.div`
  background-image: url(${image});
`;

export default function LandingPage() {
  return (
    <Landingpage className="Landingpage">
      <LandingCarousal />
      <AwardSection />
      <TravelVlog />
      <AboutUsSection />
      <TestimonailSection />
      <JetExpeditions />
      <Newsletter />
      <ScrollVideoSection />
    </Landingpage>
  );
}
