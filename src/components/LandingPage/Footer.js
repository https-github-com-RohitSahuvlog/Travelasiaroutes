import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Axios from "../../api";


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

  return (
    <>
      <div className={styles.FooterMain}>
        <div className={styles.Container}>
          <div className={styles.Footsec}>
            <div className={`${styles["col-md-12 col-12"]} ${styles.footer_logo}`}>
              <div className={styles.footer_about}>
                <div className={styles.about_logo}>
                  <a href="#">
                    {/* <img className={styles.img} src="https://midasiaroutes.com/images/footer_logo.png" alt="Image" /> */}
                  </a>
                </div>
              </div>
            </div>
            <div className={`${styles["col-md-12 "]} ${styles.contact_us_new}`}>
              <h3 className={styles.H3_use}>OUR OFFICES / ADDRESS <hr className={styles.hrclass} /></h3>
            </div>

            <div className={styles.location_title}>
              {data.officeBranches && data.officeBranches.map((item, index) => (

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
            {/* </div> */}
            <hr className={styles.hr} />
            <div className={styles.footer_links}>
              <div className={styles.footer_left}>
                <div className={styles.row}>
                  <div className={styles["col-md-12 col-ms-12 col-xs-12"]}>
                    <div className={styles.footer_about}>
                      <div className={styles.about_location}>
                        <div >
                          <h3 className={styles.H3_us}>officeBranches <hr className={styles.hrclass} /></h3>
                          {data?.contactInfo && data?.contactInfo.map((item, index) => (

                            <ul className={styles.menulist} key={index}>
                              <li className={styles.loc_li}>
                                {item.label} : {item.number || item.address}
                              </li>
                            </ul>
                          ))}
                          {data?.contactInfo && data?.contactInfo.map((item, index) => (

                            <ul className={styles.menulist} key={index}>
                              <li className={styles.loc_li}>
                                {item.address}
                              </li>
                            </ul>
                          ))}
                        </div>

                      </div>
                      <br />

                      {/* </div> */}
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
                        {/* <li className={styles.loca_li}>
                          <a href="#">By Destination</a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  {/* <div className={`${styles["col-md-4 col-sm-4 col-xs-12"]}`}>
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
                  </div> */}
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

      </div >
      <div className={styles.copyright}>
        <div className={styles.social_link}>
          <div className={styles.social_icons}>
            <div>
              <a href="https://www.facebook.com/midasia/" className={styles.icon} title="Facebook" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="1.2x" />
              </a>
            </div>

            <div>
              <a href="#" className={styles.icon} title="Twitter" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="1.2x" />
              </a>
            </div>

            <div>
              <a href="https://www.instagram.com/travel.with.midasiaroutes/" className={styles.iconinsta} title="Instagram" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="1.2x" />
              </a>
            </div>

          </div>
        </div>
        <div className={styles.container_fluid}>
          <div className={styles.copyright_content}>
            <p className={styles.copyP}>
              © 2020 MIDAISAROUTES All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;