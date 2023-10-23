import React from 'react'
import styles from "./travel-group.module.css";
import { createGlobalStyle } from 'styled-components';
import Card from "./Card/Card";
const TravelGroups = () => {
  const data = [
    {
      link: "japan",
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
  return (
    <div>
      {/* <div className="App"> */}
      <div className={styles.MainUpper}>
        <div className={styles.MainContent}>
          <h1 className={styles.Title} > LUXURY GROUP TRAVEL</h1>
          <div className={styles.Italic}>For intrepid travelers looking for the best in luxury small group tours</div>
          <div className={styles.GoButton}><button className={styles.ButtonFirst}>START PLANNING</button></div>
        </div>
      </div>


      <div className={styles.Mainmid}>
        <div className={styles.AddContent}>
          <h2 className={styles.TitleSet} > LUXURY SMALL GROUP TRAVEL TOURS </h2>
          <div className={styles.ParaSet}>
            <p>Personal attention is an essential part of all GeoEx small group trips. Get one-on-one guidance from our destination experts, access our in-house flight-booking service, add a trip extension tailored to your specific interests, and converse with our superb guides while traveling.</p>
            <br></br>
            <p>Our luxury group tours go far beyond the basic to get deeper into the country, its people, wild places, and customs. Intimate group sizes between 10-12 travelers (rarely up to 16) allow us to arrange private access to many sites, accept invitations to share authentic experiences, and stay in top-notch accommodations, which wouldn’t be possible with larger groups. We are committed to delivering a superior small group travel experience from connecting with a destination expert to returning home with new friends and stories.</p>
          </div>
        </div>
      </div>


      <div className={styles.MainDiv}>

        <div className={styles.ItalicData}>Let our experts guide you to your perfect trip</div>
        {/* <div className="MainData"><span>CALL</span> <span>888-570-7108</span> <span>–OR–</span> <span><button>INQUIRE ONLINE</button></span></div> */}

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
