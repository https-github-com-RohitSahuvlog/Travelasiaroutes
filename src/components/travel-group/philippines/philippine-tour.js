import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./philippine-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { LaosImages } from "./philippine-image-data";
import { Link, useLocation } from 'react-router-dom';
import { PhilippinesAccData } from "./philippine-accordian-data";
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


const PhilippinesTrip = () => {
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
          <h1 className={styles.Title} >Exploring the Mystique of the Philippines</h1>
          <div className={styles.Italic}>Experience the allure of the Philippines, a beloved Asian tourist hotspot.</div>
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
                    <img className={styles.ThirdPic} src="https://www.drishtiias.com/images/uploads/1571646859_image2.jpg" alt="Central Asia Map" />
                    <div className={styles.map} id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979193.521085369!2d118.06773331868727!3d13.103546699114027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9c96176d753%3A0x64d503c3ac909fed!2sGuide%20to%20the%20Philippines!5e0!3m2!1sen!2sin!4v1697971526076!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    <p> Throughout your journey, you'll encounter the heartwarming smiles of the Filipino people, known for their hospitality and genuine warmth</p>
                    <br />
                    <br />
                    <p>
                      It's not just about the places you'll visit but the connections you'll make with the locals that will make your experience even more memorable.
                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>
                    The Philippines remains a land of uncharted beauty, and this obscurity is what sets it apart. While the world rushes on, these islands have preserved their unique charm, offering travelers a glimpse into a world where time seems to stand still. It's a place where you can bask in the natural wonders of pristine landscapes, whether you're exploring the emerald-cratered lakes of Luzon or snorkeling amid vibrant corals in Malapascua.

                    This 17-day itinerary is designed to unveil the Philippines' hidden treasures, taking you on a cultural and geographical journey that's sure to leave you with unforgettable memories. Explore a world where serenity meets adventure, and obscurity meets allure, all in one breathtaking destination
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Discover the Beauty of Philippines</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={PhilippinesAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Discover spectacular mountains, picturesque rice terraces, stunning beaches, and vibrant cities on a 17-day exploration through the heart of the Philippines.</li>
                      <li>Witness the fusion of the past and present in Manila.</li>
                      <li>Admire the world's oldest rice terraces in Banaue.</li>
                      <li>Be intrigued by the curious Hanging Coffins in Echo Valley.</li>

                    </ul>
                  </div>

                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Relax on the beach in sunny El Nido.</li>
                      <li>Snorkel in the sapphire waters of the South China Sea.</li>
                      <li>Discover the limestone caves of Sabang.</li>
                      <li>See fireflies dancing at dusk at the Iwahig River.</li>
                      <li>Enjoy plenty of free time to travel your way.</li>
                      <li>Experience an island getaway abounding with natural beauty, stunning landscapes, and welcoming local communities.</li>
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
                        <li>17-day expedition with a maximum of 8 travelers in a group.</li>
                        <li>A gentle adventurous experience designed for nature lovers.</li>
                        <li>All domestic airfares during the trip are covered.</li>
                        <li>The journey starts and finishes in Manila.</li>
                        <li>All meals included as mentioned in the itinerary.</li>
                        <li>January is considered the best travel month for the Philippines.</li>
                        <li>All activities, including boat trips and snorkel gear, are provided.</li>
                        <li>Airport/hotel/airport transfers in every city.</li>
                        <li>16 nights of comfortable accommodations in well-located hotels with private bathrooms on a twin-sharing basis.</li>
                        <li>Services of English-speaking guides and a MiddleAsia Routes Tour-leader throughout the trip.</li>
                        <li>Porterage at airports and hotels throughout the program.</li>
                        <li>Entrance fees to all visited historical sites and museums are included.</li>
                        <li>Water is provided on board every day.</li>
                        <li>Gratuities to guides, drivers, and porters are covered.</li>
                        <li>All taxes are included.</li>
                        <li>Comfort notes: Expect a few rough/dusty roads and long drives through picturesque mountains and valleys.</li>
                        <li>Activity level 2-3, including hikes, walking through towns or cities, and visiting archaeological sites.</li>
                        <li>Toilets: Clean western-style toilets available at accommodations, restaurants, and sites, with a few squat toilets available during drives.</li>
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

export default PhilippinesTrip;
