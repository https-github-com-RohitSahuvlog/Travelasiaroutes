import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./northern-india-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Images } from "./northern-india-image-data";
import { Link, useLocation } from 'react-router-dom';
import { NorthernTripAccData } from "./northern-india-accordian-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};


const NorthernIndiaTrip = () => {
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
          <h1 className={styles.Title}>Unexpected Northern India</h1>
          <div className={styles.Italic}>The land of Frankincense & Golden Sands.</div>
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
                    <img className={styles.ThirdPic} src="https://res.cloudinary.com/dxhoawdbh/image/upload/v1711194926/North_India_qqcsr8.jpg
                    " alt="Central Asia Map" />
                    <div className={styles.map} id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448254.5440711953!2d76.94918402777469!3d28.630103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1c1d68decf%3A0x4b77bb526ec7a6e7!2sNorthern%20India%20Tourism!5e0!3m2!1sen!2sin!4v1711195062888!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    <p>
                      Embark on an extraordinary exploration of Himalayas, a region recently unveiled to tourism, and delve into its enigmatic allure on this exclusive journey. Traverse the pristine mountains surrounding Kashmir, immersing yourself in the natural splendor while sharing tea with local villagers and discovering the vibrant floating market of Lake Dal.
                    </p>
                    <p>
                      Explore the legendary "Seat of Solomon" and uncover the mystical tales that shroud this mythical site.
                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>

                    Journey onwards to Dharamsala, home to the spiritual community of the Dalai Lama, where profound spirituality permeates the air, offering a glimpse into the essence of Tibetan culture. Marvel at the resplendent Sikh Golden Temple in Amritsar, a symbol of Sikhism's enduring spirit and devotion.

                    Prepare for a spectacle at the Wagah border ceremony, where the vibrant pageantry of tradition unfolds against a backdrop of national pride and unity. Throughout your adventure, savor a culinary tapestry of Tibetan, Indian, and Kashmiri flavors, indulging in classic dishes that tantalize the taste buds and enrich the cultural experience.
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Discover the Beauty of Explore Northern India</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={NorthernTripAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Enigmatic Kashmir Unveiled: Embark on an exclusive journey to Kashmir, a region recently opened to tourism, where mysteries await exploration amidst breathtaking landscapes and rich cultural tapestries.</li>
                      <li>Pristine Mountain Hikes: Traverse the pristine mountains surrounding Srinagar, immersing yourself in the untouched beauty of nature while embarking on invigorating hikes through picturesque terrain.</li>
                      <li>Tea with Local Villagers: Delight in the warmth of Kashmiri hospitality as you share tea with local villagers, gaining insights into their traditions, stories, and way of life amidst the tranquil beauty of the region.</li>
                      <li>Vibrant Floating Market: Experience the vibrant ambiance of Lake Dal's floating market, where colorful boats adorned with a plethora of goods create a mesmerizing spectacle against the backdrop of serene waters.</li>
                      <li>Exploration of the "Seat of Solomon": Uncover the ancient mysteries surrounding the mythical "Seat of Solomon," delving into the legends and lore that have shrouded this iconic site for centuries.</li>
                      <li>Spiritual Retreat in Dharamsala: Immerse yourself in the deep spirituality of Dharamsala, the abode of the Dalai Lama's community, where tranquility and enlightenment await amidst serene surroundings.</li>
                      <li>Visit bright angling harbors and old exchanging ports, meet a neighborhood classicist.</li>

                    </ul>
                  </div>

                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Explore brilliant sand ridges by camel and 4WD vehicle.</li>
                      <li>Roam the tight back streets of Oman's conventional markets, appreciate a private dhow voyage.</li>
                      <li>Explore the precipice embracing towns, richly terraced gardens, and memorable strongholds of the Hajar Mountains.</li>
                      <li>Visit the Nizwa Goat Market.</li>
                      <li>Cross the rolling dunes of Wahiba Sands on camel and sleep in a Bedouin tent.</li>
                      <li>DESERT CRUISING AND TURTLES OF OMAN.</li>
                      <li>Visit Oman's most exquisite mosque, made to accommodate up to 20,000 worshippers.</li>
                      <li>Magnificent Sikh Golden Temple: Behold the resplendent beauty of the Sikh Golden Temple in Amritsar, a testament to Sikhism's enduring faith and architectural grandeur.</li>
                      <li>Spectacular Wagah Border Ceremony: Witness the vibrant pageantry of the Wagah border ceremony, an electrifying display of national pride and unity that captivates the senses and stirs the soul.</li>
                      <li>Culinary Delights: Indulge in a gastronomic journey through classic Tibetan, Indian, and Kashmiri cuisine, savoring the flavors of traditional dishes that tantalize the palate and celebrate the rich culinary heritage of the region.</li>
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
                          <li>Expert leadership of a Midasia Tour leader (Group Trip), local guides, drivers, and other staff</li>
                          <li>Services of MIDASIA ROUTES in-house air reservations team</li>
                          <li>Total trip duration of 14 days</li>
                          <li>Trip starts in Delhi and finishes in Delhi</li>
                          <li>Expedition limited to a maximum of 6 travelers and a Tour leader</li>
                          <li>All accommodations as mentioned in the itinerary. Accommodations are carefully selected based on location, services, cleanliness, and with private bathrooms</li>
                          <li>All ground transportation and baggage handling from meeting until departure</li>
                          <li>Sightseeing, events, visits, and entrance fees</li>
                          <li>Bottled water/Soft drinks included at meals and during sightseeing</li>
                          <li>All meals as mentioned in the itinerary</li>
                          <li>All activities as indicated in the detailed itinerary</li>
                          <li>Toilets: Clean western-style toilets available at accommodations/restaurants/sites. Squat toilets available during drives to destinations</li>
                          <li>All internal/domestic flights</li>
                          <li>All gratuities for local drivers, guides, restaurants, porters, except MIDASIA ROUTES Trip Leader</li>
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

export default NorthernIndiaTrip;
