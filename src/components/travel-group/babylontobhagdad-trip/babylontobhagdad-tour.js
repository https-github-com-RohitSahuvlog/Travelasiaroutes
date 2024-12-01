import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./babylontobhagdad-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Images } from "./babylontobhagdad-image-data";
import { Link, useLocation } from 'react-router-dom';
import { babyLonToBhagdadTripAccData } from "./babylontobhagdad-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};


const BabyLonToBhagdadTrip = () => {
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
        <img src={Images[0]?.original} className={styles.backgorundImage} />
        <div className={styles.MainContent}>
          <h1 className={styles.Title}>The Journey to Cradle of Civilisation (Babylon to Baghdad)- </h1>
          <div className={styles.Italic}>Embark on a captivating journey through time, from the ancient wonders of Babylon to the modern marvels of Baghdad</div>
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
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213393.0153867129!2d44.191088476903644!3d33.311864201866605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74193%3A0x9deda9d2a3b16f2c!2sBaghdad%2C%20Baghdad%20Governorate%2C%20Iraq!5e0!3m2!1sen!2sin!4v1712162962266!5m2!1sen!2sin" width="450" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    <p>
                      Embark on an enchanting journey through the ancient marvels of Babylon, where the echoes of myth and legend intertwine with the wonders of reality. From the mythical allure of Arabian Nights to the majestic gates of Baghdad, join us as we traverse the pathways of time to unravel the mysteries of this fabled land.


                      <br />
                      <br />
                      Babylon, the epitome of human ingenuity and ambition, awaits your exploration. Discover the origins of writing, the birthplace of HTML, and the cradle of algebraic innovation. Let the base-60 numeral system guide your journey as you measure angles and moments, each step a testament to Babylon's enduring legacy.

                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>

                    But the journey doesn't end with numbers and equations; it extends into the realms of literature and folklore. Walk alongside Gilgamesh, the ancient hero whose epic tale predates the Old Testament by a millennium. Feel the camaraderie with Enkidu, the sorrow of loss, and the wisdom of Utanapishtim, the survivor of the great flood.

                    As you traverse the landscapes of Babylon, heed the timeless advice woven into its ancient texts:

                    "Let your belly be full,
                    Make merry day and night.
                    Of each day, make a feast of rejoicing.
                    Day and night, dance and play!
                    Let your garments be sparkling fresh,
                    Your head be washed; bathe in water.
                    Pay heed to a little one that holds on to your hand,
                    Let a spouse delight in your bosom."

                    With each word, a promise of adventure and discovery awaits. So pack your bags, set sail on the rivers of Mesopotamia, and immerse yourself in the wonders of Babylon – a journey of a lifetime awaits!
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Discover the Beauty of Babylon</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={babyLonToBhagdadTripAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Gaze skyward and marvel at the breathtaking, ancient architecture of Ur, Uruk, and Ctesiphon, where every stone whispers tales of millennia past.
                        Experience the profound spirituality and devotion of pilgrims at the majestic Shrine of Imam Ali in Najaf, as well as the revered Shrines of Hussein
                        and Abbas in Karbala. These sacred sites, among the holiest in Islam, beckon with an atmosphere of fervent prayer and deep faith.
                      </li>

                      <li>Embark on a tranquil motorboat journey through the serene Mesopotamian Marshes, and immerse yourself in the fascinating story of this delicate
                        ecosystem's revival and the rich tapestry of its unique culture.
                      </li>

                      <li>Wander through the timeworn passageways of ancient Babylon, and envision the grandeur of the majestic Ishtar Gate, standing tall and awe inspiring, welcoming all who entered the realm of Hammurabi. Let the echoes of history guide your steps as you explore the heart of this
                        legendary empire.
                      </li>
                    </ul>
                  </div>

                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Marvel at the majestic spiraling ramp of the Malwiyya Tower, also known as the Samarra Minaret, a true masterpiece of Islamic architecture.
                      </li>

                      <li>This iconic structure stands as a testament to the grandeur and ingenuity of ancient engineering, captivating all who gaze upon its intricate design
                        and soaring elegance.
                      </li>

                      <li>Marvel at the stunning array of ancient art, with some masterpieces only recently unearthed and meticulously restored, showcased at Baghdad’s
                        Iraq Museum.
                      </li>

                      <li>This breathtaking collection offers a glimpse into the rich cultural heritage of Mesopotamia, inviting visitors to journey through
                        history and admire the timeless beauty of these remarkable artifacts.
                      </li>
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
                        <li>
                          All accommodations and meals are
                          included as noted in the itinerary
                        </li>
                        This comprehensive package covers all
                        <li>internal/domestic flights, ensuring a
                          hassle-free journey.</li>
                        <li>All ground transportation, including
                          airport transfers</li>
                        <li>All sightseeing, events, and visits as
                          noted in the itinerary</li>
                        <li>All entrance fees, service charges, and
                          standard taxes</li>
                        <li>Services of a Midasia Routes Tour
                          leader, national guide, drivers, and
                          other staff</li>
                        <li>Gratuities for national guide, drivers,
                          porters, and other staff</li>
                        <li>Expertise of MidAsia’s Routes
                          specialists (24/7)</li>
                        <li>Services of MidAsia’s in-house air
                          reservations team</li>
                        <li>Bottled or filtered water at included
                          meals and while sightseeing</li>

                        <li>
                          The journey starts in Basra and finishes in Baghdad, immersing you in the heart of Mesopotamia. This expedition takes place in November, offering comfortable weather ranging from approximately 50°F to 80°F.</li>
                        <li>This Journey falls within the Level 1-3 experience range, involving individual hikes of up to 2 hours with gentle slopes, walks through towns or
                          cities lasting 1 or more hours, explorations of archaeological sites for 2-3 hours, and the ability to climb 3-4 flights of stairs and walk at least 2
                          miles with ease.</li>
                        <li>Expect a few bumpy and extended (4-5 hours) rides due to road conditions.</li>
                        <li>All accommodations are carefully chosen for their location, services, cleanliness, and private bathrooms.</li>
                        <li>Toilets: Clean western-style toilets available at accommodations, restaurants, and sites, but squat toilets may be encountered during drives.</li>
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

export default BabyLonToBhagdadTrip;
