import React from 'react'
import "./Connect.css"
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from './ScrollHighlightNabbar/ScrollHighlightNabbar'
import styles from "./about.module.css";
const Connect = () => {

  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();

  const navHeader = [
    {
      headerTitle: "INTRODUCTION",
      headerRef: section1Ref,
      headerID: "section1"
    },
    {
      headerTitle: "PHOTO & VIDEO",
      headerRef: section2Ref,
      headerID: "section2"
    },
    {
      headerTitle: "TRIP OVERVIEW",
      headerRef: section3Ref,
      headerID: "section3"
    },
    {
      headerTitle: "DATES & PRICES",
      headerRef: section4Ref,
      headerID: "section4"
    }
  ];

  return (
    <div>
      <div className={styles.MainUpperr}>
        <div className='MainContent'>
          <h1 className='Title' > ANTARCTICA ADVENTURES</h1>
          <div className='Italic'>CRUISES TO THE WHITE CONTINENT</div>
          <div className='GoButton'><button className='ButtonFirst'>Request Itinerary</button></div>
        </div>
      </div>



      <div className="Capp">
        {/* <div><img src="https://www.geoex.com/app/uploads/2019/07/antarctica-crabeater-seal-geoex.jpg"></img></div> */}
        <div className="Flex">
          <div>
            <ScrollHighlightNabbar section3Ref={section3Ref} navHeader={navHeader} />
          </div>
          <div>
            <div className="section" ref={section1Ref} id="section1">
              <div className='MainHeading'>
                <div className='SettingHeading'>
                  <h2 className='SetText'>ANTARCTICA ADVENTURES</h2>
                  <h5 className='SetTextWith'>Luxury Group Travel | 12 Days</h5>
                </div>

                <div className='SetFlexProperty'>
                  <div className='SetDataLeft'>
                    <ul>
                      <li>Choose from itineraries lasting 12–22 days</li>
                      <li>Be surrounded by penguins and watch whales and seals</li>
                      <li>Weave through spectacular ice and sea passages</li>
                      <li>Enjoy a comfortable ship with superior amenities, learning from scientists, experts, and lecturers</li>
                      <li>Opt to add time in Chile and Argentina before or after your cruise</li>
                    </ul>
                  </div>
                  <div className='SetDataLeft'>
                    Touring Antarctica is something many fantasize about; we count ourselves lucky to be able to make so many dreams possible. These expeditions to the White Continent start at the southern tip of South America, in Ushuaia, Argentina. All of the small, ice-strengthened ships we use are quite comfortable, with expedition teams of naturalists, historians, and geologists to help make sense of the abundant wildlife and expound on human’s exploration (and exploitation) of Antarctica.
                  </div>
                </div>

                <div className='SettingHeadingRatio'>
                  <div className='SetTextRatio'>WE ARE PLEASED TO EXTEND A LIMITED-TIME OFFER ABOARD THE MS SEAVENTURE</div>

                </div>
                <div className='SetImage'>
                  <img src="https://tse4.mm.bing.net/th?id=OIP.uc3_LZLGfqUvX8XPySHZWQHaE8&pid=Api&P=0&h=180" className='SetBackGround'></img>
                </div>


                <div className='EnterData'>
                  <div className='PutData'>
                    <div className='DataHeading'>
                      *Promotion’s Rules:
                    </div>
                    <div className='HeadingContent'>
                      All prices are per person and expressed in USD.<br></br>
                      Single supplements apply.<br></br>
                      Applies to all 2023-24 Polar Latitudes departures aboard the Seaventure.<br></br>
                      The offer cannot be combined with any other offer or discount (such as loyalty discount, child discount, etc.)<br></br>
                      The offer is valid until 11/03/2023.<br></br>
                      GeoEx reserves the right to discontinue or extend this offer at any time.<br></br>
                      Except where modified above, the Terms and Conditions of Sale indicated in the 2023-24 Exploring Antarctica brochure apply.<br></br>
                      1 / 14

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="section" ref={section2Ref} id="section2">
              <div className='SectionTwo'>
                <img src="https://www.geoex.com/app/uploads/2019/08/antarctica-explorer-DanitaDelimont_RM_AN01_FLA0137.jpg" ></img>
              </div>
              <div className='SecondFlex'>
                <div className='SetSecondFlex'>

                  <img className='Pet'
                    src="https://www.geoex.com/app/uploads/2019/08/antarctica-explorer-DanitaDelimont_RM_AN02_DGI0120.jpg"
                  ></img>
                  <img className='Pet'
                    src="https://www.geoex.com/app/uploads/2019/08/antarctica-explorer-DanitaDelimont_RM_AN01_FLA0137.jpg"
                  ></img>
                  <img className='Pet'
                    src="https://www.geoex.com/app/uploads/2019/08/antarctica-explorer-DanitaDelimont_RM_AN02_DGU0082.jpg"
                  ></img>
                  <img className='Pet'
                    src="https://www.geoex.com/app/uploads/2019/08/antarctica-explorer-DanitaDelimont_RM_AN02_SPI0004.jpg"
                  ></img>
                  <img className='Pet'
                    src="https://www.geoex.com/app/uploads/2019/08/antarctica-explorer-DanitaDelimont_RM_AN02_SPI0132.jpg"
                  ></img>
                </div>
              </div>

            </div>
            <div className="section" ref={section3Ref} id="section3">
              <div className='SettingHeadingRatio'>
                <div className='SetText'>TRIP OVERVIEW</div>
              </div>

              <div className='SectionThreeMain'>
                <div className='FirstDiv'>


                  <img className='ThirdPic' src="https://tse4.mm.bing.net/th?id=OIP.z_PfIRZ6gr4gCVF6qhBkVQHaFj&pid=Api&P=0&h=180"></img>


                </div>
                <div className='SecondDiv'>
                  <p>Heading south toward Cape Horn into the Drake Passage (notorious for its rough seas), you soon encounter pack ice and icebergs—a veritable floating sculpture garden. Birds, whales, and seals bring the skies and seas to life. Take advantage of the almost 24-hour daylight at such famous and dramatic settings as Paradise Bay, Anvers Island, King George Island, Port Lockroy, and Deception Island. You'll spend as much time as possible on the Antarctic Peninsula and the spectacular South Shetlands, going ashore by Zodiac a couple of times each day.<br></br>

                    The longer voyages include visits to South Georgia Island—a breath-stopping, 9500-foot rock massif, populated by enormous congeries of penguins and seals—Elephant Island, and the Falkland Islands.

                    <br></br>    If you don't have the time or stomach for the Drake Passage crossing, check out our Antarctica Fly & Cruise journey.

                    <br></br>    Whichever itinerary you choose, we’re here to arrange all the details.</p>
                </div>
              </div>
            </div>
            <div className="section" ref={section4Ref} id="section4">
              <div className='SettingHeadingRatio'>
                <div className='SetText'>DATES & PRICES</div>

              </div>

              <div className='FourFlex'>
                <div className='FourAling'>

                  <h3 className='FourSubHeading'>Dates</h3>
                  <p className='FourPara'>Departures offered November–March; request itinerary for specific dates.</p>

                  <h3 className='FourSubHeading'>Pricing</h3>
                  <p className='FourPara'>12 days (with 9-night cruise): From $9,895 per person </p>
                </div>
                <div>
                  <h3 className='FourAling'>Inclusions</h3>
                  <ul className='SetLi'>
                    <li>Expertise of GeoEx’s travel specialists</li>
                    <li>Services of GeoEx’s in-house air reservations team</li>
                    <li>All accommodations</li>
                    <li>All ground transportation and airport transfers</li>
                    <li>Sightseeing, events, visits, and entrance fees</li>
                    <li>Shore landings, presentations, and activities per the vessel’s daily program</li>
                    <li>All meals</li>
                    <li>Bottled water at included meals and while sightseeing</li>
                    <li>Services of an expedition leader, lecturers/naturalists, and support staff during voyage</li>
                    <li>Some gratuities</li>
                    <li>Emergency evacuation services and secondary medical expense insurance</li>
                  </ul>
                </div>


              </div>

              <div className='LastFourContent'>
                <div>
                  <h4 className='ContentSubHeading'>A JOURNEY BUILT JUST FOR YOU</h4>
                  <p className='ContentSubHeadingPart'>Take customization to the next level on a journey fully tailored to you. GeoEx's destination specialists will gladly tailor this existing itinerary—or build one completely from scratch—to suit your style, interests, and time frame. Contact us to see what's possible.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
