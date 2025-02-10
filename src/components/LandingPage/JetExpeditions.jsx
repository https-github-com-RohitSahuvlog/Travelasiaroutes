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
  // {
  //   link: "/travel-groups/3eyeshimalayas",
  //   thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1711857300/m160822019_u66yv0.jpg",
  //   region: "Asia–Pacific",
  //   title: "3 Eyes of Himalayas- Best of Tibet, Bhutan and Nepal",
  //   description: "Uncover the charm of Tibet, Bhutan, and Nepal. Dive into rich cultures, ancient traditions, and stunning landscapes. Plus, discover the allure of the Philippines. Your unforgettable journey begins here!"
  // },
  {
    link: "/travel-groups/oman",
    thumbnail: "https://www.remotelands.com/remotenew1/dist/images/country/oman/city/15030503/b160822041.jpg",
    region: "MiddleEast",
    title: "Unexpected Oman-The Land of Frankincense",
    description: "Embark on a mesmerizing odyssey through the unseen legends of Oman",
  },
  {
    link: "/travel-groups/landlock-laos-combodia",
    thumbnail: "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1721712224/bdusztm1tpe4tfnrtaos.jpg",
    region: "Asia–Pacific",
    title: "Landlocked Laos & Life along Mekong with Combodia Extension",
    description: "(Small Group Journey)",
  },
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
