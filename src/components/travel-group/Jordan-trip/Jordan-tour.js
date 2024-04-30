import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./Jordan-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Images } from "./Jordan-image-data";
import { Link, useLocation } from 'react-router-dom';
import { JordanTripAccData } from "./Jordan-accordian-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};


const JordanTrip = () => {
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
          <h1 className={styles.Title}>Discover Jordan's Wonders</h1>
          <div className={styles.Italic}>A Tapestry of History, Desert Grandeur, and Warm Hospitality.</div>
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
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58670948.53432763!2d-17.58548450000002!3d26.16443850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef6f5d4fb3f8b55%3A0x7f2ace0ed866fae3!2sMusandam%20Oman!5e0!3m2!1sen!2sin!4v1704168573126!5m2!1sen!2sin" width="450" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    <p>
                      A land rich in natural wonders and sites so ancient, that by comparison, the Crusader forts guarding the old trade routes are considered recent additions.
                      <br />
                      <br />
                      Moses is said to have led his people through the parched Jordanian deserts. Alexander the Great paved the way for Hellenistic cities and culture, while the Natabeans carved grandiose buildings, temples and tombs out of the red Petra sandstone. Later still, Gems of Jordanbecame an important trading center of the Roman Empire and lavish backdrop for some of history’s most enthralling tales. Remarkably, the landscape has changed little in the last 2,000 years.

                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>


                    The seven hills of Amman are an enchanting mixture of ancient and modern. More cosmopolitan than most other Middle Eastern capitals, Amman’s cafés, restaurants, museums and shops sit cheek-by-jowl with the remains of civilizations long past. The most impressive relic is the restored Roman Theatre; while the ancient Citadel, still towers above the city. Outside the capital awaits the spectacular, well-preserved Greco-Roman remains at Jerash. Chock-a-block with temples, forums and columns; some have even compared it to Pompeii. Further south you’ll find Biblical sights like Mt Nebo, associated with the last days of Moses and famous for its dazzling views across the Gems of JordanValley and the Dead Sea. Along the Kings Highway the striking silhouettes of the fortified towns and castles recall the bloodthirsty days of the Crusades. Yet these national treasures all serve as a precursor to the undisputed jewel in Jordan’s tourism crown – the lost city of Petra. Recognized as a world-wonder, this vast, unique city, carved into the sheer rock is an awe-inspiring experience.
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Discover the Beauty of Jordan</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={JordanTripAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Petra - Fabled Petra, an amazing lost city hidden in a desert canyon for 2,000 years</li>
                      <li>Jerash - Walk through and touch history at the Roman and Crusader ruins</li>
                      <li>Wadi Rum - Explore the majestic desert of Wadi Rum, the spectacular haunt of T. E. Lawrence</li>
                      <li>Aqaba - Explore the only Jordanian city at the Red Sea</li>
                      <li>Dead Sea - Float in the salty waters of the Dead Sea at the lowest point on earth</li>
                      <li>Visit the amazing ancient rose-red city of Petra, one of the Seven Wonders of the World "UNESCO World Heritage Site"</li>
                      <li>Cruise and Snorkel in the warm Red Sea and have a float in the salty Dead Sea</li>
                      <li>Visit Jerash, home of the Roman chariot racing and gladiators</li>
                      <li>Fantastic two-day exploration of Wadi Rum with friendly Bedouin guides</li>
                    </ul>
                  </div>

                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Travel by 4x4 jeep, with some beautiful short hikes</li>
                      <li>See the beautiful architecture of obelisks, temples, sacrificial altars, and colonnaded streets of the ruined Roman city</li>
                      <li>Visit Mount Nebo, the memorial of Moses</li>
                      <li>Spend a day at beautiful Aqaba city</li>
                      <li>Early Christian mosaics at Madaba</li>
                      <li>Private Cruising on Red Sea</li>
                      <li>Jerash, a spectacular Roman city</li>
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
                      }({packageTable.length > 0 ? packageTable.length > 0 ? packageTable[0].activity_level : 0 : 0
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
                          <li>12 Days Expedition with maximum 8 travelers in a group</li>
                          <li>Gentle adventurous experience designed for history, culture, and nature lovers</li>
                          <li>Start & finish in Amman</li>
                          <li>All meals included as mentioned in the itinerary</li>
                          <li>Best travel months: March to May, October, and November</li>
                          <li>Average Weather in April in Jordan: Daily high temperatures increase by 9°F, from 66°F to 75°F, rarely falling below 54°F or exceeding 82°F. Daily low temperatures increase by 7°F, from 47°F to 53°F, rarely falling below 40°F or exceeding 62°F</li>
                          <li>All activities, boat trips including snorkel gears</li>
                          <li>Airport/hotel/airport transfers in every city</li>
                          <li>12 Nights Comfortable Accommodations in well-located hotels with private bathrooms on twin sharing basis as per the program (based on 4*/5*stars categories)</li>
                          <li>Services of English speaking guides and a MiddleAsia Routes Tour-leader throughout the trip</li>
                          <li>Porterage at airports and hotels throughout the program</li>
                          <li>Entrance fees to all visited historical sites and museums</li>
                          <li>Short horseback ride at Petra during the first visit</li>
                          <li>Camel Ride in Wadi Rum</li>
                          <li>1-hour Traditional massage</li>
                          <li>Water on board every day</li>
                          <li>Gratuities to guides, drivers, and porters</li>
                          <li>All taxes</li>
                          <li>Comfort Notes - Few rough/dusty roads and long drives. The drives in the</li>
                          <li>Activity level 2-3 (This may include hikes of 1 hour, which may have gentle slopes. Walking through towns or cities for 1 or more hours. Archaeological sites for 2-3 hours. Should be able to climb 3-4 flights of stairs and walk at least 2 miles with no problem)</li>
                          <li>Toilets - There are clean western style toilets available at your accommodations/restaurants/sites but on the way while drives to our destination, few squat toilets are available</li>
                          <li>Few hikes/walks are on this trip on trails with rugged and rocky terrain</li>
                          <li>Note - Accommodation - Gems of Jordanis a very beautiful destination, the hotels in this trip are good and clean, and most of the hotels we choose are 4* or 5* properties with good location and services, for example, Intercontinental Hotel in Amman, Petra Movenpick Resort, Wadi Rum Night Camp in Wadi Rum, Dead Sea Resort, or similar</li>
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

export default JordanTrip;
