import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./banglades-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { BangladeshImages } from "./banglades-image-data";
import { Link, useLocation } from 'react-router-dom';
import { BangladeshAccData } from "./banglades-accordian-data";
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';
import { useDispatch, useSelector } from 'react-redux';

const getStatusIcon = (status) => {
  return status ? '✔' : '✖';
};

const getStatusStyle = (status) => {
  return status ? styles.checkIcon : styles.crossIcon;
};


const BangladeshTrip = () => {
  const location = useLocation();
  const [packageTable, setpackageTable] = useState([]);
  const [open, setOpen] = useState(false);

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


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  return (
    <div>
      <div className={styles.MainUpperr}>
        <div className={styles.MainContent}>
          <h1 className={styles.Title} >Glories of Bangladesh</h1>
          <div className={styles.Italic}>Bangladesh Unveiled: Embark on Epic Adventures</div>
          <div className={styles.GoButton}>
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
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747160.54558576!2d87.70292927714281!3d23.48438724738814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sin!4v1698035417422!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    <p> Nestled away in a forgotten corner of the subcontinent, Bangladesh has spent the years since gaining independence quietly removed from the well-trodden tourist trails.</p>
                    <br />
                    <br />
                    <p>
                      It is a nation overshadowed by the ornate monumental splendor of its Indian neighbor, often passed over by all but the most intrepid of travelers. However, Bangladesh is nothing short of a revelation, one of Asia's most surprising destinations.
                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>
                    The people you encounter here are some of the friendliest and warmest souls you will ever meet, and the country itself is graced with an incredible diversity of natural and cultural treasures waiting to be uncovered. From the unique landscapes of the Sundarbans to the mysterious charm of the Hill Tracts, Bangladesh boasts a captivating mix of flora, fauna, and indigenous tribes that defy its relatively small size. Not to forget the verdant hills around Srimangal, producing some of the finest teas in the world. Lost Buddhist kingdoms, haunting ship graveyards, and a capital city that is among the fastest-growing in the region, Bangladesh truly stands as one of the Indian subcontinent's most refreshing and fascinating destinations, waiting to be discovered by those seeking the extraordinary.it has largely eluded the attention of tourists, overshadowed by the ornate grandeur of its neighboring giant, India. Yet, beyond the veil of obscurity, Bangladesh reveals itself as one of Asia's most remarkable destinations, filled with surprises waiting to be unveiled. Its people, renowned for their warmth and hospitality, beckon visitors to explore a land of extraordinary natural beauty and rich cultural diversity.
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Discover the Beauty of Bangladesh</h2>
                  <h5 className={styles.SetTextWith}>(Culture, Nature, Wildlife, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={BangladeshAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li> Immerse yourself in the cultural and historical wonders of Bangladesh by visiting all three UNESCO World Heritage Sites.</li>
                      <li> Experience the vibrant life and rich culture of the Ganges Delta, a land of unique charm and vitality.</li>
                      <li> Embark on a picturesque adventure as you navigate floating markets, bazaars, schools, and brick factories while exploring the intricate network of rivers and canals in Barisal.</li>
                      <li> Embark on a three-day expedition into the mystical Sundarbans, the largest mangrove forest on Earth, and witness the mesmerizing wildlife it harbors.</li>
                      <li> Step back in time aboard a century-old paddle wheel steamer known as the Rocket, and traverse the waterways of Bangladesh.</li>
                      <li> Wander through the ancient streets of Bagerhat, a UNESCO World Heritage city from the 15th century, and visit architectural marvels like the 60 Dome Mosque.</li>
                      <li> Explore the thriving silk industry in Rajshahi, known for producing the finest quality silk products.</li>
                      <li> Discover the tranquil beauty of Sompur Mahabihara, an 8th-century Buddhist monastery and another UNESCO World Heritage Site.</li>
                    </ul>
                  </div>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Explore the rich historical city of Gaur, the ancient capital of Bengal, and marvel at its beautiful mosques and cultural heritage.</li>
                      <li>Visit tribal villages, including a Santal tribal village, to experience their unique way of life and traditions.</li>
                      <li> Behold the breathtaking beauty of Kantaji Temple, adorned with intricate terracotta plaques, making it one of Bangladesh's most beautiful temples.</li>
                      <li> Spend three days in Srimangal, the tea capital of Bangladesh, amidst endless tea plantations.</li>
                      <li> Embark on nature treks inside Lawachhara National Park, visit tribal villages, and wander through scenic tea gardens.</li>
                      <li> Enjoy a full day exploring the charm of Old Dhaka, complete with rickshaw rides through narrow streets and boat rides on Dhaka's bustling river.</li>
                      <li> Experience the simple and rustic life of farmers on the islands of Meghna and Jamuna rivers.</li>
                      <li> Take a unique journey on two Bangladeshi trains, offering a glimpse into the local way of life.</li>
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
                        <li>Small-Group Expedition: Embark on a 21-day adventure with a maximum of 9 fellow travelers, ensuring an intimate and personalized experience.</li>
                        <li>Gentle Adventure: This expedition is meticulously crafted for nature, culture, and wildlife enthusiasts seeking a gentle yet adventurous journey.</li>
                        <li>Inclusive Domestic Airfares: All domestic airfares throughout the trip are covered for your convenience.</li>
                        <li>Dhaka Start & Finish: Your journey begins and ends in Dhaka, the vibrant capital city, offering a seamless travel experience.</li>
                        <li>All-Inclusive Dining: Relish local flavors with all meals included as per the itinerary.</li>
                        <li>Best Travel Seasons: Optimal travel months are January to March and September to November when Bangladesh experiences pleasant weather.</li>
                        <li>Comprehensive Activities: Enjoy all listed activities and boat trips to explore every facet of Bangladesh.</li>
                        <li>Effortless Transfers: Seamless airport-to-hotel and hotel-to-airport transfers in every city you visit.</li>
                        <li>Comfortable Accommodations: Rest in well-located hotels with private bathrooms, offering twin-sharing options. Select from 3-4 star categories and a few 5-star choices in larger cities.</li>
                        <li>Local Expertise: Benefit from the guidance of local English-speaking guides and a dedicated MiddleAsia Routes Tour-Leader throughout your journey.</li>
                        <li>Hassle-Free Porterage: Let us handle logistics with porterage services at airports and hotels throughout the program.</li>
                        <li>Inclusive Entrance Fees: Access all historical sites and museums with included entrance fees.</li>
                        <li>Hydration on the Go: Stay refreshed with daily access to water on board.</li>
                        <li>Included Gratuities: Express appreciation with included gratuities for guides, drivers, and porters.</li>
                        <li>All Taxes Covered: Rest easy knowing that all taxes are included in your package.</li>
                        <li>Comfortable Exploration: Anticipate scenic drives with some rough or dusty roads. Several drives may take 5-6 hours, offering picturesque routes.</li>
                        <li>Activity Levels 2-4: Engage in hikes with gentle slopes, town explorations, and archaeological site visits. Expect the ability to climb stairs, walk 2 miles, and handle 3-4 flights of stairs.</li>
                        <li>Boat Experience: Spend 2 nights on a boat for a unique wildlife adventure.</li>
                        <li>Rocket Journey: While riding 'The Rocket' isn't guaranteed, enjoy the slim chance of this unique experience. In its absence, traditional ferries and a drive to Bagerhat provide alternatives.</li>
                        <li>Cultural Dress Code: Respect the local dress code when visiting places of worship, ensuring modest attire. Remove shoes when entering these sites.</li>
                        <li>Flexibility in Travel: Understand that in a third-world country like Bangladesh, flexibility and patience are essential. Trust our tour-leader and local guide to resolve any issues.</li>
                        <li>Tiger Sightings: While rare, there's a chance of spotting tigers in Sundarbans, offering an opportunity to witness these nocturnal creatures.</li>
                        <li>Adaptive Itinerary: The itinerary remains flexible, accommodating changes based on various factors to ensure an inclusive experience.</li>
                        <li>Boat Accommodations: Accommodations on the Sundarbans boat are basic with shared western-style toilets, providing an authentic experience.</li>
                        <li>First-Class Train Tickets: When available, enjoy first-class train tickets; second-class tickets are provided if necessary. Alternative car travel with or without air-conditioning is available.</li>
                        <li>Patience on the Road: Understand that broken roads and heavy traffic in Bangladesh may require patience during the journey.</li>
                        <li>Air-Conditioning Adjustments: On hilly terrains in Chittagong Hill-Tracts, temporary air-conditioning adjustments may be made to reduce engine load.</li>
                        <li>Accommodation Note: While hotels are good and clean, room sizes and deluxe services may vary, given Bangladesh's emerging tourism industry. We select the best available options in collaboration with our local partners.</li>
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


              <MyGallery Images={BangladeshImages} />
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

export default BangladeshTrip
