import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./oman-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Images } from "./oman-image-data";
import { Link, useLocation } from 'react-router-dom';
import { OmanTripAccData } from "./oman-accordian-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};


const OmanTrip = () => {
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
          <h1 className={styles.Title}>Unexpected Oman</h1>
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
                    <img className={styles.ThirdPic} src="https://res.cloudinary.com/dxhoawdbh/image/upload/v1704166281/12001067131044_bnfolo.png" alt="Central Asia Map" />
                    <div className={styles.map} id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58670948.53432763!2d-17.58548450000002!3d26.16443850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef6f5d4fb3f8b55%3A0x7f2ace0ed866fae3!2sMusandam%20Oman!5e0!3m2!1sen!2sin!4v1704168573126!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    <p>
                      <strong>Explore a land of vibrant souks, nesting sea turtles and stunning scenic beauty.</strong>

                      The pacific nation of Oman surprises travelers with its desert beauty, soaring mountains, and pristine beaches.
                      <br />
                      We’ve designed this Oman itinerary to unveil the country’s unforeseen mysteries.
                    </p>
                    <p>
                      Led by a knowledgeable Oman tour guide, you get to know Muscat and its splendid Islamic architecture before tracing the Arabian Sea south to old port towns, lush date plantations, and Oman beaches known for nesting sea turtles
                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>

                    Then it’s inland to gorgeous more arid landscapes, where you overnight amid soaring sand dunes and visit forest-clad gorges and cliff-top towns.
                    Venture across the mesmerizing Sultanate of Oman, a hidden gem of the Middle East. Enjoy camel rides and encounter Bedouin tribes in the rolling dunes of the Wahiba Sands. Take in Oman's fascinating heritage: walk through ancient Arabia's frankincense trade sites and souqs overflowing with fabrics and handicrafts. Drive up to the terrace-style orchards of Al Jebel Al Akhdar Mountains and Prophet Job's Tomb. Visit abandoned villages, embark on a sunset cruise, and spend a night in a Bedouin-style tent. See the best of Oman - in just 2 weeks.
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Discover the Beauty of Explore Oman</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={OmanTripAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>A private, tailor-made tour of stunning Oman that’s off the tourist radar.</li>
                      <li>Oman's fascinating heritage: walk through ancient Arabia's frankincense trade sites.</li>
                      <li>Revel in starlit dunes, oases, coastlines, and Islamic architecture.</li>
                      <li>Camping On Another Planet: The Empty Quarter-Rub’ al Khali.</li>
                      <li>Royal Opera House and Sultan Qaboos Grand Mosque (one of the largest mosques in the Middle East).</li>
                      <li>Amble through quaint villages, fertile farmlands, and Muscat museums.</li>
                      <li>Experience thrilling Oman souks, markets, and forts.</li>
                      <li>Meet Bedouins and learn about their lifestyle.</li>

                    </ul>
                  </div>

                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Visit bright angling harbors and old exchanging ports, meet a neighborhood classicist.</li>
                      <li>Explore brilliant sand ridges by camel and 4WD vehicle.</li>

                      <li>Roam the tight back streets of Oman's conventional markets, appreciate a private dhow voyage.</li>
                      <li>Explore the precipice embracing towns, richly terraced gardens, and memorable strongholds of the Hajar Mountains.</li>
                      <li>Visit the Nizwa Goat Market.</li>
                      <li>Cross the rolling dunes of Wahiba Sands on camel and sleep in a Bedouin tent.</li>
                      <li>DESERT CRUISING AND TURTLES OF OMAN.</li>
                      <li>Visit Oman's most exquisite mosque, made to accommodate up to 20,000 worshippers.</li>
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
                        <li>14 days expedition with a maximum of 8 travelers in a group.</li>
                        <li>This expedition is a gently adventurous experience designed for history, Arab culture, nature, and adventure lovers.</li>
                        <li>All domestic Airfares during the trip.</li>
                        <li>Start & finish in Muscat.</li>
                        <li>All meals included as mentioned in the itinerary.</li>
                        <li>Temperatures-Oman has a reliably warm climate and can be visited any time, avoiding the scorching summer months between June and August. The weather is most pleasant from October through to April.</li>
                        <li>Nights in Mountains and Deserts might be 10 degrees cooler than normal temperatures in the cities.</li>
                        <li>All activities, boat trips.</li>
                        <li>Airport/hotel/airport transfers in every city.</li>
                        <li>Accommodation-11 Nights Comfortable Accommodations in well-located hotels with private bathrooms on a twin-sharing basis as per the program (Mostly 4*/5* stars categories where options are available), 1 night in modified Bedouin tents with twin beds and private bathrooms; 1 night in simple tented camps in Empty Quarter with shared bathrooms.</li>
                        <li>Services of English-speaking guides and a MiddleAsia Routes Tour-leader throughout the trip.</li>
                        <li>Porterage at airports and hotels throughout the program.</li>
                        <li>Entrance fees to all visited historical sites and museums.</li>
                        <li>Water on board every day.</li>
                        <li>Gratuities to guides, drivers, and porters.</li>
                        <li>All taxes.</li>
                        <li><strong>COMFORT NOTES</strong>-Few rough/dusty roads and long drives. Few drives in the trip are around (5-6 hours) but very picturesque through the mountains and valleys. Few off-road adventure drives, like mountains, wadis, oasis, and desert crossing.</li>
                        <li><strong>Transportation</strong>-Travel is partially by comfortable Minibus, 4-wheel-drive Land Cruisers & traditional dhows. Roads can be rough, and some off-roading may be required. (Each Land Cruiser is used for 3 travelers only, so all 3 travelers can enjoy window seats.)</li>
                        <li><strong>Activity level 2</strong> (This may include hikes of 1 hour, which may have gentle slopes. Walking through towns or cities for 1 or more hours. Archeological sites for 2-3 hours. Should be able to climb 1-2 flights of stairs and walk at least 2 miles with no problem.)</li>
                        <li><strong>Toilets</strong>-There are clean western-style toilets available at your accommodations/restaurants/sites, but on the way while driving to our destination, very few squat toilets are available. Most of the time, we try to stop at western-style toilets.</li>
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

export default OmanTrip;
