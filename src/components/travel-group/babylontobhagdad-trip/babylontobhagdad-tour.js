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
                    <img className={styles.ThirdPic} src="https://res.cloudinary.com/dxhoawdbh/image/upload/v1712249264/Screen_Shot_2019-07-03_at_11.01.16_tiewtv.png" alt="Central Asia Map" />
                    <div className={styles.map} id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213393.0153867129!2d44.191088476903644!3d33.311864201866605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74193%3A0x9deda9d2a3b16f2c!2sBaghdad%2C%20Baghdad%20Governorate%2C%20Iraq!5e0!3m2!1sen!2sin!4v1712162962266!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

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
                  <h2 className={styles.SetText}>Discover the Beauty of Explore Babylon</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={babyLonToBhagdadTripAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Explore the ancient marvels of Babylon, a name evoking fairytales and mystery.</li>
                      <li>Experience the vibrant energy of Baghdad, the "Gate of the Gods."</li>
                      <li>Witness the enduring legacy of human ingenuity and ambition in Babylon's innovations.</li>
                      <li>Discover the roots of writing, the birth of HTML, and the origins of algebra.</li>
                      <li>Marvel at the base-60 numeral system, still used to measure time and angles today.</li>
                      <li>Immerse yourself in the timeless epic of Gilgamesh, a tale that predates the Old Testament.</li>
                      <li>Follow Gilgamesh's odyssey, his friendship with Enkidu, and encounters with Utanapishtim.</li>
                      <li>Reflect on the timeless wisdom embedded in Babylonian literature.</li>
                      <li>Delight in the parallels between Gilgamesh and biblical narratives.</li>
                      <li>Embrace the journey through time and legend in Mesopotamia, where every step unveils new wonders.</li>
                    </ul>
                  </div>

                  <div className={styles.SetDataLeft}>
                    <ul>


                      <li>Explore the remnants of Nebuchadnezzar's empire, including the iconic Ishtar Gate and the ziggurat of Marduk.</li>
                      <li>Experience the warmth of Iraqi hospitality in Baghdad's bustling bazaars and delectable cuisine.</li>
                      <li>Engage with local communities to learn about their traditions and contemporary challenges.</li>
                      <li>Marvel at the enduring contributions of Mesopotamia to civilization, from writing to mathematics.</li>
                      <li>Discover the enigma of Babylon, a place where myth meets reality and ancient wonders still stand.</li>
                      <li>Explore the vibrant streets of modern-day Baghdad, a city teeming with life and resilience.</li>
                      <li>Marvel at the fusion of past and present in Mesopotamia, where history comes alive with every step.</li>
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
                        <li>Expertly guided tours of historic sites</li>
                        <li>Exploration of the ancient city of Babylon</li>
                        <li>Visit to the Ishtar Gate and the Hanging Gardens</li>
                        <li>Insight into the rich history of Mesopotamia</li>
                        <li>Excursion to the ruins of Ur, birthplace of Abraham</li>
                        <li>Guided tour of the ancient city of Uruk</li>
                        <li>Exploration of the ziggurat at Eridu</li>
                        <li>Visit to the archaeological site of Nippur</li>
                        <li>Insightful facts about ancient Mesopotamian civilization</li>
                        <li>Engaging discussions on the contributions of Mesopotamia to human history</li>
                        <li>Opportunities to learn about ancient languages and writing systems</li>
                        <li>Exploration of the ancient city of Baghdad</li>
                        <li>Visit to the National Museum of Iraq</li>
                        <li>Discovering the rich cultural heritage of modern Iraq</li>
                        <li>Tasting traditional Iraqi cuisine</li>
                        <li>Engaging with local artisans and craftsmen</li>
                        <li>Opportunities for photography and relaxation</li>
                        <li>Comfortable accommodations throughout the journey</li>
                        <li>Transportation provided for all included activities</li>
                        <li>Expert local guides providing insights and commentary</li>
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
