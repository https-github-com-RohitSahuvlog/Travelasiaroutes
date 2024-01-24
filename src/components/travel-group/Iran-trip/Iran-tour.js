import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./Iran-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Images } from "./Iran-image-data";
import { Link, useLocation } from 'react-router-dom';
import { IranTripAccData } from "./Iran-accordian-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};


const IranTrip = () => {
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
          <h1 className={styles.Title}>Explore Iran's Rich Heritage</h1>
          <div className={styles.Italic}>A Tapestry of Ancient Wonders, Cultural Splendor, and Heartwarming Hospitality.</div>
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
                    <img className={styles.ThirdPic} src="https://res.cloudinary.com/dxhoawdbh/image/upload/v1704255260/11880832200_s05nod.png" alt="Central Asia Map" />

                    <div className={styles.map} id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6631105.202887078!2d42.21457547499999!3d35.75463060000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e058b3a72c6eb%3A0x1d79be3d9cf716f6!2sIran%20Tourism!5e0!3m2!1sen!2sin!4v1704255442003!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    <p>
                      Everywhere you look in Iran, there are reminders of the rich history and vibrant traditions of the Persian Empire, from the remains of King Darius’ palace at Persepolis to the Zoroastrian ‘Towers of Silence’ in Yazd. Our Iran tours and holidays highlight some of the finest ancient architecture found anywhere in the world. Isfahan was described as “half the world” and with its stunning mosques, bridges and squares it’s not difficult to see why. Other architectural highlights include the intricately carved domes and madrasas of Shiraz and the ingenious wind towers of Yazd. With 21, it is home to the most UNESCO World Heritage Sites for Culture in the Middle East.

                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>
                    Contrary to the media perception of Iran, the country has always been outward-looking and has a long history of learning and poetry. Visiting the tomb of Hafez in Shiraz you will find old and young gathered to pay tribute and to read his words of love and wine. Travellers on our Iran tours are invariably overwhelmed by the friendliness and hospitality of the people, and it is the one thing our guests comment on again and again – how welcome they were made to feel. This is a country with a strong cultural heart and a long tradition of Persian hospitality.

                    Iran’s capital of Tehran is a bustling contemporary city with luxury retail outlets, fashionable restaurants and modern skyscrapers, while the ancient cities of Shiraz, Yazd and Isfahan offer a more traditional Persian experience, with their winding streets, coffee shops, peaceful gardens and impressive mosques. Iran is a very youthful country, with over 65% of the population being under 35, and in the cities, you will find locals pushing the dress code as far as they can. In the countryside meanwhile, you will find a more conservative but equally welcoming Iran.
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Discover the Beauty of Explore Iran</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={IranTripAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Embark on an adventure through the deep and pristine Rig-Jen desert, untouched by humans until recent years.</li>
                      <li>Discover why Rig-Jen desert was abandoned throughout history, unraveling its mysteries.</li>
                      <li>Witness the transformation of a remote village, where people brought water and civilization against all odds.</li>
                      <li>Explore the beginnings of different desert civilizations, traversing old and abandoned routes.</li>
                      <li>Visit beautiful villages with unique histories and captivating stories.</li>
                      <li>Immerse yourself in the main cities of Iranian civilization: Isfahan, Shiraz, Yazd & Kashan.</li>
                      <li>Explore 13 UNESCO World Heritage Sites, including:</li>
                      <li>Nasir ol Molk Mosque</li>
                      <li>Eram Garden (UNESCO)</li>


                    </ul>
                  </div>

                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Tomb of Saadi & Hafez</li>
                      <li>Persepolis (UNESCO)</li>
                      <li>Naqsh-e Jahan (UNESCO)</li>
                      <li>Congregational Mosque (UNESCO)</li>
                      <li>Abayneh Village</li>
                      <li>Golestan Complex (UNESCO)</li>
                      <li>Visit the National Jewels Museum to witness Iran's rich cultural and historical treasures.</li>
                      <li>Experience a stay in Yazd, declared by UNESCO as the second most historic city in the world.</li>
                      <li>Stroll over the famous bridges of Isfahan, marveling at their architectural beauty.</li>
                      <li>Encounter the warmth and friendliness of the Iranian people throughout your journey.</li>
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
                          <td>{new Date(detail.startDate).toLocaleDateString('en-GB')
                          }</td>
                          <td>{new Date(detail.endDate).toLocaleDateString('en-GB')
                          }</td>
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
                            } Spaces`
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
                      }({packageTable.activity_level
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
                        <li><strong>Duration:</strong> 13 days</li>
                        <li><strong>Group Size:</strong> Maximum 10 travelers</li>
                        <li><strong>Experience:</strong> Gentle adventure designed for history, Persian culture, nature, and adventure lovers</li>
                        <li><strong>Starting Point:</strong> Tehran</li>
                        <li><strong>Ending Point:</strong> Tehran</li>
                        <li><strong>Inclusions:</strong></li>
                        <li>All domestic airfares during the trip</li>
                        <li>All meals as mentioned in the itinerary</li>
                        <li>Visa assistance for Iran</li>
                        <li>Temperatures: Best time to visit during spring and autumn</li>
                        <li>All activities, transportation, and entry tickets</li>
                        <li>Airport/hotel/airport transfers in every city</li>
                        <li>Accommodation: 12 nights in well-located hotels with private bathrooms, 1 night in a modified Bedouin camp</li>
                        <li>Services of English-speaking guides and a MiddleAsia Routes Tour-leader throughout the trip</li>
                        <li>Porterage at airports and hotels throughout the program</li>
                        <li>Entrance fees to all visited historical sites and museums</li>
                        <li>Water on board every day</li>
                        <li>Gratuities to guides, drivers, and porters</li>
                        <li>All taxes</li>
                        <li><strong>Comfort Notes:</strong> Few rough/dusty roads, long drives, and scenic routes</li>
                        <li><strong>Transportation:</strong> Mostly by comfortable minibus; 4-wheel drive land cruisers and camels in specific locations</li>
                        <li><strong>Activity Level:</strong> 2-3 (Includes hikes, walks in towns, archaeological sites, ability to climb stairs, and walk 2 miles with no problem)</li>
                        <li><strong>Toilets:</strong> Western-style toilets available at accommodations/restaurants/sites; squat toilets during drives with efforts to find the best clean toilets</li>
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

export default IranTrip;
