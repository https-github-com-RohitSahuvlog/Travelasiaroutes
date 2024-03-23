import React from "react";
import "../../css/TestimonialSection.css";
import Card from "./Card";

const carousalData = [
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693201416/nzn8rg4b0nj9iwhowjio.jpg",
    heading: "Trail-blaze Uncharted Discoveries",
    para: "Venture beyond the ordinary. Uncover hidden gems that remain a secret from most. Embrace both iconic highlights and off-the-radar treasures, creating a truly enriched and unparalleled journey.",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693226848/dqpl5twt3coxnvtw0jmi.jpg",
    heading: "Seamless Luxury",
    para: "Elevate Your Experience with All-Inclusive Comfort. Indulge in Top-Rated Restaurants and Hotels, Unlocking Unsurpassed Value on Your Journey.",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693227339/fdtqeymwpgsyd942h8ly.jpg",
    heading: "Our Hand-Crafted Experiences",
    para: "Crafting bespoke journeys is our artistry. Our local travel experts meticulously weave unique itineraries, painting your desires into travel reality for an extraordinary, personalized adventure of a lifetime",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693227344/zz5xxvshl55l9bajajbj.jpg",
    heading: "Guided by Excellence",
    para: "Our Local Experts and Tour Leaders. Immerse in authentic culture with seasoned guides who epitomize professionalism, knowledge, and boundless enthusiasm for unparalleled experiences.",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693227351/siedbybinrwwwekhmats.jpg",
    heading: "Keep you Safe",
    para: "Backed by the World Travel and Tourism Council’s Safe Travels Stamp. Your Health and Well-being Are Our Priority.",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693227358/qk42o8hw9wwxwnokxonf.jpg",
    heading: "Intimate Group Experience",
    para: "Connect with fellow explorers in groups of a dozen, with a maximum of 8. Enjoy personalized attention and shared journeys that forge lasting connections.",
  },
  {
    image:
      "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1693227123/dh7opvs3eyfxynutxegb.jpg",
    heading: "Give Back",
    para: "Every destination, a chance to give back. Our local expertise and ground teams empower us to select impactful community and conservation projects that truly matter",
  },
];
export default function TestimonailSection() {
  return (
    <div className="testimonial-section">
      <div className="main-title text-center">
        <h2 className="title">Journeys That Flow At Your Pace </h2>
        <p className="paragraph">
          For Passionate Travellers and Nature Lovers.
        </p>
      </div>

      <div className="scrollable-section">
        {carousalData.map((carousal, index) => {
          return (
            <Card
              key={index}
              image={carousal.image}
              name={carousal.heading}
              para={carousal.para}
            />
          );
        })}
      </div>
    </div>
  );
}
