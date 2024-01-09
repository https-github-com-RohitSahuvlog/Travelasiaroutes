import React from "react";
import "../../css/JetExpeditions.css";
import ExpeditionCrousal from "./ExpeditionCrousal";
import { createGlobalStyle } from 'styled-components';
import Card from "../travel-group/Card/Card";

const data = [
  {
    link: "/travel-groups/nepal",
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

  },
  {
    link: "/travel-groups/3eyeshimalayas",
    thumbnail: "https://midasiaroutes.com/images/tours/thumbnials/37E16EE8-27A0-4B09-A7D4-761147AB1B1B870110290.jpeg",
    title: "Explore Tibet, Bhutan, and Nepal",
    description: "Uncover the charm of Tibet, Bhutan, and Nepal. Dive into rich cultures, ancient traditions, and stunning landscapes. Plus, discover the allure of the Philippines. Your unforgettable journey begins here!"
  },
  {
    link: "/travel-groups/india-unseen",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704100298/346657AB-0E75-4F62-A2F1-FB3199A56C791296070453_jfbzfa.jpg",
    title: "India's Unseen Legends",
    description: "Embark on a mesmerizing odyssey through the unseen legends of India",
  },
  {
    link: "/travel-groups/oman",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704125530/1573728245_oman.png_p6odjy.png",
    title: "Sultanate of Oman ",
    description: "Embark on a mesmerizing odyssey through the unseen legends of Oman",
  },
  {
    link: "/travel-groups/jordan",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704171456/aygpo6wg7hxajhm3glsq.jpg",
    title: "Sultanate of Jordan ",
    description: "In the footsteps of Lawrence of Arabia",
  },
  {
    link: "/travel-groups/iran",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704251364/533dc820eab8eae14a0c7560_r4rcjr.jpg",
    title: "Sultanate of Iran ",
    description: "In the footsteps of Lawrence of Iran",
  },
  {
    link: "/travel-groups/saudi-arabia",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704258953/0UZhVeo5-Saudi-tourism_odswhp.jpg",
    title: "Explore Saudi Arabia's Rich Heritage",
    description: "Discover the beauty of Saudi Arabia with its rich heritage, cultural wonders, and heartwarming hospitality.",
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
