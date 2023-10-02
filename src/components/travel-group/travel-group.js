import React from 'react'
import styles from "./travel-group.module.css";
import { createGlobalStyle } from 'styled-components';
import Card from "./Card/Card";
const TravelGroups = () => {
  const data = [
    { thumbnail: "https://www.geoex.com/app/uploads/2019/07/antarctica-crabeater-seal-geoex-393x221.jpg", title: "ANTARCTICA ADVENTURES", description: "Cruise to the White Continent" },
    { thumbnail: "	https://www.geoex.com/app/uploads/2019/06/Egypt-Great-Pyramids-karimhesham-iStock-393x221.jpg", title: "Splendors of Egypt", description: "A Guided Trip along the Nile from Cairo to Aswan" },
    { thumbnail: "https://www.geoex.com/app/uploads/2019/07/japan-kyoto-arashiyama-bamboo-forest-geoex-393x221.jpg", title: "Journey Through Ancient Japan", description: "Discovering Shikoku and Kyoto" }
  ]

  const GlobalStyle = createGlobalStyle`

  .container{
    width: 90%;
    max-width: 1100px;
    margin:auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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

      {/* <div className={styles.GridData}>
        {
          data.map((ele) => {
            return (
              <div >

                <img className={styles.HomeImageSet} src={ele.image}></img>
                <div className={styles.EntityOne}>
                  <div>{ele.topic}</div>
                </div>
                <div className={styles.EntityTwo}>
                  <p>{ele.des}</p>
                </div>

              </div>
            )
          })
        }
      </div> */}

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
