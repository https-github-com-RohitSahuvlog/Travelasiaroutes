import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import ScrollHighlightNabbar from '../ScrollHighlightNabbar/ScrollHighlightNabbar';
import styles from "./trip-tour.module.css";
import MyGallery from '../SliderImage/slider-image-group';
import MyAccordion from '../accordian/accordian';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Modal from '../enuiry-model/model';
import Axios from '../../../api';
import styled from "styled-components";

const MainUpper = styled.div`
  height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  margin-top: 130px;
`;


const Trip = () => {
  const location = useLocation();
  const [packageTable, setpackageTable] = useState([]);
  const [open, setOpen] = useState(false);
  const [itinerary, setItinerary] = useState({})
  const navigation = useNavigate()

  const handleOpen = () => {
    navigation("/booking-form")
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

  const fetchItineraryData = async (country) => {
    try {
      const response = await Axios.get(`/api/itinerary/trip-name/${country}`);
      if(!response?.data.length){
        <Navigate to="/pageerror" />
        return;
      }
      setItinerary(response?.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  useEffect(() => {
    const pathnameArray = location.pathname.split('/');
    const countryName = pathnameArray[pathnameArray.length - 1];
    fetchData(countryName);
    fetchItineraryData(countryName);
  }, [location.pathname]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <MainUpper>
        <img src={itinerary?.tripImage} className={styles.backgorundImage} />
        <div className={styles.MainContent}>
          <h1 className={styles.Title}>{itinerary?.tripTitle}</h1>
          <div className={styles.Italic}>{itinerary?.tripSubtitle}</div>
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
      </MainUpper>

      <div className={styles.Capp}>
        <div className={styles.Flex}>
          <div className={styles.SideScroll}>
            <ScrollHighlightNabbar scrollToSection={scrollToSection} navHeader={navHeader} />
          </div>
          <div style={{ width: "100%" }}>
            <div className={styles.section} ref={section1Ref} id={styles.section1} >
              <div className={styles.SettingHeadingRatio}>
                <div className={styles.SetText}>TRIP OVERVIEW</div>
              </div>

              <div className={styles.SectionThreeMain}>
                <div className={styles.FirstDiv}>
                  <div className={styles.image_container}>
                    <div id="map" dangerouslySetInnerHTML={{ __html: itinerary?.mapIframeSrc }}></div>
                  </div>
                  <div className={styles.tripfeedbackquote}>
                    {
                      itinerary?.tripDescription?.leftContent?.map((item, index) => {
                        return <p key={index}>{item}</p>
                      })
                    }
                  </div>
                </div>

                <div className={styles.SecondDiv}>
                  {
                    itinerary?.tripDescription?.rightContent?.map((item, index) => {
                      return <p key={index}>{item}</p>
                    })
                  }

                </div>
              </div>

            </div>
            <div className={styles.section} ref={section2Ref} id={styles.section2} >
              <div className={styles.MainHeading} >
                <div className={styles.SettingHeading}>
                  <h2 className={styles.SetText}> {itinerary?.tripHeadingCultureTitle}</h2>
                  <h5 className={styles.SetTextWith}>{itinerary?.tripHeadingCulture}</h5>
                </div>
                <MyAccordion AccordianData={itinerary?.dayByDay || []} />
                <h2 className={styles.SetText} >Highlights</h2>
                <div className={styles.SetFlexProperty}>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      {
                        itinerary?.highlights?.leftColumn?.map((item, index) => {
                          return <li key={index}>{item}</li>
                        })
                      }
                    </ul>
                  </div>
                  <div className={styles.SetDataLeft}>
                    <ul>
                      {
                        itinerary?.highlights?.rightColumn?.map((item, index) => {
                          return <li key={index}>{item}</li>
                        })
                      }
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
                    <tbody className={styles.table_body}>
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
                              <td>{detail?.flexiabledate || "Flexiable date"}</td>
                              <td>{detail?.flexiabledate || "Flexiable date"}</td>
                            </>)
                          }
                          <td>
                            <div className={styles.table_price}>{`$ ${detail.price
                              } `
                            }</div></td>
                          <td style={
                            {
                              width: 'auto'
                            }
                          }>{`$ ${detail.singleSupplementPrice
                            } `
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
                            <Link to="/booking-form">
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
                        {
                          itinerary?.factsAndInclusions?.map((item, index) => {
                            return <li key={index}>{item}</li>
                          })
                        }
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
              <MyGallery Images={itinerary?.images || []} />
              <div className={styles.LastFourContent}>
                <div>
                  <h4 className={styles.ContentSubHeading}>{
                    itinerary.customizationDescription?.heading[0] || "A JOURNEY BUILT JUST FOR YOU"

                  }</h4>
                  <p className={styles.ContentSubHeadingPart}>{itinerary.customizationDescription?.description[0] ||
                    "Take customization to the next level on a journey fully tailored to you. MidAsia's destination specialists will gladly tailor this existing itinerary—or build one completely from scratch—to suit your style, interests, and time frame. Contact us to see what's possible."
                  }</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
  )
}

export default Trip;
