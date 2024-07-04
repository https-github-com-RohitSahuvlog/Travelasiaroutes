import React, { useEffect, useState } from "react";
import "../../css/JetExpeditions.css";
import { createGlobalStyle } from 'styled-components';
import Card from "../travel-group/Card/Card";
import { useSelector } from "react-redux";

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

let initialData = [
  {
    link: "/travel-groups/nepal",
    thumbnail: "https://www.himalayaguides.com/wp-content/uploads/mountain-flight-nepal-everest.jpg",
    region: "Asia–Pacific",
    title: "Best of Nepal", description: "Nepal Unveiled : Embark on Epic Adventures"
  },
  // { link:"japan",
  // thumbnail: "https://midasiaroutes.com/images/tours/thumbnials/1143620516535.jpg", title: "Splendors of Egypt", description: "THE SECRETS OF BANGLADESH, It’s Culture & Wildlife- Yes, it is Adventure!!" },
  // { link:"japan",
  // thumbnail: "https://midasiaroutes.com/images/tours/thumbnials/image_manager__teaser_girls_in_laos_costume_credit_visoot_-_stock753617940.jpg", description: "LANDLOCKED LAOS, The GOLDEN TRIANGLE & TEMPLES OF ANGKOR WAT" }
  {
    link: "/travel-groups/bangladesh",
    thumbnail: "https://airlinebd.com/wp-content/uploads/2021/06/Bangladesh-Tourist-Spots.jpg",
    region: "Asia–Pacific",
    title: "Glories of Bangladesh",
    description: "Explore the hidden treasures of this beautiful country and immerse yourself in the unique charm of Bangladesh."
  },
  {
    link: "/travel-groups/laos",
    thumbnail: "https://luxdev.lu/files/media/news/2022-09-12-2/B79I25341.jpeg",
    region: "Asia–Pacific",
    title: " Landlocked Laos and Combodia",
    description: "Laos Revealed: Embark on Epic Expeditions"
  },
  {
    link: "/travel-groups/philippines",
    thumbnail: "https://i.guim.co.uk/img/media/8e466cc4459e7dbbcd6160f594ebbee833307daf/209_392_3791_2275/master/3791.jpg?width=620&dpr=2&s=none",
    region: "Asia–Pacific",
    title: "Island of Philippines",
    description: "Experience the allure of the Philippines, a beloved Asian tourist hotspot."
  },
  {
    "link": "/travel-groups/uzbekistan",
    "thumbnail": "https://lp-cms-production.imgix.net/2023-07/GettyImages-641704192.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
    region: "Asia–Pacific",
    "title": "Uzbekistan & Kyrgyzstan",
    "description": "Immerse yourself in the beauty and history of Uzbekistan, a Central Asian gem."

  },
  // {
  //   link: "/travel-groups/3eyeshimalayas",
  //   thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1711857300/m160822019_u66yv0.jpg",
  //   region: "Asia–Pacific",
  //   title: "3 Eyes of Himalayas- Best of Tibet, Bhutan and Nepal",
  //   description: "Uncover the charm of Tibet, Bhutan, and Nepal. Dive into rich cultures, ancient traditions, and stunning landscapes. Plus, discover the allure of the Philippines. Your unforgettable journey begins here!"
  // },
  {
    link: "/travel-groups/oman",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704125530/1573728245_oman.png_p6odjy.png",
    region: "MiddleEast",
    title: "Unexpected Oman-The Land of Frankincense",
    description: "Embark on a mesmerizing odyssey through the unseen legends of Oman",
  },
  {
    link: "/travel-groups/jordan",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704171456/aygpo6wg7hxajhm3glsq.jpg",
    region: "MiddleEast",
    title: "Gems of Jordan",
    description: "In the footsteps of Lawrence of Arabia",
  },
  {
    link: "/travel-groups/iran",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704251364/533dc820eab8eae14a0c7560_r4rcjr.jpg",
    region: "MiddleEast",
    title: "Iran ",
    description: "In the footsteps of Lawrence of Iran",
  },
  {
    link: "/travel-groups/saudi-arabia",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704258953/0UZhVeo5-Saudi-tourism_odswhp.jpg",
    region: "MiddleEast",
    title: "Beyond Borders- A Journey through Saudi Arabia",
    description: "Discover the beauty of Saudi Arabia with its rich heritage, cultural wonders, and heartwarming hospitality.",
  },
  {
    link: "/travel-groups/northern-india",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1710656540/0B9B7F39-B3D4-4C73-86E0-CD96FA993CB61417108072_vwqapu.jpg",
    region: "Asia–Pacific",
    title: "Northern India (A Spiritual Journey through Himalayas)",
    description: "A Spiritual Journey in India (Story of unseen Gems)",
  },
  {
    link: "/travel-groups/golden-triangle",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1711201433/61241721_kepayv.jpg",
    region: "Asia–Pacific",
    title: "Exploring the Mystique of the Golden Triangle",
    description: "Journey through the Riches of Frankincense & Golden Sands",
  },
  {
    link: "/travel-groups/landlock-laos-combodia",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1711257216/2AE71DED-1C67-4722-90A5-1695735C645A1232473463_bfuo3m.jpg",
    region: "Asia–Pacific",
    title: "Landlocked Laos & Life along Mekong with Combodia Extension",
    description: "(Small Group Journey)",
  },
  {
    link: "/travel-groups/india-kumbh",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1711944832/kumbh-mela-2025_qjfgi8.jpg",
    region: "Asia–Pacific",
    title: "India's Kumbh Mela Festival",
    description: "Explore India's sacred Kumbh Mela: engage with sadhus, boat rides, and spiritual wonders await.",
  },
  {
    link: "/travel-groups/babylon-baghdad",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1711949461/JMJPDK56U5DGNBJX3GXTUN4QMI_hzhgka.jpg",
    region: "MiddleEast",
    title: "The Journey to Cradle of Civilisation (Babylon to Baghdad)- ",
    description: "Embark on a captivating journey through time, from the ancient wonders of Babylon to the modern marvels of Baghdad",
  },
  {
    link: "/travel-groups/egypt-and-nile",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1712254046/0e_iokr1b.jpg",
    region: "MiddleEast",
    title: "Egypt and The Nile",
    description: "Join us on an unforgettable expedition along the legendary Nile River, as we unravel the mysteries of ancient Egypt's iconic landmarks and immerse ourselves in the vibrant culture of modern-day Cairo.",
  }
]
export default function JetExpeditions() {
  const itineraryData = useSelector((state) => state.travelPackages.itineraryTripData);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const formattedData = itineraryData.map((item) => ({
      link: `/travel-groups/${item.tripName}`,
      thumbnail: item.tripImage,
      region: item.region || "Asia–Pacific",
      title: item.tripTitle,
      description: item.tripSubtitle,
    }));

    setData((prevData) => [...prevData, ...formattedData]);
  }, [itineraryData]);

  return (
    <div className="jet-expeditions-section">

      <div className="main-title text-center">
        <h2 className="title">Our Signature Small Group Expeditions </h2>
        <p className="paragraph">
          Embark on a Once-in-a-Lifetime Journey – Highly Recommended for Passionate Travelers and Nature Lovers
        </p>
      </div>

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
