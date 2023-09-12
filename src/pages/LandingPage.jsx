import React from "react";

import styled from "@emotion/styled";
import image from "../images/mapbackground.png";
import LandingCarousal from "../components/LandingPage/LandingCarousal";
import AboutUsSection from "../components/LandingPage/AboutUsSection";
import AwardSection from "../components/LandingPage/AwardSection";
import TravelVlog from "../components/LandingPage/TravelVlog";
import TestimonailSection from "../components/LandingPage/TestimonailSection";
import JetExpeditions from "../components/LandingPage/JetExpeditions";
import Newsletter from "../components/LandingPage/Newsletter";
import ScrollVideoSection from "../components/LandingPage/ScrollVideoSection";
import Footer from "../components/LandingPage/Footer";
import data from "../components/Testinomial/data.json";
import Testimonial from "../components/Testinomial/Testimonial";
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
      <Testimonial testimonialData={data} />
      <Footer />
    </Landingpage>
  );
}
