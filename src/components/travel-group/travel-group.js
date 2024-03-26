import React, { useEffect, useState } from 'react'
import styles from "./travel-group.module.css";
import { createGlobalStyle } from 'styled-components';
import Card from "./Card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { setTravelPackages } from '../../redux/action/travel';
import Axios from '../../api';
import Modal from './enuiry-model/model';




const TravelGroups = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const data = [
    {
      link: "nepal",
      thumbnail: "https://midasiaroutes.com/images/tours/thumbnials/104733483266635338.jpg", title: "Nepal Adventures", description: "Nepal Unveiled : Embark on Epic Adventures"
    },
    // { link:"japan",
    // thumbnail: "https://midasiaroutes.com/images/tours/thumbnials/1143620516535.jpg", title: "Splendors of Egypt", description: "THE SECRETS OF BANGLADESH, It’s Culture & Wildlife- Yes, it is Adventure!!" },
    // { link:"japan",
    // thumbnail: "https://midasiaroutes.com/images/tours/thumbnials/image_manager__teaser_girls_in_laos_costume_credit_visoot_-_stock753617940.jpg", description: "LANDLOCKED LAOS, The GOLDEN TRIANGLE & TEMPLES OF ANGKOR WAT" }
    {
      link: "bangladesh",
      thumbnail: "https://airlinebd.com/wp-content/uploads/2021/06/Bangladesh-Tourist-Spots.jpg",
      title: "Discover the Charms of Bangladesh",
      description: "Explore the hidden treasures of this beautiful country and immerse yourself in the unique charm of Bangladesh."
    },
    {
      link: "laos",
      thumbnail: "https://luxdev.lu/files/media/news/2022-09-12-2/B79I25341.jpeg",
      title: " Exploring the Mystique of Laos",
      description: "Laos Revealed: Embark on Epic Expeditions"
    },
    {
      link: "philippines",
      thumbnail: "https://i.guim.co.uk/img/media/8e466cc4459e7dbbcd6160f594ebbee833307daf/209_392_3791_2275/master/3791.jpg?width=620&dpr=2&s=none",
      title: "Discovering the Enchantment of the Philippine",
      description: "Experience the allure of the Philippines, a beloved Asian tourist hotspot."
    },
    {
      "link": "uzbekistan",
      "thumbnail": "https://lp-cms-production.imgix.net/2023-07/GettyImages-641704192.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
      "title": "Exploring the Rich History and Culture of Uzbekistan",
      "description": "Immerse yourself in the beauty and history of Uzbekistan, a Central Asian gem."

    },
    {
      link: "3eyeshimalayas",
      thumbnail: "https://midasiaroutes.com/images/tours/thumbnials/37E16EE8-27A0-4B09-A7D4-761147AB1B1B870110290.jpeg",
      title: "Explore Tibet, Bhutan, and Nepal",
      description: "Uncover the charm of Tibet, Bhutan, and Nepal. Dive into rich cultures, ancient traditions, and stunning landscapes. Plus, discover the allure of the Philippines. Your unforgettable journey begins here!"
    },
    {
      link: "india-unseen",
      thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704100298/346657AB-0E75-4F62-A2F1-FB3199A56C791296070453_jfbzfa.jpg",
      title: "India's Unseen Legends",
      description: "Embark on a mesmerizing odyssey through the unseen legends of India",
    },
    {
      link: "oman",
      thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704125530/1573728245_oman.png_p6odjy.png",
      title: "Sultanate of Oman ",
      description: "Embark on a mesmerizing odyssey through the unseen legends of Oman",
    },
    {
      link: "jordan",
      thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704171456/aygpo6wg7hxajhm3glsq.jpg",
      title: "Jordan ",
      description: "In the footsteps of Lawrence of Arabia",
    },
    {
      link: "iran",
      thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704251364/533dc820eab8eae14a0c7560_r4rcjr.jpg",
      title: "Iran ",
      description: "In the footsteps of Lawrence of Iran",
    },
    {
      link: "saudi-arabia",
      thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1704258953/0UZhVeo5-Saudi-tourism_odswhp.jpg",
      title: "Explore Saudi Arabia's Rich Heritage",
      description: "Discover the beauty of Saudi Arabia with its rich heritage, cultural wonders, and heartwarming hospitality.",
    },
    {
      link: "northern-india",
      thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1710656540/0B9B7F39-B3D4-4C73-86E0-CD96FA993CB61417108072_vwqapu.jpg",
      title: "Northern India (A Spiritual Journey through Himalayas)",
      description: "A Spiritual Journey in India (Story of unseen Gems)",
    },
    {
      link: "golden-triangle",
      thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1711201433/61241721_kepayv.jpg",
      title: "Exploring the Mystique of the Golden Triangle",
      description: "Journey through the Riches of Frankincense & Golden Sands",
    },
    {
      link: "laos-combodia",
      thumbnail: "https://res.cloudinary.com/dxhoawdbh/image/upload/v1711257216/2AE71DED-1C67-4722-90A5-1695735C645A1232473463_bfuo3m.jpg",
      title: "Unveiling the Charms of Laos",
      description: "Embark on a Journey through the Enchanting Land of Serenity and Splendor",
    }

  ]

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
  const formData = useSelector((state) => state.travelPackages);
  const dispatch = useDispatch();


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
  return (
    <div>
      <div className={styles.MainUpper}>
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
