import React from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./laos-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { LaosImages } from "./philippine-image-data";
import { Link } from 'react-router-dom';
import { LaosAccData } from "./philippine-accordian-data";


const LaosTrip = () => {

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



  return (
    <div>
      <div className={styles.MainUpperr}>
        <div className={styles.MainContent}>
          <h1 className={styles.Title} >Exploring the Mystique of Laos</h1>
          <div className={styles.Italic}>Laos Revealed: Embark on Epic Expeditions</div>
          <div className={styles.GoButton}>
            <Link to="/bespoke"  >
              <button className={styles.ButtonFirst}>Start Planning</button>
            </Link></div>
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


                  {/* <img className={styles.ThirdPic} src="https://aidiaasia.org/images/contents/2WqLt-nepal-india-china.jpg"></img> */}
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7765175.305048344!2d98.56277562271175!3d18.13673810944553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31149057b0824589%3A0xec592481f99cd81!2sLaos!5e0!3m2!1sen!2sin!4v1697866095345!5m2!1sen!2sin"
                    width="100%" height="350"
                    // style="border:0"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade
                   "
                  ></iframe>

                  <div className={styles.tripfeedbackquote}>
                    <p> A fascinating journey exploring three countries, with the mighty Mekong River as your guide through Thailand, Laos and Cambodia.</p>
                    <br />
                    <br />
                    <p>
                      Follow the Mekong River through Thailand, Laos, and Cambodia on this captivating 15-day journey. It's a top-to-tail exploration of Laos, where you'll discover its myriad waterfalls, caves, mountains, and river villages. We kickstart this adventure, known for its hidden charms, in the bustling Thai capital of Bangkok, where we'll be there to greet you upon your arrival.

                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>
                    From there, we'll whisk you away to Chiang Rai in northern Thailand to uncover the secrets of the Golden Triangle of Southeast Asia. Afterward, embark on a two-day cruise along the Mekong River from the Thai/Lao border to the enchanting Luang Prabang.
                    This 2-day journey down the majestic Mekong River culminates in a captivating arrival in Luang Prabang, a city that enchants even the most seasoned travelers with its gleaming temple roofs, French provincial architecture, and diverse inhabitants. Moving south, we delve into the lush jungles of the Bolaven Plateau, immersing ourselves in authentic coffee culture and surrounded by some of the most alluring scenery in Asia, including volcanoes and sparkling waterfalls. This off-the-beaten-track adventure concludes in the serene 4000 islands, where time seems to stand still, allowing you to leisurely explore villages by bicycle or tuk-tuk. By the time we reach Cambodia, we will have become fully in tune with the Mekong, making our way to Kratie in the northeast, famous for its stunning sunset views. Here, we delve into Cambodia's modern history and, of course, no visit to this country would be complete without thorough exploration of the incredible temples surrounding Angkor Wat. This journey promises to be a once-in-a-lifetime experience, filled with hidden gems, natural wonders, and cultural treasures..
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
                <MyAccordion AccordianData={LaosAccData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Board a private boat for a two-day cruise down the Mekong River.</li>
                      <li>Travel into the Golden Triangle, offering stunning views over the Mekong River and into Laos and Burma.</li>
                      <li>Immerse yourself in the cultural and historical wonders of Bangladesh by visiting all three UNESCO World Heritage Sites.</li>
                      <li>Experience the vibrant life and rich culture of the Ganges Delta, a land of unique charm and vitality.</li>
                      <li>Offer alms to the hundreds of saffron-robed Buddhist Monks.</li>
                      <li>Explore the UNESCO best-preserved city in Southeast Asia.</li>
                    </ul>
                  </div>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Kuang Si Water Falls and The Traditional Baci ceremony.</li>
                      <li>Visit small local villages known for the traditional cotton weaving, tobacco, and rice farming.</li>
                      <li>Don Khong, the largest island, and Wat Pu UNESCO Site.</li>
                      <li>EXPLORE THE GRAND CIRCUIT OF ANGKOR WAT and The Heritage capital of Siem Reap.</li>
                      <li>The Citadel & Land mine museum.</li>
                      <li>End with a panoramic tour of Bangkok.</li>
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
                      <tr className={styles.pricingRow}>
                        <td>22rd March 2024</td>
                        <td>6th April 2024</td>
                        <td>$ 5775 USD</td>
                        <td style={{ width: 'auto' }}>$ 870 USD</td>
                        <td style={{ padding: '5px' }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                          >
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
                        <td>6 Spaces</td>
                        <td>
                          <Link to="/bespoke"  >
                            <button className={styles.btn_booknow}>
                              Book Now
                            </button>
                          </Link>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="travel_sts">
                  <img src="https://www.eldertreks.com/images/check.png" style={{ width: 'auto' }} /> <span>Guaranteed Departures</span>
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


              <MyGallery Images={LaosImages} />
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

export default LaosTrip;
