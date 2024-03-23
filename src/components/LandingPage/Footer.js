import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Axios from "../../api";
import "../../css/Footer.css"
import minLogo from "../../images/minLogo.png"


const Footer = () => {
  const [data, setData] = useState({
    officeBranches: [],
    contactInfo: [],
  });

  useEffect(() => {
    Axios.get("/api/footer/get-footer")
      .then((response) => {
        const { data } = response; // Access the 'data' property in the response
        const { officeBranches, contactInfo } = data;
        setData({ officeBranches, contactInfo });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(data.contactInfo);

  return (
    <>
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-top-col">
              <img src={minLogo} alt="" />
              <h3>Mid Asia Routes</h3>
            </div>
            <div className="footer-top-col">
              <h3>Important Links</h3>
              <a href="#">Home</a>
              <a href="#">Bespoke-For your Travel DNA</a>
              <a href="#">Small Group Boutique Expeditions</a>
            </div>
            <div className="footer-top-col">
              <h3>Our Office Address</h3>
              {data.officeBranches.map((curElem) => (
                  <li>{curElem.address}</li>
              ))}
            </div>
          </div>
          <div className="footer-middle">
            <div className="footer-middle-left">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="">Site Maps</a>
              <a href="">Booking Forms</a>
            </div>
            <div className="footer-middle-right">
              <a href="https://www.facebook.com/midasia/" className="social-icons"  title="Facebook" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.facebook.com/midasia/" className="social-icons"  title="Facebook" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.facebook.com/midasia/" className="social-icons"  title="Facebook" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
          <div className="footer-bottom-second">
            <h3>Contact Via :</h3>
            {
              data.contactInfo.map((elem) => (
                <div className="row">
                  <h3>{elem.label}</h3>
                  <p>{elem.number}</p>
                  <p>{elem.address}</p>
                </div>
              ))
            }
          </div>
          <div className="footer-bottom">
            <h3>Mid Asia Routes | Copyright 2024 </h3>
          </div>
        </footer>


      {/* <div className={styles.FooterMain}>
        <div className={styles.Container}>
          <div className={styles.Footsec}>
            <div className={`${styles["col-md-12 col-12"]} ${styles.footer_logo}`}>
              <div className={styles.footer_about}>
                <div className={styles.about_logo}>
                  <a href="#">
                     <img className={styles.img} src="https://midasiaroutes.com/images/footer_logo.png" alt="Image" />
                  </a>
                </div>
              </div>
            </div>
            <div className={`${styles["col-md-12 "]} ${styles.contact_us_new}`}>
              <h3 className={styles.H3_use}>OUR OFFICES / ADDRESS <hr className={styles.hrclass} /></h3>
            </div>

            <div className={styles.location_title}>
              {data.officeBranches.map((item, index) => (

                <div key={index} className={`${styles["col-md-3"]} ${styles.location_new}`}>
                  <ul>
                    <li className={styles.local_li} >
                      <span>
                        {item.location} - {item.address}
                      </span>
                    </li>
                  </ul>
                </div>
              ))}

            </div>
             </div> 
            <hr className={styles.hr} />
            <div className={styles.footer_links}>
              <div className={styles.footer_left}>
                <div className={styles.row}>
                  <div className={styles["col-md-12 col-ms-12 col-xs-12"]}>
                    <div className={styles.footer_about}>
                      <div className={styles.about_location}>
                        <div >
                          <h3 className={styles.H3_us}>officeBranches <hr className={styles.hrclass} /></h3>
                          {data.contactInfo.map((item, index) => (

                            <ul className={styles.menulist} key={index}>
                              <li className={styles.loc_li}>
                                {item.label} : <a href={`tel:${item.number}`}>{item.number || item.address}</a>
                              </li>
                            </ul>
                          ))}
                          {data.contactInfo.map((item, index) => (

                            <ul className={styles.menulist} key={index}>
                              <li className={styles.loc_li}>
                                <a href={`mailto:${item.address}`}>
                                  {item.address}
                                </a>
                              </li>
                            </ul>
                          ))}
                        </div>

                      </div>
                      <br />
                      <div className={styles.social_link}>
                        <span>
                          <div className={styles.social_icons}>
                            <div>
                              <a href="https://www.facebook.com/midasia/" className={styles.icon} title="Facebook" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                              </a>
                            </div>

                            <div>
                              <a href="#" className={styles.icon} title="Twitter" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                              </a>
                            </div>

                            <div>
                              <a href="https://www.instagram.com/travel.with.midasiaroutes/" className={styles.iconinsta} title="Instagram" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                              </a>
                            </div>

                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footer_right}>
                <div className={styles.row}>
                  <div className={`${styles["col-md-4 col-sm-4 col-xs-12"]}`}>
                    <div className={styles.footer_links_list}>
                      <h3 className={styles.H3_us}>
                        MidAsiaRoutes
                        <hr className={styles.hrclass} />
                      </h3>
                      <ul className={styles.menulist}>
                        <li className={styles.loca_li}>
                          <a href="/">Home</a>
                        </li>
                        <li className={styles.loca_li}>
                          <a href="/bespoke">
                            Bespoke-For your Travel DNA</a>
                        </li>
                        <li className={styles.loca_li}>
                          <a href="/travel-groups">Small Group Boutique Expeditions</a>
                        </li>
                         <li className={styles.loca_li}>
                          <a href="#">By Destination</a>
                        </li> 
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles["col-md-4 col-sm-4 col-xs-12"]}`}>
                    <div className={styles.footer_links_list}>
                      <h3 className={styles.H3_us}>
                        Our Geography
                        <hr className={styles.hrclass} />
                      </h3>
                      <ul className={styles.menulist}>
                        <li className={styles.loca_li}>
                          <a href="#">Asia/Pacific</a>
                        </li>
                        <li className={styles.loca_li}>
                          <a href="#">MiddleEast</a>
                        </li>

                      </ul>
                    </div>
                  </div> 
                  <div className={`${styles["col-md-4 col-sm-4 col-xs-12"]}`}>
                    <div className={styles.footer_links_list}>
                      <h3 className={styles.H3_us}>
                        Other Links
                        <hr className={styles.hrclass} />
                      </h3>
                      <ul className={styles.menulist}>
                        <li className={styles.loca_li}>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li className={styles.loca_li}>
                          <a href="#">Booking Terms & Conditions</a>
                        </li>
                        <li className={styles.loca_li}>
                          <a href="#">SiteMap</a>
                        </li>
                        <li className={styles.loca_li}>
                          <a href="#">Booking Forms</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      <div className={styles.copyright}>
        <div className={styles.container_fluid}>
          <div className={styles.payment_content}>
            <ul className={styles.copyLink}>
              <li className={styles.li}> We Accept</li>
              <li className={styles.li}>
                <img className={styles.images} src="https://midasiaroutes.com/images/payment1.png" />
              </li>
              <li className={styles.li}>
                <img className={styles.images} src="https://midasiaroutes.com/images/payment2.png" />
              </li>
              <li className={styles.li}>
                <img className={styles.images} src="https://midasiaroutes.com/images/payment3.png" />
              </li>
              <li className={styles.li}>
                <img className={styles.images} src="https://midasiaroutes.com/images/payment4.png" />
              </li>
            </ul>
          </div>
          <div className={styles.copyright_content}>
            <p className={styles.copyP}>
              © 2020 MIDAISAROUTES All Rights Reserved.Designed & Developed by {" "}
              <a href="https://rohitmern.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.designerName}>
                RohitSahu
              </a>

            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Footer;