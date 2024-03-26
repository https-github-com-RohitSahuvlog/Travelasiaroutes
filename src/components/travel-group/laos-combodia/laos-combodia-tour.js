import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./laos-combodia-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Images } from "./laos-combodia-image-data";
import { Link, useLocation } from 'react-router-dom';
import { LaosCombodiaData } from "./laos-combodia-accordian-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};


const LaosCombodiaTrip = () => {
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
                    <img className={styles.ThirdPic} src="https://res.cloudinary.com/dxhoawdbh/image/upload/v1711194926/North_India_qqcsr8.jpg
                    " alt="Central Asia Map" />
                    <div className={styles.map} id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448254.5440711953!2d76.94918402777469!3d28.630103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1c1d68decf%3A0x4b77bb526ec7a6e7!2sNorthern%20India%20Tourism!5e0!3m2!1sen!2sin!4v1711195062888!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    <p>
                      Explore the Mystique of Laos: Delve into the heart of Southeast Asia's hidden treasure with our Laos Expedition. This immersive journey offers a glimpse into a nation untouched by mass tourism, where every corner reveals a story of natural wonder and cultural richness.
                    </p>
                    <p>
                      Traverse mist-veiled mountains, meandering rivers, and lush countryside as you uncover the untouched beauty of Laos. From serene villages nestled amidst verdant landscapes to the mighty Mekong River, nature takes center stage, inviting you to discover its secrets.
                      Venture beyond the tourist trail and embark on unforgettable adventures in Laos. Whether trekking through remote wilderness, exploring ancient temples, or cruising along the Mekong Delta, every moment promises discovery and adventure.
                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>
                    Enjoy privileged access to hidden gems and lesser-known attractions, curated to provide you with an authentic and unforgettable Laotian experience. From intimate encounters with local communities to behind-the-scenes explorations, our expedition offers a truly immersive journey into the heart of Laos.

                    Travel with confidence under the expert guidance of seasoned professionals who are passionate about sharing their knowledge and love for Laos. Benefit from insider insights, personalized recommendations, and unparalleled service throughout your expedition.

                    Join us on this extraordinary journey and uncover the hidden treasures of Laos, where adventure, culture, and natural beauty converge to create an unforgettable travel experience
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
                <MyAccordion AccordianData={LaosCombodiaData} />
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
                        <li>Maximum 6 travelers</li>
                        <li>All domestic Airfares during the trip</li>
                        <li>International airfare from Bangkok to Chiang Rai</li>
                        <li>Start in Bangkok & finish in Cambodia (Siem Reap)</li>
                        <li>All meals included as mentioned in itinerary</li>
                        <li>This Expedition runs in January and in February - Average Weather in February in Laos/Cambodia: Daily high temperatures from 78°F to 83°F, rarely falling below 71°F or exceeding 89°F. Daily low temperatures are around 58°F, rarely falling below 50°F or exceeding 64°F</li>
                        <li>All Mekong cruising</li>
                        <li>Airport/hotel/airport transfers in every city</li>
                        <li>Comfortable Accommodations in hotels with private bathrooms on twin sharing basis as per the program (based on 3-4 stars categories and few 5* hotels in larger cities)</li>
                        <li>Sightseeing in each city as per the itinerary</li>
                        <li>Services of English speaking guides and a Midasia Routes Tour-leader throughout the trip</li>
                        <li>Porterage at airports and hotels throughout program</li>
                        <li>Entrance fees to all visited historical sites and museums</li>
                        <li>Water on board every day</li>
                        <li>Gratuities to guides, drivers, and porters</li>
                        <li>All taxes</li>
                        <li>COMFORT NOTES: Some rough/dusty roads and long drives</li>
                        <li>Activity level 2-3. This may include hikes of couple of hours, which may have gentle slopes. Walking through towns or cities for 1 or more hours. Archeological sites for 2-3 hours. Should be able to climb 3-4 flights of stairs and walk at least 2 miles with no problem</li>
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

export default LaosCombodiaTrip;
