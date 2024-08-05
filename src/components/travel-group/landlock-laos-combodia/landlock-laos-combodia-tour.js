import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./landlock-laos-combodia-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Images } from "./landlock-laos-combodia-image-data";
import { Link, useLocation } from 'react-router-dom';
import { LaosCombodiaData } from "./landlock-laos-combodia-accordian-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};


const LaosCombodiaTrip = () => {
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className={styles.MainUpperr}>
        <div className={styles.MainContent}>
          <h1 className={styles.Title}>Landlocked Laos & Life along Mekong with Combodia Extension</h1>
          <div className={styles.Italic}>(Small Group Journey)</div>
          <div className={styles.GoButton}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Start Planning
            </Button>
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

                    <div id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496252.865617339!2d99.51119290350546!3d19.79181968011682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31149057b0824589%3A0xec592481f99cd81!2sLaos!5e0!3m2!1sen!2sin!4v1722772976958!5m2!1sen!2sin" width="450" height="300"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    <p>
                      Explore the Mystique of Laos: Delve into the heart of Southeast Asia's hidden treasure with our Laos Expedition. This immersive journey offers a glimpse into a nation untouched by mass tourism, where every corner reveals a story of natural wonder and cultural richness.
                    </p>
                    <p>
                      Traverse mist-veiled mountains, meandering rivers, and lush countryside as you uncover the untouched beauty of Laos. From serene villages nestled amidst verdant landscapes to the mighty Mekong River, nature takes center stage, inviting you to discover its secrets.

                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>
                    Venture beyond the tourist trail and embark on unforgettable adventures in Laos. Whether trekking through remote wilderness, exploring ancient temples, or cruising along the Mekong Delta, every moment promises discovery and adventure.
                    Enjoy privileged access to hidden gems and lesser-known attractions, curated to provide you with an authentic and unforgettable Laotian experience. From intimate encounters with local communities to behind-the-scenes explorations, our expedition offers a truly immersive journey into the heart of Laos.

                    Travel with confidence under the expert guidance of seasoned professionals who are passionate about sharing their knowledge and love for Laos. Benefit from insider insights, personalized recommendations, and unparalleled service throughout your expedition.

                    Join us on this extraordinary journey and uncover the hidden treasures of Laos, where adventure, culture, and natural beauty converge to create an unforgettable travel experience
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Explore the Rich Heritage of the Laos</h2>
                  <h5 className={styles.SetTextWith}>(History, Culture, Architecture)</h5>
                </div>
                <MyAccordion AccordianData={LaosCombodiaData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Explore the bustling streets of Bangkok and experience the vibrant culture of Thailand.</li>
                      <li>Discover the Golden Triangle in Chiang Rai and learn about the region's opium history at the Hall of Opium museum.</li>
                      <li>Cruise along the scenic Mekong River and witness rural life along its banks.</li>
                      <li>Visit Luang Prabang, a UNESCO World Heritage Site known for its stunning architecture and cultural heritage.</li>
                      <li>Participate in the traditional alms-giving ceremony and explore ancient temples in Luang Prabang.</li>
                      <li>Experience the natural beauty of Kuang Si Waterfalls and take part in a traditional Baci ceremony.</li>
                      <li>Trek through lush mountain trails and visit remote villages to learn about local customs and traditions.</li>
                      <li>Embark on a scenic boat cruise down the Nam Ou River and explore the picturesque town of Nong Khiaw.</li>
                      <li>Discover the capital city of Vientiane and visit iconic landmarks such as Pha That Luang and Wat Sisaket.</li>
                      <li>Explore the Bolaven Plateau in Pakse and visit minority villages to learn about their way of life.</li>


                    </ul>
                  </div>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Experience the tranquility of Don Khong island and visit the UNESCO World Heritage site Wat Phou.</li>
                      <li>Explore the majestic temples of Angkor Wat and Angkor Thom in Siem Reap.</li>
                      <li>Cruise through the floating village of Kompong Phluk and witness daily life on Tonle Sap Lake.</li>
                      <li>Discover the rich history and culture of Cambodia's capital city, Phnom Penh.</li>
                      <li>Experience the vibrant street food scene and bustling markets of Phnom Penh.</li>
                      <li>Relax on the pristine beaches of Sihanoukville and enjoy water activities such as snorkeling and diving.</li>
                      <li>Explore the peaceful countryside of Kampot and visit local farms and pepper plantations.</li>
                      <li>Discover the ancient temple complex of Preah Vihear, perched atop a cliff overlooking Cambodia and Thailand.</li>
                      <li>Experience the traditional Khmer dance performances and indulge in delicious Cambodian cuisine.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <div className={styles.section} ref={section3Ref} id={styles.section3}>
              <div className={styles.SettingHeadingRatio}>
                <div className={styles.SetText}>DATES & PRICES</div>

              </div>
              <div className={styles.tab_content
              } style={
                {
                  display: 'block'
                }
              }>
                <div className={styles.table_data
                }>
                  <table className={styles.table_bordered
                  }>
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
                      {packageTable && packageTable.map((detail) => (
                        <tr key={detail._id
                        } className={styles.pricingRow
                        }>
                          {
                            !detail.flexiablechecked && (<><td>{new Date(detail.startDate).toLocaleDateString('en-GB')
                            }</td>
                              <td>{new Date(detail.endDate).toLocaleDateString('en-GB')
                              }</td></>)
                          }
                          {
                            detail.flexiablechecked && (<>
                              <td>{detail.flexiabledate}</td>
                              <td>{detail.flexiabledate}</td>
                            </>)
                          }
                          <td>{`$ ${detail.price
                            } USD`
                          }</td>
                          <td style={
                            {
                              width: 'auto'
                            }
                          }>{`$ ${detail.singleSupplementPrice
                            } USD`
                            }</td>
                          <td style={
                            {
                              padding: '5px'
                            }
                          }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
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
                          <td>{`${detail.availability
                            } `
                          }</td>
                          <td>
                            <Link to="/bespoke">
                              <button className={styles.btn_booknow
                              }>Book Now</button>
                            </Link>
                          </td>
                        </tr>
                      ))
                      }
                    </tbody>
                  </table>
                </div>
                <div style={
                  {
                    display: 'flex', gap: '20px', justifyContent: 'center', margin: '10px'
                  }
                }>
                  <Link to="/activitylevel">
                    <button className={`${styles.btn_booknow
                      }`
                    }>
                      Activity-Level {
                        " "
                      }({packageTable.length > 0 ? packageTable[0].activity_level : 0
                      })
                    </button>
                  </Link>
                  <button className={`${styles.btn_booknow
                    }`
                  } onClick={handleOpen
                  }>
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
                        <ul>
                          <li>Maximum 6 travelers</li>
                          <li>All domestic Airfares during the trip</li>
                          <li>International airfare from Bangkok to Chiang Rai</li>
                          <li>Start in Bangkok & finish in Cambodia (Siem Reap)</li>
                          <li>All meals included as mentioned in the itinerary</li>
                          <li>This Expedition runs in January and in February - (Average Weather in February in Laos/Cambodia - Daily high temperatures from 78°F to 83°F, rarely falling below 71°F or exceeding 89°F. Daily low temperatures are around 58°F, rarely falling below 50°F or exceeding 64°F)</li>
                          <li>All Mekong cruising</li>
                          <li>Airport/hotel/airport transfers in every city</li>
                          <li>Comfortable Accommodations in hotels with private bathrooms on twin-sharing basis as per the program (based on 3-4 stars categories and few 5* hotels in larger cities)</li>
                          <li>Sightseeing in each city as per the itinerary</li>
                          <li>Services of English speaking guides and a Midasia Routes Tour-leader throughout the trip</li>
                          <li>Porterage at airports and hotels throughout the program</li>
                          <li>Entrance fees to all visited historical sites and museums</li>
                          <li>Water on board every day</li>
                          <li>Gratuities to guides, drivers, and porters</li>
                          <li>All taxes</li>
                          <li>COMFORT NOTES - Some rough/dusty roads and long drives</li>
                          <li>Activity level 2-3. This may include hikes of couple of hours, which may have gentle slopes. Walking through towns or cities for 1 or more hours. Archaeological sites for 2-3 hours. Should be able to climb 3-4 flights of stairs and walk at least 2 miles with no problem.</li>
                        </ul>

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


              <MyGallery Images={Images} />
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

export default LaosCombodiaTrip;
