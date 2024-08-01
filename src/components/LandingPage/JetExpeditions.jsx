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
    link: "/travel-groups/laos",
    thumbnail: "https://luxdev.lu/files/media/news/2022-09-12-2/B79I25341.jpeg",
    region: "Asia–Pacific",
    title: " Landlocked Laos and Combodia",
    description: "Laos Revealed: Embark on Epic Expeditions"
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
    link: "/travel-groups/saudi-arabia",
    thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704258953/0UZhVeo5-Saudi-tourism_odswhp.jpg",
    region: "MiddleEast",
    title: "Beyond Borders- A Journey through Saudi Arabia",
    description: "Discover the beauty of Saudi Arabia with its rich heritage, cultural wonders, and heartwarming hospitality.",
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
      region: item?.tripRegion || "",
      title: item?.tripTitle,
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
