import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./laos-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { LaosImages } from "./laos-image-data";
import { Link, useLocation } from 'react-router-dom';
import { LaosAccData } from "./laos-accordian-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';
import { useDispatch, useSelector } from 'react-redux';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};

const LaosTrip = () => {
  const location = useLocation();
  const [packageTable, setpackageTable] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();

  const navHeader = [
    {
      headerTitle: "TRIP OVERVIEW",
      headerRef: section1Ref,
      headerID: "section3"
    },
    {
      headerTitle: "Day By Day Experience",
      headerRef: section2Ref,
      headerID: "section1"
    },
    {
      headerTitle: "DATES & PRICES",
      headerRef: section3Ref,
      headerID: "section3"
    },
    {
      headerTitle: "PHOTO & VIDEO",
      headerRef: section4Ref,
      headerID: "section4"
    },


  ];

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const fetchData = async (country) => {
    try {
      const response = await Axios.get(`/api/package/travel-packages/${country}`);
      setpackageTable(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {

    const pathnameArray = location.pathname.split('/');
    const countryName = pathnameArray[pathnameArray.length - 1];

    fetchData(countryName);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);


  return (
    <div>
      <div className={styles.MainUpperr}>
        <div className={styles.MainContent}>
          <h1 className={styles.Title} >Exploring the Mystique of Laos</h1>
          <div className={styles.Italic}>Laos Revealed: Embark on Epic Expeditions</div>
          <div className={styles.GoButton}>
            <div className={styles.GoButton}>
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Start Planning
              </Button>
            </div>
          </div>
          <div className={styles['your-component']}>
            <Modal
              open={open}
              handleClose={handleClose}
            />
          </div>
        </div>
      </div>



      <div className={styles.Capp}>
        <div className={styles.Flex}>
          <div>
            <ScrollHighlightNabbar scrollToSection={scrollToSection} navHeader={navHeader} />
          </div>
          <div className='w-[100vw]' style={{ width: "100vw" }}>
            <div className={styles.section} ref={section1Ref} id={styles.section1} >
              <div className={styles.SettingHeadingRatio}>
                <div className={styles.SetText}>TRIP OVERVIEW</div>
              </div>

              <div className={styles.SectionThreeMain}>
                <div className={styles.FirstDiv}>
                  <div className={styles.image_container}>
                    <img className={styles.ThirdPic} src="https://www.drishtiias.com/images/uploads/1592041737_image2.png" alt="Central Asia Map" />
                    <div className={styles.map} id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7765175.305048344!2d98.56277562271175!3d18.13673810944553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31149057b0824589%3A0xec592481f99cd81!2sLaos!5e0!3m2!1sen!2sin!4v1698035952521!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>

                  <div className={styles.tripfeedbackquote}>
                    <p> A fascinating journey exploring three countries, with the mighty Mekong River as your guide through Thailand, Laos and Cambodia.</p>
                    <br />
                    <br />
                    <p>
                      Follow the Mekong River through Thailand, Laos, and Cambodia on this captivating 15-day journey. It's a top-to-tail exploration of Laos, where you'll discover its myriad waterfalls, caves, mountains, and river villages. We kickstart this adventure, known for its hidden charms, in the bustling Thai capital of Bangkok, where we'll be there to greet you upon your arrival.

                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>
                    From there, we'll whisk you away to Chiang Rai in northern Thailand to uncover the secrets of the Golden Triangle of Southeast Asia. Afterward, embark on a two-day cruise along the Mekong River from the Thai/Lao border to the enchanting Luang Prabang.
                    This 2-day journey down the majestic Mekong River culminates in a captivating arrival in Luang Prabang, a city that enchants even the most seasoned travelers with its gleaming temple roofs, French provincial architecture, and diverse inhabitants. Moving south, we delve into the lush jungles of the Bolaven Plateau, immersing ourselves in authentic coffee culture and surrounded by some of the most alluring scenery in Asia, including volcanoes and sparkling waterfalls. This off-the-beaten-track adventure concludes in the serene 4000 islands, where time seems to stand still, allowing you to leisurely explore villages by bicycle or tuk-tuk. By the time we reach Cambodia, we will have become fully in tune with the Mekong, making our way to Kratie in the northeast, famous for its stunning sunset views. Here, we delve into Cambodia's modern history and, of course, no visit to this country would be complete without thorough exploration of the incredible temples surrounding Angkor Wat. This journey promises to be a once-in-a-lifetime experience, filled with hidden gems, natural wonders, and cultural treasures..
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Discover the Beauty of Laos</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={LaosAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>“A fascinating journey exploring three countries, with the mighty Mekong River as your guide through Thailand, Laos and Cambodia.”</li>
                      <li>Board a private boat for a two-day cruise down the Mekong River.</li>
                      <li>Travel into the Golden Triangle, offering stunning views over the Mekong River and into Laos and Burma.</li>

                      <li>Offer alms to the hundreds of saffron-robed Buddhist Monks.</li>
                      <li>Explore the UNESCO best-preserved city in Southeast Asia.</li>
                    </ul>
                  </div>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Kuang Si Water Falls and The Traditional Baci ceremony.</li>
                      <li>Visit small local villages known for the traditional cotton weaving, tobacco, and rice farming.</li>
                      <li>Don Khong, the largest island, and Wat Pu UNESCO Site.</li>
                      <li>EXPLORE THE GRAND CIRCUIT OF ANGKOR WAT and The Heritage capital of Siem Reap.</li>
                      <li>The Citadel & Land mine museum.</li>
                      <li>End with a panoramic tour of Bangkok.</li>
                    </ul>
                  </div>
                </div>


              </div>

            </div>

            <div className={styles.section} ref={section3Ref} id={styles.section3}>
              <div className={styles.SettingHeadingRatio}>
                <div className={styles.SetText}>DATES & PRICES</div>

              </div>

              <div className={styles.tab_content} style={{ display: 'block' }}>
                <div className={styles.table_data}>
                  <table className={styles.table_bordered}>
                    <thead>
                      <tr>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Price</th>
                        <th>Single Supplement Price</th>
                        <th>Status</th>
                        <th>Availability</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={styles.pricingRow}>
                        <td>{packageTable.startDate}</td>
                        <td>{packageTable.endDate}</td>
                        <td>{`$ ${packageTable.price} USD`}</td>
                        <td style={{ width: 'auto' }}>{`$ ${packageTable.singleSupplementPrice} USD`}</td>
                        <td style={{ padding: '5px' }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="7" fill="#4BB543" />
                            <path
                              d="M6,12 L9,16 L18,7"
                              fill="none"
                              stroke="#ffffff"
                              strokeWidth="2"
                            >
                              <animate
                                attributeName="stroke-dasharray"
                                from="0 28 28"
                                to="28 28 28"
                                dur="2s"
                                repeatCount="indefinite"
                              />
                            </path>
                          </svg>
                        </td>
                        <td>{`${packageTable.availability} Spaces`}</td>
                        <td>
                          <Link to="/bespoke">
                            <button className={styles.btn_booknow}>Book Now</button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={styles.travel_sts}>
                  <span className={getStatusStyle(packageTable.status)}>{getStatusIcon(packageTable.status)}</span>
                  <span>{packageTable.status ? 'Guaranteed Departures' : 'Not Guaranteed Departures'}</span>
                </div>
                <div style={{ display: 'flex', gap: '20px', justifyContent: "center", margin: "10px" }}>
                  <Link to="/activitylevel">
                    <button className={`${styles.btn_booknow}`}>
                      Activity-Level{" "}({packageTable.activity_level})
                    </button>
                  </Link>

                  <button className={`${styles.btn_booknow}`} onClick={handleOpen}>
                    Start Planning
                  </button>
                </div>
              </div>

              <div className={styles.SettingHeadingRatio}>

                <div className={styles.EnterData}>
                  <div className={styles.PutData}>
                    <div className={styles.DataHeading}>
                      *Facts and Inclusions
                    </div>
                    <div className={styles.HeadingContent}>
                      <ul>
                        <li className={styles.highlight}>Embark on an intimate journey with a maximum of 8 fellow travelers, ensuring personalized experiences at every turn.</li>
                        <li className={styles.highlight}>Seamless travel with all domestic airfares covered, ensuring you focus on the adventure, not logistics.</li>
                        <li className={styles.highlight}>A truly global expedition with inclusive international airfare covering Thailand, Laos, Cambodia, and back to Thailand.</li>
                        <li className={styles.highlight}>Start and finish your adventure in the vibrant heart of Bangkok, a city that never fails to captivate.</li>
                        <li className={styles.highlight}>Indulge in culinary delights with all meals included, meticulously curated to complement your extraordinary itinerary.</li>
                        <li className={styles.highlight}>Experience the magic of Laos in January, where temperatures range from 78°F to 83°F, creating the perfect backdrop for exploration.</li>
                        <li className={styles.highlight}>Sail through enchanting landscapes with Mekong cruising, adding a touch of serenity to your journey.</li>
                        <li className={styles.highlight}>Enjoy hassle-free transitions with airport/hotel/airport transfers in every city, making travel a breeze.</li>
                        <li className={styles.highlight}>Retreat to 14 nights of comfort in carefully selected hotels, offering private bathrooms and twin-sharing options in 3-4 star accommodations, including a sprinkle of luxury in larger cities.</li>
                        <li className={styles.highlight}>Immerse yourself in the history and culture of each city with inclusive sightseeing, ensuring you don't miss a moment of wonder.</li>
                        <li className={styles.highlight}>Benefit from the expertise of English-speaking guides and a dedicated MiddleAsia Routes Tour-Leader throughout your journey, adding depth to your travel experience.</li>
                        <li className={styles.highlight}>Let us handle the heavy lifting with porterage services at airports and hotels throughout the program, leaving you free to savor every moment.</li>
                        <li className={styles.highlight}>Explore historical sites and museums without worry, as entrance fees are included in your comprehensive package.</li>
                        <li className={styles.highlight}>Stay refreshed with water on board every day, ensuring you're energized for every new adventure.</li>
                        <li className={styles.highlight}>Express gratitude effortlessly with included gratuities for guides, drivers, and porters, fostering a culture of appreciation.</li>
                        <li className={styles.highlight}>Rest easy knowing that all taxes are covered, leaving you to focus solely on creating lasting memories.</li>
                        <li className={styles.highlight}>Navigate diverse terrains with ease, including some rough/dusty roads and long drives, adding a touch of adventure to your comfortable journey.</li>
                        <li className={styles.highlight}>Engage in activities with an intensity level of 2-3, from gentle hikes to town explorations and archaeological site visits, catering to various interests and energy levels.</li>
                        <li className={styles.highlight}>Toilet facilities cater to both comfort and authenticity, with clean Western-style toilets at accommodations/restaurants/sites, and quaint squat toilets along the scenic routes.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.SetTextRatio}>TRIP COST DOES NOT INCLUDE</div>


                <div className={styles.inner_container}>
                  <h2 className={styles.exclusivesavings}>International airfare,any airport departure taxes, any meals not specified after each itinerary day in the Detailed Itinerary, gratuities to tour leader,hotels en route to or on return from starting or ending city or additional hotel nights that may be necessary due to airline schedule changes or other factors, visa fees, cost of medical immunizations (if any), travel insurance, and other expenses of a personal nature (alcoholic beverages, laundry, etc.)</h2>
                </div>



              </div>
            </div>
            <div className={styles.section} ref={section4Ref} id={styles.section4}>


              <MyGallery Images={LaosImages} />
              <div className={styles.LastFourContent}>
                <div>
                  <h4 className={styles.ContentSubHeading}>A JOURNEY BUILT JUST FOR YOU</h4>
                  <p className={styles.ContentSubHeadingPart}>Take customization to the next level on a journey fully tailored to you. MidAsia's destination specialists will gladly tailor this existing itinerary—or build one completely from scratch—to suit your style, interests, and time frame. Contact us to see what's possible.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LaosTrip;
