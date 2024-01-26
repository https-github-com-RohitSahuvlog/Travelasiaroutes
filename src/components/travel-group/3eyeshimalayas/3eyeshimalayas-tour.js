import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./3eyeshimalayas-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Images } from "./3eyeshimalayas-image-data";
import { Link, useLocation } from 'react-router-dom';
import { HimalayasTripAccData } from "./3eyeshimalayas-accordian-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};


const HimalayasTrip = () => {
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

  console.log("packageTable", packageTable)

  return (
    <div>
      <div className={styles.MainUpperr}>
        <div className={styles.MainContent}>
          <h1 className={styles.Title} >Explore Tibet, Bhutan, and Nepal</h1>
          <div className={styles.Italic}>Discover the allure of this unique Himalayan experience..</div>
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
                    <img className={styles.ThirdPic} src="https://res.cloudinary.com/dxhoawdbh/image/upload/v1704087016/nepal-bhutan-tibet-tourist-map-small_iy2kno.jpg" alt="Central Asia Map" />
                    <div className={styles.map} id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15307174.479021687!2d81.90591966264314!3d20.501997562087155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Tibet%2C%20Bhutan%2C%20and%20Nepal!5e0!3m2!1sen!2sin!4v1704087166034!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    <p> Embark on an extraordinary 2-week sojourn through the captivating realms of Nepal, Tibet, and Bhutan   – a triumvirate of Himalayan jewels pulsating with culture, history, and natural grandeur. Your Luxury Trips Nepal Tibet Bhutan unfolds like a cherished tapestry, weaving through the ancient Durbar Squares of Kathmandu, the majestic Potala Palace in Lhasa, and the legendary Tiger's Nest Temple in Bhutan.</p>
                    <p>

                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>
                    Marvel at the breathtaking panoramas during thrilling Himalayan flights, relish the opulence of fine accommodations, and delight in the symphony of local flavors. Dive deep into the essence of these nations, forging connections with the gracious locals, and immersing yourself in the tapestry of rich cultures, enthralling history, picturesque landscapes, and exquisite craftsmanship. This is a journey where every step is a revelation, and every moment is a celebration of the extraordinary.

                    Don't miss this once-in-a-lifetime cultural adventure – where the extraordinary becomes the everyday, and where treasures are abundant in the heart of the Himalayas."
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Discover the Beauty of Explore Tibet, Bhutan, and Nepal</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={HimalayasTripAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Embark on an unforgettable journey through Nepal, Tibet, and Bhutan, three mystical Himalayan countries teeming with culture, history, and natural wonders.</li>
                      <li>Immerse yourself in the captivating ambiance of Kathmandu's ancient Durbar Squares, majestic stupas, and ornate temples.</li>
                      <li>Marvel at the sheer grandeur of Lhasa's iconic Potala Palace and explore the spiritual heart of Tibet at Jokhang Temple.</li>
                      <li>Set your spirit free on an exhilarating 5-hour hike to the awe-inspiring Tiger's Nest Temple, perched precariously on a Himalayan cliff in Bhutan.</li>
                      <li>Traverse the well-trodden path from Nagarkot to Dhulikhel, indulging in 4-5 hours of breathtaking hiking amidst nature's splendor.</li>
                      <li>Soar high above the clouds with thrilling Himalayan flights, treating your eyes to panoramic views of the world's most majestic mountain range.</li>
                      <li>Experience the epitome of comfort throughout your journey with the finest accommodations and delectable local cuisine.</li>
                      <li>Uncover the depths of history, religion, culture, and traditions as you connect with the warm and welcoming locals in each destination.</li>
                      <li>Traverse the vibrant cultures, rich histories, diverse landscapes, and exquisite craftsmanship of Kathmandu, Lhasa, and Thimphu.</li>
                      <li>Begin your adventure in Kathmandu, exploring renowned landmarks and ancient Durbar Squares, along with the spiritual serenity of Buddhist stupas and Hindu temples.</li>
                      <li>In Lhasa, Tibet, witness the ethereal beauty of Potala Palace, wander through the spiritual energy of Barkhor Bazaar, and delve into the wisdom of Sera and Drepung Monasteries.</li>


                    </ul>
                  </div>

                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Finally, land in the mystical realm of Bhutan, where the legendary Tiger's Nest Monastery beckons, surrounded by fortresses and Dzongs that speak of a bygone era.</li>
                      <li>Your heart will race as you touch down at Gongar Airport in Lhasa and Paro International Airport in Bhutan, treated to breathtaking panoramic views of the Himalayan peaks.</li>
                      <li>This all-inclusive cultural odyssey weaves together a tapestry of sights, sounds, and experiences, revealing the soul of the Himalayas.</li>
                      <li>Prepare to be enraptured by the charm and peace of the Himalayas, a once-in-a-lifetime adventure that will leave an indelible mark on your soul.</li>
                      <li>Witness the fusion of the past and present in Manila.</li>
                      <li>Admire the world's oldest rice terraces in Banaue.</li>
                      <li>Be intrigued by the curious Hanging Coffins in Echo Valley.</li>
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
                        <li>Private comfortable deluxe transportation</li>
                        <li>All necessary travel permits and visas</li>
                        <li>All International and Domestic flights between Nepal, Tibet, and Bhutan (Economy Class)</li>
                        <li>English-speaking local guide throughout the journey</li>
                        <li>Comfortable accommodation, best possible available throughout the journey</li>
                        <li>Sightseeing and monastery entrance fees as per the itinerary</li>
                        <li>Bhutan Sustainable Development Fee (SDF): US$ 200 per night/person (Effective from 20 June 2022)</li>
                        <li>Meal plan: Full Board Basis (B.-Breakfast, L.- Lunch, D.- Dinner): Breakfast and Dinner at the hotel, Lunch en-route.</li>
                        <li>Flights (Kathmandu to Lhasa and return & Kathmandu to Paro and return)</li>
                        <li>Tibet Group Visa and Bhutan Visa Clearance</li>
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

export default HimalayasTrip;
