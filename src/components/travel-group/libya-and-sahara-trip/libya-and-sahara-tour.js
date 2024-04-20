import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./egypt-and-nile-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Images } from "./libya-and-sahara-image-data";
import { Link, useLocation } from 'react-router-dom';
import { EgyptAndNileTripAccData } from "./libya-and-sahara-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';


const EgyptAndNileTrip = () => {
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
          <h1 className={styles.Title}>Egypt and The Nile</h1>
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

                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691315.447833254!2d29.195612835362276!3d25.378010497778707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74193%3A0x9deda9d2a3b16f2c!2sBaghdad%2C%20Baghdad%20Governorate%2C%20Iraq!5e0!3m2!1sen!2sin!4v1712171410637!5m2!1sen!2sin" width="450" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    <p>
                      Egypt and the Nile: a timeless union steeped in history and legend. For nearly 2,500 years, this symbiotic relationship has been lauded by scholars and poets alike. As Herodotus observed centuries ago, "Egypt is an acquired country, the gift of the river." Indeed, the ancient Egyptians flourished along the fertile banks of the Nile, harnessing its life-giving waters to cultivate a civilization unparalleled in its grandeur.

                      From the majestic pyramids of Giza to the iconic temples of Luxor and Karnak, Egypt's landscape is adorned with monuments that bear testament to the ingenuity and ambition of its people. Even in the days of Herodotus, Egypt and its revered river captivated the imaginations of all who beheld them.

                      <br />
                      <br />
                      This custom tour of Egypt invites you to immerse yourself in the timeless allure of this ancient land and its legendary river. Explore the magnificent temples and tombs that line the Nile's shores, each a testament to Egypt's rich heritage and enduring legacy. Journey through millennia of history as you uncover the mysteries of the pharaohs and marvel at the architectural marvels they left behind.

                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>

                    From the bustling streets of Cairo to the serene banks of Aswan, this tour offers a glimpse into the heart and soul of Egypt. Experience the vibrant culture and hospitality of its people, savor the flavors of traditional Egyptian cuisine, and embark on a voyage of discovery unlike any other.

                    Join us as we celebrate the timeless connection between Egypt and the Nile, two entities forever intertwined in the annals of history and the depths of our imagination. This journey promises to be an unforgettable odyssey through the wonders of one of the world's most captivating destinations.

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
                  <h2 className={styles.SetText}>Discover the Beauty of Explore Egypt</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={EgyptAndNileTripAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Explore the iconic Pyramids of Giza</li>
                      <li>Marvel at the enigmatic Sphinx</li>
                      <li>Discover ancient artifacts at the Egyptian Museum</li>
                      <li>Stroll through the historic streets of Cairo</li>
                      <li>Experience a traditional Egyptian meal</li>
                      <li>Take a felucca ride on the Nile River</li>
                      <li>Visit the Temple of Philae in Aswan</li>
                      <li>Witness the grandeur of the High Dam</li>
                      <li>Explore the temples of Kom Ombo</li>
                      <li>Discover the treasures of Luxor's Karnak Temple</li>

                    </ul>
                  </div>

                  <div className={styles.SetDataLeft}>
                    <ul>

                      <li>Visit the Valley of the Kings in Luxor</li>
                      <li>Marvel at the Temple of Hatshepsut</li>
                      <li>See the Colossi of Memnon</li>
                      <li>Experience a sunrise hike up Mount Sinai</li>
                      <li>Explore St. Catherine's Monastery</li>
                      <li>Discover ancient churches in Coptic Cairo</li>
                      <li>Visit the historic Islamic Citadel</li>
                      <li>Explore the vibrant Khan El Khalili Bazaar</li>
                      <li>Take in the sights of modern Cairo</li>
                      <li>Experience the warm hospitality of the Egyptian people</li>
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
                        <li>Expertly guided tours of iconic landmarks</li>
                        <li>Visits to the Pyramids of Giza and the Sphinx</li>
                        <li>Exploration of the Egyptian Museum's vast collection</li>
                        <li>Traditional Egyptian meals included</li>
                        <li>Scenic felucca ride on the Nile River</li>
                        <li>Excursions to the temples of Philae and Kom Ombo</li>
                        <li>Guided tour of Luxor's Karnak Temple and the Valley of the Kings</li>
                        <li>Visit to the Temple of Hatshepsut and the Colossi of Memnon</li>
                        <li>Experience a sunrise hike up Mount Sinai</li>
                        <li>Exploration of St. Catherine's Monastery</li>
                        <li>Discover ancient churches in Coptic Cairo</li>
                        <li>Visit the historic Islamic Citadel</li>
                        <li>Exploration of the vibrant Khan El Khalili Bazaar</li>
                        <li>Insightful facts about Egyptian history and culture</li>
                        <li>Engaging cultural experiences and interactions</li>
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

export default EgyptAndNileTrip;
