import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./SouthernIraq-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Images } from "./SouthernIraq-image-data";
import { Link, useLocation } from 'react-router-dom';
import { SouthernIraqAccData } from "./SouthernIraq-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};


const SoutherIraqTrip = () => {
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
          <h1 className={styles.Title}>EN ROUTE TO BAGHDAD: DELVING INTO SOUTHERN IRAQ</h1>
          <div className={styles.Italic}>VOYAGE THROUGH THE HEART OF CIVILIZATION</div>
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
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28407855.401870094!2d23.961070426414448!3d26.385892941928855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1557823d54f54a11%3A0x6da561bba2061602!2sIraq!5e0!3m2!1sen!2sus!4v1715147423331!5m2!1sen!2sus" width="450" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    <p>
                      Nestled within the embrace of the Tigris and Euphrates rivers lies Iraq, a nation steeped in the rich tapestry of human civilization. Known as the cradle of ancient cultures, it boasts a storied past intertwined with legendary tales of the Garden of Eden, the Tower of Babel, and the Hanging Gardens of Babylon. Beyond its historical allure, Iraq is often perceived through the lens of contemporary geopolitics—a land of oil wealth, conflict, and international intrigue.
                      <br />

                    </p>
                    <p>
                      However, our exploration of Iraq transcends these perceptions,
                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>
                    weaving together the threads of its ancient heritage and modern realities. Journey with us through the landscapes where the earliest scripts were etched into clay tablets,
                    Immerse yourself in the spiritual tapestry of Iraq, from the fervent prayers echoing within mosques and shrines to the intimate gatherings at local tea shops and cafes. At every turn, encounter the resilient spirit of its people, who have weathered the storms of history with unwavering determination.

                    MidAsia holds a deep appreciation for Iraq and its inhabitants, fostering connections since our inaugural trips to Iraqi Kurdistan in 2011. Join us as we rediscover the allure of ancient Mesopotamia and celebrate the enduring resilience of modern Iraq.
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Discover the Beauty of Southern Iraq</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={SouthernIraqAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Cast your eyes upward to take in the magnificent, millennia-old architecture of Ur, Uruk, and Ctesiphon</li>
                      <li>Join pilgrims in fervent prayer and devotion at the magnificent Shrine of Imam Ali in Najaf and the Shrines of Hussein and Abbas in Karbala, two of the holiest cities in Islam</li>
                      <li>Cruise in the serenity of the Mesopotamian Marshes by motorboat, and learn about the recovery of this fragile ecosystem and unique culture</li>


                    </ul>
                  </div>

                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Walk the ancient corridors of Babylon, and see where the imposing Ishtar gate would have stood, impressing those who entered the kingdom of Hammurabi</li>
                      <li>Marvel at the spiraling ramp of the Malwiyya tower, also known as Samarra, considered a masterpiece of Islamic architecture</li>
                      <li>Admire the spectacular collection of ancient art some only recently recovered and restored at Baghdad’s Iraq Museum</li>
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
                        <li>Accommodations and meals as noted in the itinerary</li>
                        <li>All ground transportation, including airport transfers</li>
                        <li>All sightseeing, events, and visits as noted in the itinerary</li>
                        <li>All entrance fees, service charges, and standard taxes</li>
                        <li>Services of a MidAsia trip leader, national guide, drivers, and other staff</li>
                        <li>Gratuities for national guide, drivers, porters, and other staff</li>
                        <li>Expertise of MidAsia’s travel specialists</li>
                        <li>Services of MidAsia’s in-house air reservations team</li>
                        <li>Bottled or filtered water at included meals and while sightseeing</li>
                        <li>Emergency evacuation services up to $300,000; secondary medical expense insurance up to $50,000 (restrictions apply; a description of coverage is available upon request) and security evacuation insurance up to $100,000 on select trips determined by MidAsia</li>
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

export default SoutherIraqTrip;
