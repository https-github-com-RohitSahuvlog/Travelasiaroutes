import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./india-kumbh-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Images } from "./india-kumbh-image-data";
import { Link, useLocation } from 'react-router-dom';
import { IndiaKumbhTripAccData } from "./india-kumbh-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};


const IndiaKumbhTrip = () => {
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
          <h1 className={styles.Title}>India's Kumbh Mela Festival</h1>
          <div className={styles.Italic}>Explore India's sacred Kumbh Mela: engage with sadhus, boat rides, and spiritual wonders await.</div>
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
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618758.5103347427!2d77.37141169397695!3d27.657208648604982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acad16d98ab95%3A0x43d73eb6d5b82c5!2sTriveni%20Sangam%2C%20Prayagraj!5e0!3m2!1sen!2sin!4v1711946463745!5m2!1sen!2sin" width="450" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    <p>
                      Embark on a transformative journey through India, immersing yourself in the sacred atmosphere of the Kumbh Mela festival, a monumental gathering of pilgrims that occurs only once every 12 years. Join an exclusive private tented camp for three nights, situated right amidst the vibrant pulse of the Kumbh Mela grounds. Here, you'll have the rare opportunity to engage with revered sadhus (holy men) and spiritual leaders, enriched by guest lectures from Lakshmi Singh, a disciple of Advaita Vedanta Hinduism.
                      <br />
                      <br />
                      Before delving into the immersive experience of the Kumbh Mela, our journey takes us through a tapestry of cultural marvels. Explore the World Heritage-listed medieval city of Hampi, steeped in history and architectural splendor. Traverse the former princely state of Hyderabad, where Hinduism and Islam intertwine, offering insights into a rich tapestry of cultural heritage. Then, venture to the enchanting city of Varanasi, where ancient traditions come to life against a backdrop of timeless spirituality.

                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>

                    Experience the essence of India through a series of unforgettable highlights:

                    Drift along the sacred Ganges River in Varanasi as the sun casts its golden hues upon the waters, witnessing pilgrims engage in morning prayers along the ghats, a truly mesmerizing sight.

                    Embark on a thought-provoking journey through the mystical alleyways of Varanasi after dark, exploring the intricate connections between life, death, and spiritual rebirth in this holiest of cities.

                    Engage in enlightening conversations with revered spiritual leaders and holy figures at our private camp within the Kumbh Mela grounds, gaining unique insights into India's profound spiritual traditions.

                    Benefit from the expertise of our knowledgeable guides who provide insider perspectives on India's living traditions, offering deeper understanding and appreciation of the country's rich cultural heritage.

                    Wander through the atmospheric ruins of Hampi, a UNESCO World Heritage Site, where ancient temples and grandiose architecture transport you back in time to the medieval glory of the Vijayanagara Empire.

                    Immerse yourself in the bustling markets of Hyderabad, where the vibrant tapestry of Hindu and Islamic influences weaves through the colorful streets, offering a sensory feast of sights, sounds, and flavors.
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Discover the Beauty of Explore Kumbh Mela</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={IndiaKumbhTripAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>The Kumbh Mela is the largest peaceful gathering of people on Earth.</li>
                      <li>It is held at four sacred locations, rotating every three years.</li>
                      <li>The event is based on the Hindu myth of the Samudra Manthan (Churning of the Ocean).</li>
                      <li>Millions of pilgrims bathe in the holy rivers to cleanse their sins and attain moksha (liberation).</li>
                      <li>The festival is a convergence of various sects, showcasing the diversity of Hinduism.</li>
                      <li>Temporary cities are erected to accommodate the massive influx of devotees.</li>
                      <li>It is a platform for spiritual discourse, with sages and scholars sharing wisdom.</li>
                    </ul>
                  </div>

                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>The Kumbh Mela has been inscribed on UNESCO's Representative List of Intangible Cultural Heritage.</li>
                      <li>Massive processions and rituals captivate the senses, offering a glimpse into ancient traditions.</li>
                      <li>The event promotes environmental awareness, emphasizing the importance of river conservation.</li>
                      <li>Security measures ensure the safety of millions, with extensive crowd management strategies.</li>
                      <li>It is a testament to India's rich heritage and tradition, attracting visitors from across the globe.</li>
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
                        <li>The Kumbh Mela is one of the largest religious gatherings in the world.</li>
                        <li>It is held at four different locations in India: Prayagraj, Haridwar, Nashik, and Ujjain.</li>
                        <li>According to Hindu mythology, the Kumbh Mela is celebrated every 12 years.</li>
                        <li>Pilgrims gather to bathe in the sacred rivers, believed to cleanse sins and bestow blessings.</li>
                        <li>The festival attracts millions of devotees, Sadhus (holy men), and tourists from around the globe.</li>
                        <li>Temporary tented cities are set up to accommodate the massive influx of pilgrims.</li>
                        <li>The event is known for its vibrant cultural performances, religious rituals, and spiritual discourses.</li>
                        <li>Security measures are stringent to ensure the safety of all attendees.</li>
                        <li>Medical facilities and aid stations are established to provide healthcare services to pilgrims.</li>
                        <li>The Kumbh Mela is recognized by UNESCO as an intangible cultural heritage of humanity.</li>
                        <li>It is a significant economic event for the local communities, boosting tourism and commerce.</li>
                        <li>The Kumbh Mela is a symbol of India's rich religious and cultural diversity.</li>
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

export default IndiaKumbhTrip;
