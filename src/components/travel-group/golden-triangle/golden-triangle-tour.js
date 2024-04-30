import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./golden-triangle-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Images } from "./golden-triangle-image-data";
import { Link, useLocation } from 'react-router-dom';
import { GoldenTriangleData } from "./golden-triangle-accordian-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};


const GoldenTriangleTrip = () => {
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
          <h1 className={styles.Title}>Exploring the Mystique of the Golden Triangle</h1>
          <div className={styles.Italic}>Journey through the Riches of Frankincense & Golden Sands</div>
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
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448254.5440711953!2d76.94918402777469!3d28.630103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1c1d68decf%3A0x4b77bb526ec7a6e7!2sNorthern%20India%20Tourism!5e0!3m2!1sen!2sin!4v1711195062888!5m2!1sen!2sin" width="450" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

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
                  <h2 className={styles.SetText}>Explore the Rich Heritage of the Golden Triangle</h2>
                  <h5 className={styles.SetTextWith}>(History, Culture, Architecture)</h5>
                </div>
                <MyAccordion AccordianData={GoldenTriangleData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Experience the Majestic Golden Temple Complex: Explore the sprawling complex surrounding the Golden Temple, encompassing stunning architectural marvels, serene gardens, and historical monuments.</li>
                      <li>Marvel at the Harmandir Sahib Architecture: Admire the exquisite architecture of Harmandir Sahib, characterized by its gleaming golden domes, intricate marble work, and ornate gilded details.</li>
                      <li>Take a Holy Dip in the Amrit Sarovar: Purify your soul by taking a symbolic dip in the sacred waters of the Amrit Sarovar (Pool of Nectar), believed to possess healing and spiritual properties.</li>
                      <li>Discover Sikh History at the Sikh Museum: Delve into the rich history and heritage of Sikhism at the Sikh Museum located within the Golden Temple complex, featuring exhibits, artifacts, and multimedia presentations.</li>
                      <li>Attend the Palki Sahib Ceremony: Witness the grand procession of the Guru Granth Sahib (Sikh holy scripture) during the Palki Sahib ceremony, where the sacred text is carried in a palanquin adorned with precious decorations.</li>
                      <li>Experience the Community Spirit at the Langar Hall: Participate in the communal dining experience at the Langar Hall, where volunteers serve free meals to thousands of visitors every day, promoting inclusivity and unity.</li>
                    </ul>
                  </div>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Enjoy Devotional Music at the Darbar Sahib: Immerse yourself in the soul-stirring hymns and devotional music performed by professional musicians at the Darbar Sahib (Court of the Lord), fostering a sense of spiritual upliftment and harmony.</li>
                      <li>Observe Sikh Traditions and Customs: Gain insight into Sikh customs and traditions by observing rituals such as Ardas (prayer), Sukhasan (bedtime prayer), and Hukamnama (divine command) at various times throughout the day.</li>
                      <li>Participate in Seva (Selfless Service): Engage in acts of Seva (selfless service) by volunteering in various tasks within the Golden Temple complex, such as cooking, serving food, cleaning utensils, or assisting pilgrims, embodying the Sikh principles of humility and service.</li>
                      <li>Explore the Heritage Street: Stroll along the vibrant Heritage Street leading to the Golden Temple, lined with colorful shops, eateries, and stalls selling religious artifacts, handicrafts, and traditional Sikh attire.</li>
                      <li>Witness the Akhand Path Ceremony: Attend the continuous recitation of the Guru Granth Sahib known as the Akhand Path, held in the sanctum sanctorum of the Golden Temple, creating an atmosphere of reverence and devotion.</li>
                      <li>Experience the Festive Atmosphere: Visit the Golden Temple during festive occasions such as Gurpurabs (Sikh festivals) and Baisakhi (harvest festival), witnessing elaborate decorations, processions, and special prayers conducted with fervent enthusiasm.</li>
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
                        <li>Expert leadership of a knowledgeable tour leader, local guides, drivers, and support staff throughout the trip</li>
                        <li>Assistance from the tour operator's in-house air reservations team for flight arrangements</li>
                        <li>Total trip duration of 14 days, offering ample time to explore the iconic destinations</li>
                        <li>The tour commences and concludes in Delhi, providing convenient access for travelers</li>
                        <li>Expedition limited to a maximum of 6 travelers, ensuring personalized attention and a small group experience</li>
                        <li>Accommodations carefully selected for their location, services, cleanliness, and amenities, including private bathrooms</li>
                        <li>All ground transportation and baggage handling included from the initial meeting point until departure</li>
                        <li>Sightseeing tours, visits to attractions, and entrance fees covered in the itinerary</li>
                        <li>Bottled water and soft drinks provided during meals and sightseeing excursions for refreshment</li>
                        <li>All meals included as per the detailed itinerary, featuring local cuisine and culinary experiences</li>
                        <li>A diverse range of activities outlined in the itinerary, offering opportunities for exploration and discovery</li>
                        <li>Availability of clean western-style toilets at accommodations, restaurants, and sites, with squat toilets available during travel</li>
                        <li>Internal/domestic flights included for seamless transportation between destinations</li>
                        <li>All gratuities for local drivers, guides, restaurants, and porters included, with the exception of the tour leader's gratuity</li>
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

export default GoldenTriangleTrip;
