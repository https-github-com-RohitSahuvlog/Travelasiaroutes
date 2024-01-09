import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./japan-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { JapanImages } from "./slider-image-data";
import { Link, useLocation } from 'react-router-dom';
import { JapanAccordianData } from "./japan-accordian-data";
import Axios from '../../../api';
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import { useDispatch, useSelector } from 'react-redux';


const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};

const JapanTrip = () => {
  const location = useLocation();
  const [packageTable, setpackageTable] = useState([]);
  const allPackage = useSelector((state) => state.travelPackages);
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
          <h1 className={styles.Title} > NEPAL ADVENTURE</h1>
          <div className={styles.Italic}>Nepal Unveiled: Embark on Epic Adventures</div>
          <div className={styles.GoButton}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Start Planning
            </Button>
          </div>
        </div>
        <div className={styles['your-component']}>
          <Modal
            open={open}
            handleClose={handleClose}
          />
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
                    <img className={styles.ThirdPic} src="https://japanmap360.com/img/1200/map-japan-surrounding-countries.jpg.webp" alt="Central Asia Map" />
                    <div className={styles.map} id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717262.2146401946!2d83.30794318296394!3d27.751361831250854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sin!4v1697392287483!5m2!1sen!2sin" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>

                  <div className={styles.tripfeedbackquote}>
                    <p>A tiny Himalayan country where sherpas trudge the mountain paths and prayer flags crisscross the sky, their fluttering Buddhist mantras snatched on the breeze</p>
                    <br />
                    <br />
                    <p>
                      Nestled within the rugged embrace of the Himalayas, Nepal is a jewel among nations, a place where the very essence of adventure, spirituality, and raw natural beauty converge. Picture this: Sherpas, the unsung heroes of these towering peaks, navigating treacherous mountain paths, each step echoing with a centuries-old legacy of resilience. Above them, prayer flags dance like ethereal spirits, carrying the whispers of Buddhist mantras into the boundless sky. It's a land where we can't help but let our hearts choose favorites, especially after three decades of guiding intrepid souls through its enchanting tapestry.
                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>


                    Everest Base Camp beckons, a pilgrimage for those who dare to touch the roof of the world. The Annapurna region unfurls its rhododendron-clad forests, a living canvas of vibrant colors. Venture into Chitwan National Park, where rhinos roam freely, a testament to Nepal's commitment to wildlife preservation. And amidst the labyrinthine streets of Kathmandu's Thamel, immerse yourself in the sensory symphony of sizzling momos and the warm camaraderie of locals.
                    <br />
                    <br />
                    Regardless of the path you tread, one promise holds true: Nepal is an unparalleled experience, a place where the soul finds solace, and wanderlust finds its muse. The diversity here extends far beyond landscapes; it's a cultural kaleidoscope, where traditions are as vivid as the landscapes themselves. Slow-moving Himalayan glaciers, crystalline lakes, cascading waterfalls, and emerald forests that stretch to infinity—all contribute to Nepal's ethereal beauty, a testament to nature's artistry that you won't find replicated anywhere else on this planet.
                    <br />
                    <br />
                    Nepal isn't just a destination; it's an odyssey, an opportunity to embrace the extraordinary. It's where dreams ascend, where inner peace finds its sanctuary, and where every step taken is a promise of adventure. So, heed the call of the Himalayas and discover Nepal, for it's a voyage that will etch itself into your heart, forever changing the way you see the world.</p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>The Paraglide Nepal</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Paraglide, Trek in Himalayas)</h5>
                </div>
                <MyAccordion AccordianData={JapanAccordianData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Explore the enchanting Kathmandu Durbar Square and Kumari Temple, where the living goddess resides.</li>
                      <li>Ascend to the serene Swyambhunath Stupa, also known as the Monkey Temple, with its panoramic views.</li>
                      <li>Immerse yourself in the artistic splendors of Patan City, a treasure trove of crafts and culture.</li>
                      <li>Witness the spiritual fervor at Pashupatinath, a revered Hindu temple by the Bagmati River.</li>
                      <li>Marvel at the grandeur of Boudhanath Stupa, the largest stupa in Nepal and a symbol of Tibetan Buddhism.</li>
                      <li>Step back in time in Bhaktapur, the city of devotees, where history whispers through ancient streets.</li>
                      <li>Embark on a unique adventure with a 'street helicopter' ride, exploring local life from a rickshaw.</li>
                      <li>Soar like a bird paragliding over the majestic Himalayan landscapes.</li>

                    </ul>
                  </div>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Encounter wildlife in their natural habitat at Chitwan National Park, a UNESCO World Heritage site.</li>
                      <li>Delve into the serenity of Buddhist monasteries, where spirituality and tranquility converge.</li>
                      <li>Discover the natural beauty of Pokhara, a city nestled by serene lakes and towering mountains.</li>
                      <li>Glide across the pristine waters of Phewa Lake and visit the picturesque Barahi Temple in its midst.</li>
                      <li>Gain insight into the resilient lives of Tibetan refugees living in Nepal.</li>
                      <li>Catch the breathtaking sunrise over the Himalayas from Sarangkot.</li>
                      <li>Explore the wonders of Seti River Gorge, Mahadev Cave, and David's Fall.</li>
                      <li>Embark on epic treks and hikes through remote Himalayan regions, including the scenic Australian Camp.</li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>

            <div className={styles.section} ref={section3Ref} id={styles.section3}>
              <div className={styles.SettingHeadingRatio}>
                <div className={styles.SetText}>DATES & PRICES</div>

              </div>

              <div className={styles.tab_content} style={{ display: 'block' }}>
                <div className={styles.table_data}>
                  <table className={styles.table_bordered}>
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
                        <tr key={detail._id} className={styles.pricingRow}>
                          <td>{new Date(detail.startDate).toLocaleDateString('en-GB')}</td>
                          <td>{new Date(detail.endDate).toLocaleDateString('en-GB')}</td>
                          <td>{`$ ${detail.price} USD`}</td>
                          <td style={{ width: 'auto' }}>{`$ ${detail.singleSupplementPrice} USD`}</td>
                          <td style={{ padding: '5px' }}>
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
                          <td>{`${detail.availability} Spaces`}</td>
                          <td>
                            <Link to="/bespoke">
                              <button className={styles.btn_booknow}>Book Now</button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* <div className={styles.travel_sts}>
                  <span className={getStatusStyle(packageTable.status)}>{getStatusIcon(packageTable.status)}</span>
                  <span>{packageTable.status ? 'Guaranteed Departures' : 'Not Guaranteed Departures'}</span>
                </div> */}
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', margin: '10px' }}>
                  <Link to="/activitylevel">
                    <button className={`${styles.btn_booknow}`}>
                      Activity-Level {" "}({packageTable.activity_level})
                    </button>
                  </Link>
                  <button className={`${styles.btn_booknow}`} onClick={handleOpen}>
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
                        <li>Total trip duration: 15 days</li>
                        <li>Trip starts and finishes in Kathmandu, immersing you in the heart of Nepal.</li>
                        <li>This expedition takes place in March, offering comfortable weather ranging from approximately 45°F to 80°F.</li>
                        <li>Altitude levels vary from 800 meters to 2250 meters, ensuring diverse landscapes throughout your journey.</li>
                        <li>Expect bumpy and extended (5-6 hours) rides due to road conditions.</li>
                        <li>Prepare for climbs with up to 1000 steps to reach certain destinations.</li>
                        <li>Toilets: Clean western-style toilets available at accommodations, restaurants, and sites, but squat toilets may be encountered during drives.</li>
                        <li>Experience a thrilling 2-day hike/trek in the Himalayas within the Annapurna valley, navigating rocky terrains, paved paths, and ascending after conquering hundreds of steps.</li>
                        <li>Travel with a small group, limited to a maximum of 10 travelers, led by an experienced tour leader.</li>
                        <li>Accommodations include 10 nights in comfortable hotels, 1 night in a standard guest house in a monastery with shared bathrooms, 1 night in a local lodge in the Himalayas with private bathrooms, and 2 nights in a comfortable forest lodge with private bathrooms.</li>
                        <li>All accommodations are carefully chosen for their location, services, cleanliness, and private bathrooms.</li>
                        <li>This comprehensive package covers all internal/domestic flights, ensuring a hassle-free journey.</li>
                        <li>Enjoy delicious meals as all your dining needs are included.</li>
                        <li>Explore Nepal through various cultural adventures, including walking tours, hiking, rugged off-road travel, and even paragliding.</li>
                        <li>This tour falls within the Level 2-4 experience range, involving individual hikes of up to 2 hours with gentle slopes, walks through towns or cities lasting 1 or more hours, explorations of archaeological sites for 2-3 hours, and the ability to climb 3-4 flights of stairs and walk at least 2 miles with ease.</li>
                        <li>Benefit from the services of a knowledgeable tour leader and local tour experts throughout your journey.</li>
                        <li>Gratuities for local guides, restaurants, and porters are included, ensuring a seamless and respectful experience.</li>
                        <li>Indulge in a 1-hour Nepalese trekker massage, a soothing treat for body and soul.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.SetTextRatio}>TRIP COST DOES NOT INCLUDE</div>


                <div className={styles.inner_container}>
                  <h2 className={styles.exclusivesavings}>International airfare,any airport departure taxes, any meals not specified after each itinerary day in the Detailed Itinerary, gratuities to tour leader,hotels en route to or on return from starting or ending city or additional hotel nights that may be necessary due to airline schedule changes or other factors, visa fees, cost of medical immunizations (if any), travel insurance, and other expenses of a personal nature (alcoholic beverages, laundry, etc.)&nbsp;</h2>
                </div>



              </div>
            </div>
            <div className={styles.section} ref={section4Ref} id={styles.section4}>


              <MyGallery Images={JapanImages} />
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

export default JapanTrip
