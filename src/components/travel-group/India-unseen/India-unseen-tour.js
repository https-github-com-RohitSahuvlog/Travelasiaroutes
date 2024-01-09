import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./India-unseen-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Images } from "./India-unseen-image-data";
import { Link, useLocation } from 'react-router-dom';
import { IndiaTripAccData } from "./India-unseen-accordian-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};


const IndiaUnseenTrip = () => {
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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div>
      <div className={styles.MainUpperr}>
        <div className={styles.MainContent}>
          <h1 className={styles.Title}>Discover India's Hidden Wonders</h1>
          <div className={styles.Italic}>India's Unseen Charms Await.</div>
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
                    <p>
                      Discover the rich tapestry of India,<strong> "The Land of Diversity</strong>," where over 1.3 billion people contribute to a cultural mosaic. From the towering peaks of the Himalayas to the sun-kissed beaches of the Indian Ocean, India's vast expanse showcases a unity in diversity.
                      <br />
                      <br />
                      <br />
                      Explore the iconic Golden Triangle Tour, visiting Delhi, Agra, and Jaipur, where historic monuments like the Taj Mahal and Amber Fort reflect architectural brilliance and cultural richness.</p>
                    <p>

                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>
                    UNESCO World Heritage Sites like the Qutub Minar, Ajanta and Ellora Caves, and Fatehpur Sikri stand testament to India's rich cultural heritage. Marvel at the intricate temples of Khajuraho and experience the stories of Mughal dynasties in Rajasthan palaces. India's islands, including the Andaman and Nicobar Islands and Lakshadweep, offer tropical paradises with vibrant marine life.

                    Indulge in holistic wellness with renowned yoga retreats in Rishikesh or ayurvedic treatments amidst the lush greenery of Kerala. Relish the culinary symphony, from spicy curries to aromatic biryanis and delectable sweets. The best time to visit is from October to March, ensuring a pleasant experience whether exploring historical sites, trekking in the Himalayas, or savoring vibrant street food. India, a treasure trove of experiences, awaits discovery in every corner, from Rajasthan's palaces to Varanasi's ghats and Kerala's backwaters.
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Discover the Beauty of Explore India</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={IndiaTripAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>So many of India's best bits lie off the main routes, in small towns and villages where the ruling 'Panchayat' discuss business in the shade of a banyan tree, ploughs are still pulled by oxen, and it's not unusual to have your journey delayed by a brightly turbaned goatherd and his stock.</li>
                      <li>To experience the rural way of life, stay in a homestay, where you can meet the family, eat with them, and share stories. Over a pre-dinner drink with the owners of Shahpura Bagh, which is halfway between Udaipur and Jaipur in Rajasthan, you may get the chance to hear about India's history from people who have not only lived through it but were involved in key events.</li>
                      <li>In Kerala, one of the best homestays is Dewalokam, in Kodikulam, 70 km (43 miles) from Cochin. The hosts Jose and Sinta ensure everyone feels at home and has a wonderful stay in their eight-bedroom ancestral home. Being an organic farm, the food is fantastic. Walk through the spice plantations, cycle around the village, learn about beekeeping, cook with the chef, or just relax in the pool or with a yoga lesson.</li>
                      <li>When the ladies and gentlemen of the Raj needed to escape the heat of the plains, they would head up to the hill stations of Darjeeling or Shimla aboard the narrow gauge 'toy trains'. These trains still trundle their way around the hills, winding through tunnels hewn out of the mountainside and towns where they travel so close to the shops that you could reach out and help yourself.</li>
                      <li>As the trains take a somewhat leisurely pace, you may find it preferable to travel part way by train and meet your driver for the remainder of the journey. However, for those with time, the slow speed will allow you to adjust to the more laid-back pace of life in the Himalaya.</li>
                      <li>A religiously diverse country, India has a correspondingly large number of festivals, the most celebrated being Diwali and Holi, although you may well stumble across a local festival on your journey.</li>

                    </ul>
                  </div>

                  <div className={styles.SetDataLeft}>
                    <ul>

                      <li>Diwali falls in October or November and celebrates the victory of good over evil, light over darkness. As different parts of the country celebrate different Gods — Kali in Bengal, Lakshmi in Gujarat, for instance — you could find your experience of Diwali differs from that of others and makes for an interesting comparison. Wherever you are, you'll see lots of candles and hear plenty of firecrackers being set off in celebration.</li>
                      <li>A rambunctious festival, Holi is characterized by the throwing of colored powders and water, with streets and people transformed into vibrant rainbows. Be prepared to get involved if you're visiting India at this time — no one escapes. Many hotels will have their own celebrations, which we would recommend as being fun but much more restrained.</li>
                      <li>If you would like to be in India for one of the festivals, I would advise planning well in advance because the best hotels all get booked many months in advance.</li>
                      <li>Most trips to India will start or end in one of the country's main cities. While these can be a sensory shock for a first-time visitor, there is much to be gained from a night or two in an Indian city. One of our favorites is Mumbai.</li>
                      <li>A city of two halves, Mumbai showcases India's burgeoning global power, as well as its poverty. The collision of the two can be seen everywhere, and exploring the Dharavi slum with a local will show you a world often ignored by all but its inhabitants. While the hardship of life in the slum is obvious, you can also be struck by the dignity, resilience, and entrepreneurship of the people — it’s a truly fascinating and friendly place.</li>
                      <li>Contrasting this with afternoon tea in the Taj Mahal Palace hotel, a tour of the city's grand architecture, or a tour of the Bollywood studios will leave you with a distinct impression of the city's disparate halves, and how seamlessly these fit together to create such a memorable city.</li>
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
                      {packageTable.packDetails && packageTable.packDetails.map((detail) => (
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
                      }({packageTable.activity_level
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
                      *Facts and Inclusions Related to India
                    </div>
                    <div className={styles.HeadingContent}>
                      <ul>
                        <li>Private comfortable deluxe transportation</li>
                        <li>All necessary travel permits and visas</li>
                        <li>All International and Domestic flights between India, Nepal, Tibet, and Bhutan (Economy Class)</li>
                        <li>English-speaking local guide throughout the journey</li>
                        <li>Comfortable accommodation, best possible available throughout the journey</li>
                        <li>Sightseeing and monastery entrance fees as per the itinerary</li>
                        <li>Bhutan Sustainable Development Fee (SDF): US$ 200 per night/person (Effective from 20 June 2022)</li>
                        <li>Meal plan: Full Board Basis (B.-Breakfast, L.- Lunch, D.- Dinner): Breakfast and Dinner at the hotel, Lunch en-route.</li>
                        <li>Flights (Delhi to Lhasa, Kathmandu to Lhasa and return & Kathmandu to Paro and return)</li>
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

export default IndiaUnseenTrip;
