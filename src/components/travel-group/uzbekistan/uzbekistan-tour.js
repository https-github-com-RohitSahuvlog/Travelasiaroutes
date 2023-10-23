import React from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./uzbekistan-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { LaosImages } from "./uzbekistan-image-data";
import { Link } from 'react-router-dom';
import { UzbekistanExpeditionData } from "./uzbekistan-accordian-data";


const UzbekistanTrip = () => {

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
          <h1 className={styles.Title} >Exploring the Rich History and Culture of Uzbekistan</h1>
          <div className={styles.Italic}>Immerse yourself in the beauty and history of Uzbekistan, a Central Asian gem.</div>
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
                  <div className={styles.image_container}>
                    <img className={styles.ThirdPic} src="https://abasayyoh.com/images/maps/map_central_asia.gif" alt="Central Asia Map" />
                    <div className={styles.map} id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12353501.784272311!2d54.02405992436045!3d40.89399813072466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2sUzbekistan!5e0!3m2!1sen!2sin!4v1698035601342!5m2!1sen!2si" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>

                  <div className={styles.tripfeedbackquote}>
                    <p>Embark on an extraordinary journey through the heart of The Great Silk Road and trace the legendary path of Alexander the Great.</p>
                    <br />
                    <br />
                    <p>
                      This 16-day adventure is a captivating fusion of culture, nature, local encounters, luxurious experiences, immersive walking tours, culinary delights, and thrilling adventures.
                    </p>
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  <p>
                    Uncover the rich tapestry of civilizations, cultures, and religions that have been profoundly influenced by the centuries-long history of this iconic route. In the timeless landscapes of Uzbekistan and the majestic mountains of Kyrgyzstan, you'll traverse ancient cities that were once visited by nomads and conquerors. You'll marvel at the architectural wonders left behind by the flourishing Islamic civilization and the legacy of the great Empire of Timur.
                    <br />
                    Throughout this unforgettable journey, you'll explore mosques, madrassas, and fortresses that tell tales of a bygone era. You'll witness landscapes that range from lush valleys to boundless open steppes and the endless expanse of deserts. This is more than just a trip; it's a multidimensional odyssey that seamlessly weaves culture, nature, local experiences, luxury, walking adventures, and culinary discoveries into a single, unforgettable tapestry of exploration and wonder.
                  </p>
                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}>Explore the Wonders of Uzbekistan</h2>
                  <h5 className={styles.SetTextWith}>(Culture, History, Natural Beauty, Adventure)</h5>
                </div>
                <MyAccordion AccordianData={UzbekistanExpeditionData} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Explore the cultural marvels and modern vibrancy of Tashkent, the dynamic capital of Uzbekistan.</li>
                      <li>Step back in time in Khiva, a well-preserved city encircled by ancient mud city walls.</li>
                      <li>Immerse yourself in the Khorezm region's rich traditions with a folklore show featuring traditional music and dances.</li>
                      <li>Wander through the charming old city of Bukhara, a UNESCO World Heritage Site.</li>
                      <li>Embark on a journey to ancient Khorezm and discover the captivating ruins of Ayaz Kala and Toprak Kala.</li>
                      <li>Marvel at the grandeur of Registan Square and other architectural wonders in the ancient city of Samarkand.</li>
                      <li>Experience the vibrant atmosphere of Uzbek bazaars and witness daily life in this enchanting country.</li>
                      <li>Learn about age-old traditions, including the art of making Samarkand paper from mulberry trees.</li>
                    </ul>
                  </div>

                  <div className={styles.SetDataLeft}>
                    <ul>
                      <li>Embark on a journey through the dramatic landscapes and nomadic life of Kyrgyzstan.</li>
                      <li>Witness the breathtaking forested mountains and lush valleys that define Kyrgyzstan's scenery.</li>
                      <li>Discover the hidden gems of this picturesque land, from blue glacial lakes to serene mountain vistas.</li>
                      <li>Visit Issyk Kul Lake, a natural wonder and the second-largest salt lake in the world.</li>
                      <li>Explore the charming town of Karakol, known for its cozy cottages, apple orchards, and cultural sights.</li>
                      <li>Observe the exotic rural life and witness eagle hunting performances in Bokonbaevo village.</li>
                      <li>Create your own Kyrgyz felt carpet, connecting with the local craft traditions.</li>
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
                <Link to="/activitylevel"  >
                  <button className={styles.btn_booknow}>
                    Activity-Level
                  </button>
                </Link>
              </div>

              <div className={styles.SettingHeadingRatio}>

                <div className={styles.EnterData}>
                  <div className={styles.PutData}>
                    <div className={styles.DataHeading}>
                      *Facts and Inclusions
                    </div>
                    <div className={styles.HeadingContent}>
                      <ul>
                        <li>Embark on a 16-day expedition with a maximum of 10 travelers and a knowledgeable tour leader.</li>
                        <li>Discover the wonders of Uzbekistan and Kyrgyzstan, countries with an average elevation of 2,750 meters (9,020 feet).</li>
                        <li>Your journey begins in Tashkent, Uzbekistan, and concludes in Bishkek, Kyrgyzstan.</li>
                        <li>Experience this incredible expedition in September, when the weather in Uzbekistan averages between 13°C (55.4°F) and 29.3°C (84.7°F), and Kyrgyzstan averages 11.3°C (55.4°F) to 26.5°C (82.3°F).</li>
                        <li>While exploring these stunning destinations, be prepared for cooler mountain and desert nights.</li>
                        <li>Expect some bumpy and long rides, lasting 5-6 hours, due to road conditions.</li>
                        <li>Many sites may require climbing up to 100-250 steps for access.</li>
                        <li>Toilets: Western-style facilities at accommodations, restaurants, and sites; squat toilets during drives to remote destinations.</li>
                        <li>You'll stay in comfortable hotels for 12 nights and experience 3 nights in yurt camps with Western-style toilets.</li>
                        <li>Enjoy delicious meals throughout your journey, as all meals are included.</li>
                        <li>Explore cultural wonders with walking tours and rugged off-road adventures.</li>
                        <li>This tour is a Level 2-3 experience, suitable for those who can walk 1-2 hours, climb stairs, and walk up to 2 miles without issues.</li>
                        <li>Benefit from the services of a tour leader and local tour experts.</li>
                        <li>Gratuities for local guides, restaurants, and porters are included.</li>
                        <li>Your expedition covers all internal and domestic flights, train journeys in Uzbekistan, and airport transfers.</li>
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

export default UzbekistanTrip;
