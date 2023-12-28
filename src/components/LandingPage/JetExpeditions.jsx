import React from "react";
import "../../css/JetExpeditions.css";
import ExpeditionCrousal from "./ExpeditionCrousal";
import { createGlobalStyle } from 'styled-components';
import Card from "../travel-group/Card/Card";

const data = [
  {
    link: "/travel-groups/japan",
    thumbnail: "https://midasiaroutes.com/images/tours/thumbnials/104733483266635338.jpg", title: "Nepal Adventures", description: "Nepal Unveiled : Embark on Epic Adventures"
  },
  // { link:"japan",
  // thumbnail: "https://midasiaroutes.com/images/tours/thumbnials/1143620516535.jpg", title: "Splendors of Egypt", description: "THE SECRETS OF BANGLADESH, It’s Culture & Wildlife- Yes, it is Adventure!!" },
  // { link:"japan",
  // thumbnail: "https://midasiaroutes.com/images/tours/thumbnials/image_manager__teaser_girls_in_laos_costume_credit_visoot_-_stock753617940.jpg", description: "LANDLOCKED LAOS, The GOLDEN TRIANGLE & TEMPLES OF ANGKOR WAT" }
  {
    link: "/travel-groups/bangladesh",
    thumbnail: "https://airlinebd.com/wp-content/uploads/2021/06/Bangladesh-Tourist-Spots.jpg",
    title: "Discover the Charms of Bangladesh",
    description: "Explore the hidden treasures of this beautiful country and immerse yourself in the unique charm of Bangladesh."
  },
  {
    link: "/travel-groups/laos",
    thumbnail: "https://luxdev.lu/files/media/news/2022-09-12-2/B79I25341.jpeg",
    title: " Exploring the Mystique of Laos",
    description: "Laos Revealed: Embark on Epic Expeditions"
  },
  {
    link: "/travel-groups/philippines",
    thumbnail: "https://i.guim.co.uk/img/media/8e466cc4459e7dbbcd6160f594ebbee833307daf/209_392_3791_2275/master/3791.jpg?width=620&dpr=2&s=none",
    title: "Discovering the Enchantment of the Philippine",
    description: "Experience the allure of the Philippines, a beloved Asian tourist hotspot."
  },
  {
    "link": "/travel-groups/uzbekistan",
    "thumbnail": "https://lp-cms-production.imgix.net/2023-07/GettyImages-641704192.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
    "title": "Exploring the Rich History and Culture of Uzbekistan",
    "description": "Immerse yourself in the beauty and history of Uzbekistan, a Central Asian gem."

  }

]
export default function JetExpeditions() {
  const GlobalStyle = createGlobalStyle`

  .containerchild{
    width: 90%;
    margin:auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

     @media only screen and (max-width: 580px){
     grid-template-columns: repeat(1, 1fr);
    }
    @media only screen and (min-width: 580px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: 1000px){
      grid-template-columns: repeat(4, 1fr);
    }

  }
`;
  return (
    <div className="jet-expeditions-section">
      <h2 className="jetheading" style={{ borderBottom: "3px solid   #e4bd5a" }}>Our Signature Small Group Expeditions
      </h2>
      <span className="about-us-section-underline"></span>
      <p>
        Embark on a Once-in-a-Lifetime Journey – Highly Recommended for Passionate Travelers and Nature Lovers
      </p>
      {/* <ExpeditionCrousal /> */}
      <div className="containerTop" >
        <GlobalStyle />
        <div className="containerchild">

          {data?.map((item, index) => (
            <Card key={index} products={item} />
          ))}
        </div>

      </div>
    </div>
  );
}
