import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./Saudi-arabia-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Images } from "./Saudi-arabia-image-data";
import { Link, useLocation } from 'react-router-dom';
import { SaudiArabiaTripAccData } from "./Saudi-arabia-accordian-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};


const SaudiArabiaTrip = () => {
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
          <h1 className={styles.Title}>Beyond Borders- A Journey through Saudi Arabia</h1>
          <div className={styles.Italic}>Discover the beauty of Saudi Arabia with its rich heritage, cultural wonders, and heartwarming hospitality.</div>
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
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15248869.961202316!2d21.81252975!3d21.077907999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e9eb43f335098f%3A0x17459dc363651bb9!2sMountain%20Side%20Picture%20Taking%20Location!5e0!3m2!1sen!2sin!4v1704259344562!5m2!1sen!2sin" width="450" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    <p>
                      Embark on an awe-inspiring journey through the Kingdom of Saudi Arabia, where nature's artistry and ancient wonders paint a breathtaking canvas. Discover dramatic landscapes that will leave you spellbound, from the striking rock formations in Al Ula's desert to the sweeping vistas at the Edge of the World and the panoramic cityscape from the Sky Bridge in Riyadh.
                      <br />
                      <br />
                      Amidst the glimmering modernity, Saudi Arabia cherishes its cherished past, preserving old towns that stand as testaments to the kingdom's rich heritage.



                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>
                    Wander through traditional mud-brick villages, lovingly protected and nestled within the historical districts of cities like Riy Jeddah, and Al Ula, offering a glimpse into the nation's storied history.
                    Be captivated by the allure of the Red Sea, a sparkling gem along Saudi Arabia's extensive coastlines. While the Persian Gulf holds the kingdom's precious oil reserves, the Red Sea beckons with its pristine beauty and offers an aquatic playground for snorkeling, diving, fishing, and water sports, just a stone's throw away from vibrant Jeddah.

                    Delve into the mysteries of the ancient Nabataean civilization at Hegra, a lesser-known UNESCO World Heritage Site akin to Petra. Here, you can immerse yourself in well-preserved monumental tombs, inscriptions, and cave drawings that offer a glimpse into the enigmatic past of this once-thriving civilization, all without the crowds.

                    Prepare to be entranced by the wonders that Saudi Arabia unfolds before you, an experience that will ignite your imagination and leave you with cherished memories of this captivating land.
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Discover the Beauty of Saudi Arabia</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={SaudiArabiaTripAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Embark on an adventure through the deep and pristine Rub' al Khali desert, untouched by humans until recent years.</li>
                      <li>Discover the historical significance of Saudi Arabia's deserts, unraveling their mysteries.</li>
                      <li>Witness the transformation of remote villages, where people adapted to the harsh desert environment.</li>
                      <li>Explore the beginnings of different desert civilizations, traversing old and abandoned routes.</li>
                      <li>Visit beautiful villages with unique histories and captivating stories.</li>
                      <li>Immerse yourself in the main cities of Saudi Arabian civilization.</li>
                      <li>Explore UNESCO World Heritage Sites, including:</li>
                      <li>Al-Hijr Archaeological Site (Madain Salih)</li>
                      <li>Historic Jeddah (UNESCO)</li>
                    </ul>
                  </div>

                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Masmak Fortress in Riyadh</li>
                      <li>Ad Diriyah - Historic City (UNESCO)</li>
                      <li>Visit the National Museum in Riyadh to discover Saudi Arabia's rich cultural and historical treasures.</li>
                      <li>Experience a stay in Al Ula, known for its unique rock formations and archaeological sites.</li>
                      <li>Explore modern developments in cities like Riyadh and Jeddah.</li>
                      <li>Encounter the hospitality and friendliness of the Saudi Arabian people throughout your journey.</li>
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
                { /* <div className={styles.travel_sts}>
                  <span className={getStatusStyle(packageTable.status)}>{getStatusIcon(packageTable.status)}</span>
                  <span>{packageTable.status ? 'Guaranteed Departures' : 'Not Guaranteed Departures'}</span>
                </div> */}
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
                        <li>8-day expedition with a maximum of 6 travelers, offering an intimate group experience.</li>
                        <li>Gentle adventurous experience designed for history, Arab culture, nature, and adventure enthusiasts.</li>
                        <li>All domestic airfares included throughout the trip for seamless travel.</li>
                        <li>Start your journey in Riyadh and conclude in Jeddah, exploring key cultural and historical landmarks.</li>
                        <li>All meals provided as per the itinerary, showcasing authentic Saudi Arabian cuisine.</li>
                        <li>Enjoy Saudi Arabia's reliably warm climate, ideal for travel from November to March.</li>
                        <li>Accommodations: 7 nights in well-located hotels (mostly 4*/5* stars), 1 night in modified Bedouin tents, and 1 night in simple tented camps in the Empty Quarter.</li>
                        <li>Engage in various activities, including boat trips, to enrich your travel experience.</li>
                        <li>Airport/hotel/airport transfers provided in every city for convenience.</li>
                        <li>Services of English-speaking guides and a MiddleAsia Routes Tour-leader throughout the trip.</li>
                        <li>Porterage services at airports and hotels throughout the program.</li>
                        <li>Entrance fees included for all visited historical sites and museums.</li>
                        <li>Water provided on board every day to keep you hydrated during your journey.</li>
                        <li>Gratuities included for guides, drivers, and porters.</li>
                        <li>All taxes covered for a hassle-free travel experience.</li>
                        <li>Comfort Notes: Expect some rough/dusty roads, long drives, and off-road adventures through picturesque landscapes.</li>
                        <li>Transportation: Travel partially by comfortable Minibus, 4-wheel drive Land Cruisers, and traditional dhows.</li>
                        <li>Activity Level 2: Suitable for various activities, including hikes, walks, and exploration of archaeological sites.</li>
                        <li>Toilets: Clean western-style toilets available at accommodations/restaurants/sites, with occasional squat toilets during drives.</li>
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

export default SaudiArabiaTrip;
