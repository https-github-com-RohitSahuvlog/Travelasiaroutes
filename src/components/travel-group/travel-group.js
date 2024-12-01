import React, { useEffect, useState } from 'react'
import styles from "./travel-group.module.css";
import { createGlobalStyle } from 'styled-components';
import Card from "./Card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { setTravelPackages } from '../../redux/action/travel';
import Axios from '../../api';
import Modal from './enuiry-model/model';

const initialData = [

  {
    link: "oman",
    thumbnail: "https://www.remotelands.com/remotenew1/dist/images/country/oman/city/15030503/b160822041.jpg",
    region: "MiddleEast",
    title: "Unexpected Oman-The Land of Frankincense",
    description: "Embark on a mesmerizing odyssey through the unseen legends of Oman",
  },
  {
    link: "india-kumbh",
    thumbnail: "https://res.cloudinary.com/dr2kfppse/image/upload/v1730507784/rwogce20tzbortqy2vcl.jpg",
    region: "Asia–Pacific",
    title: "India's Kumbh Mela Festival",
    description: "Explore India's sacred Kumbh Mela: engage with sadhus, boat rides, and spiritual wonders await.",
  },
  {
    link: "babylon-baghdad",
    thumbnail: "https://res.cloudinary.com/dr2kfppse/image/upload/v1732240624/WhatsApp_Image_2024-11-22_at_01.23.32_yqrymj.jpg",
    region: "MiddleEast",
    title: "The Journey to Cradle of Civilisation (Babylon to Baghdad)- ",
    description: "Embark on a captivating journey through time, from the ancient wonders of Babylon to the modern marvels of Baghdad",
  },
  {
    link: "landlock-laos-combodia",
    thumbnail: "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1721712235/tuzwdpsbywevcyrbjok0.jpg",
    region: "Asia–Pacific",
    title: "Landlocked Laos & Life along Mekong with Combodia Extension",
    description: "(Small Group Journey)",
  },
];

const GlobalStyle = createGlobalStyle`
  .container{
    width: 80%;
    max-width: 1100px;
    margin:auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media only screen and (max-width: 768px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 580px){
      grid-template-columns: 1fr;
    }
  }
`;


const TravelGroups = () => {
  const [open, setOpen] = useState(false);
  const itineraryData = useSelector((state) => state.travelPackages.itineraryTripData);
  const [data, setData] = useState(initialData);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    async function fetchItineraryDetails() {
      try {
        const response = await Axios.get(`/api/package/travel-packages`);
        if (response.status === 200) {
          const itineraryData = response.data;
          dispatch(setTravelPackages([itineraryData]));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchItineraryDetails();
  }, []);



  useEffect(() => {
    const formattedData = itineraryData.map((item) => ({
      link: item.tripName,
      thumbnail: item.tripImage,
      region: item.tripRegion,
      title: item.tripTitle,
      description: item.tripSubtitle,
    }));

    setData((prevData) => [...prevData, ...formattedData]);
  }, [itineraryData]);
  return (
    <div>
      <div className={styles.MainUpper}>
        <img src={"https://res.cloudinary.com/dxhoawdbh/image/upload/v1716354085/luxury-group-travel-hero_vzw725.jpg"} className={styles.backgorundImage} />
        <div className={styles.MainContent}>
          <h1 className={styles.Title} > LUXURY GROUP TRAVEL</h1>
          <div className={styles.Italic}>For intrepid travelers looking for the best in luxury small group tours</div>
          <div className={styles.GoButton}><button className={styles.ButtonFirst} onClick={handleOpen}>START PLANNING</button></div>
        </div>
        <div className={styles['your-component']}>
          <Modal
            open={open}
            handleClose={handleClose}
          />
        </div>
      </div>


      <div className={styles.Mainmid}>
        <div className={styles.AddContent}>
          <h2 className={styles.TitleSet} > LUXURY SMALL GROUP TRAVEL TOURS </h2>
          <div className={styles.ParaSet}>
            <p>Personal attention is an essential part of all <strong>MidAsiaRoutes</strong> small group trips. Get one-on-one guidance from our destination experts, access our in-house flight-booking service, add a trip extension tailored to your specific interests, and converse with our superb guides while traveling.</p>
            <br></br>
            <p>Our luxury group tours go far beyond the basic to get deeper into the country, its people, wild places, and customs. Intimate group sizes between 6-8 travelers (rarely up to 10) allow us to arrange private access to many sites, accept invitations to share authentic experiences, and stay in top-notch accommodations, which wouldn’t be possible with larger groups. We are committed to delivering a superior small group travel experience from connecting with a destination expert to returning home with new friends and stories.</p>
          </div>
        </div>
      </div>


      <div className={styles.HomeHead}>
        <div className={styles.HomeHeadingData}>
          <h2>
            EXPLORE OUR GROUP TRIPS</h2>

        </div>
      </div>


      <div className='w-[100%] m-auto'>
        <GlobalStyle />
        <div className="container">

          {data?.map((item, index) => (
            <Card key={index} products={item} />
          ))}
        </div>

      </div>
    </div>
    // </div>
  )
}

export default TravelGroups
