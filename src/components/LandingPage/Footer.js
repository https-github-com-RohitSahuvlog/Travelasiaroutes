import React from "react";
import styles from "./footer.module.css";
// import america from "../images/america.png";
// import india from "../images/india.png";
// import canada from "../images/canada.png";
// import germany from "../images/germany.jpg";

const Footer = () => {
  return (
    <>
    <div className={styles.FooterMain}>
      <div className={styles.FooterLogo}>
        <h3 className={styles.clientText}>OUR CLIENT</h3>
        <div className={styles.flagimg}>
          {/* <img  className={styles.imgf}  src={india} alt="" />
          <img className={styles.imgf}  src={america} alt="" />
          <img className={styles.imgf}  src={canada} alt="" />
          <img className={styles.imgf}  src={germany} alt="" /> */}

          <img className={styles.imgf} src='https://midasiaroutes.com/panel/clients/1608019763_6358.jpg' alt="" />
          <img className={styles.imgf}  src="https://midasiaroutes.com/panel/clients/1608019772_8254.jpg" alt="" />
          <img className={styles.imgf}  src="https://midasiaroutes.com/panel/clients/1608019779_6242.jpg" alt="" />
          <img className={styles.imgf}  src="https://midasiaroutes.com/panel/clients/1608019786_3814.jpg" alt="" />
          <img className={styles.imgf}  src="https://midasiaroutes.com/panel/clients/1608287140_4419.png" alt="" />
        </div>
      </div>
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
            <h3 className={styles.H3_use}>BRANCH OFFICES / DMCS <hr className={styles.hrclass}/></h3>
          </div>
       <div className={styles.location_title}>

          <div
            className={`${styles["col-md-3"]} ${styles.location_new} ${styles["first-child"]}`}
          >
            <ul >
              <li className={styles.local_li}>
                <i className="fa fa-map-marker"></i>
                <span>
                  Office Branch/DMC - Delhi B/176-Greenfields,Delhi-NCR,121003
                </span>
              </li>
            </ul>
          </div>
          <div className={`${styles["col-md-3"]} ${styles.location_new}`}>
            <ul>
              <li  className={styles.local_li}>
                <i className="fa fa-map-marker"></i>
                <span>
                  Office Branch/DMC - Bangkok Phaya thai Plaza,BTS Phaya Thai,
                  Ratchathewi, Bangkok 10400, Thailand
                </span>
              </li>
            </ul>
          </div>
          <div className={`${styles["col-md-3"]} ${styles.location_new}`}>
            <ul>
              <li className={styles.local_li}>
                <i className="fa fa-map-marker"></i>
                <span></span>
              </li>
            </ul>
          </div>
          <div className={`${styles["col-md-3"]} ${styles.location_new}`}>
            <ul className={styles.loca_box}>
              <li className={styles.local_li}>
                <i className="fa fa-map-marker"></i>
                <span>
                  Office Branch/DMC - Muscat Darsait, PO Box 1057, PC 114,
                  Muscat, Sultanate of Oman
                </span>
              </li>
            </ul>
          </div>
        </div>
         <hr className={ styles.hr}/>
        {/* second part */}

        <div className={styles.footer_links}>
          <div className={styles.footer_left}>
            <div className={styles.row}>
              <div className={styles["col-md-12 col-ms-12 col-xs-12"]}>
                <div className={styles.footer_about}>
                  <div className={styles.about_location}>
                    <h3 className={styles.H3_us}>
                      Follow Us
                      <hr className={styles.hrclass}/>
                    </h3>
                    <ul className={styles.menulist}>
                      <li className={styles.loc_li}>Worldwide: +91-8750976</li>
                      <li className={styles.loc_li}>USA/CANADA +1 (917) 993-7606</li>
                      <li className={styles.loc_li}></li>
                      <li className={styles.loc_li}>sumit@midasiaroutes.com</li>
                      <li className={styles.loc_li}>sumit@midasiaroutes.com</li>
                    </ul>
                    <br/>
                    <div className={styles.social_link}>
                      <a href="https://www.facebook.com/midasia/" className={`${styles["icon" ]} ${styles.facebook}`}>
                        <span>
                          "For Tour"
                        </span>
                      </a>
                      <a href="https://www.facebook.com/fashionfamilydecor/"></a>
                      <a href="https://www.instagram.com/travel.with.midasiaroutes/"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer_right}>
            <div className={styles.row}>
              <div className={`${styles["col-md-4 col-sm-4 col-xs-12"]}`}>
                <div className={styles.footer_links_list }>
                  <h3 className={styles.H3_us}>
                    MidAsiaRoutes
                    <hr className={styles.hrclass}/>
                  </h3>
                  <ul className={styles.menulist}>
                    <li  className={styles.loca_li}>
                      <a href="#">About us</a>
                    </li>
                    <li  className={styles.loca_li}>
                      <a href="#">Our Geography</a>
                    </li>
                    <li  className={styles.loca_li}>
                      <a href="#">Private Travel</a>
                    </li>
                    <li className={styles.loca_li}>
                      <a href="#">Shop</a>
                    </li>
                    <li className={styles.loca_li}>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${styles["col-md-4 col-sm-4 col-xs-12"]}`}>
              <div className={styles.footer_links_list }>
                  <h3 className={styles.H3_us}>
                  Our Geography
                    <hr className={styles.hrclass}/>
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
              <div className={styles.footer_links_list }>
                  <h3 className={styles.H3_us}>
                  Other Links
                    <hr className={styles.hrclass}/>
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

      {/* <FooterUpper></FooterUpper> */}
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
                <img  className={styles.images}src="https://midasiaroutes.com/images/payment4.png" />
              </li>
            </ul>
          </div>
          <div className={styles.copyright_content}>
            <p className={styles.copyP}>
            © 2020 MIDAISAROUTES All Rights Reserved.Designed & Developed by
            <a href="#" className={styles.designerName}> RohitSahu</a>
            </p>
          </div>
        </div>
       </div>
    </>
  );
};

export default Footer;