import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarkerAlt, 
  faPhoneAlt, 
  faGlobe, 
  faEnvelope, 
  faArrowUp 
} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const Footer = () => {
  const [footerData, setFooterData] = useState({
    officeBranches: [],
    contactInfo: [],
  });
  
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchFooterData();
  }, []);

  const fetchFooterData = async () => {
    try {
      const response = await axios.get("https://api.midasiaroutes.in/api/footer/get-footer");
      const { officeBranches, contactInfo } = response.data;
      setFooterData({ officeBranches, contactInfo });
    } catch (error) {
      console.error("Error fetching footer data:", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  // Office locations with fallback data
  const officeLocations =  [
    {
      id: 1,  
      location: "USA",
      address: "1309 Coffeen Avenue, STE 1200, Sheridan, Wyoming 82801, USA"
    },
    {
      id: 2,
      location: "India",
      address: "B/176-Greenfields, Delhi-NCR, 121003"
    }
  ];

  // Contact information with fallback data
  const contactInformation =  [
    {
      id: 1,
      icon: faPhoneAlt,
      text: "USA/Canada: +1 (888) 449-0977"
    },
    {
      id: 2,
      icon: faGlobe,
      text: "Worldwide: +91-8750970676"
    },
    {
      id: 3,
      icon: faEnvelope,
      text: "sumit.steve@yahoo.com, sumit@midasiaroutes.com"
    }
  ];

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const allOfficeLocations = [
    "Delhi", "Muscat", "Dubai", "Bangkok", "Baghdad", "Shiraz", "Tashkent", "Kathmandu", "Cairo"
  ];

  return (
    <>
      <footer className={styles.footer || "footer"}>
        <div className={styles.footerTop || "footer-top"}>
          <div className={styles.container || "container"}>
            <div className={styles.footerWrapper || "footer-wrapper"}>
              <div className={styles.footerInfo || "footer-info"}>
                <div className={styles.addressContainer || "address-container"}>
                  <h3 className={styles.footerSectionTitle || "footer-section-title"}>OUR OFFICES / ADDRESS</h3>
                  <div className={styles.officesGrid || "offices-grid"}>
                    {officeLocations.map((office, index) => (
                      <div className={styles.officeCard || "office-card"} key={office.id || index}>
                        <div className={styles.officeLocation || "office-location"}>
                          <div className={styles.officeIcon || "office-icon"}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                          </div>
                          <div className={styles.officeAddress || "office-address"}>
                            Head Office/DMC - {office.location} {office.address}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.footerLinks || "footer-links"}>
                <div className={styles.footerLinksColumn || "footer-links-column"}>
                  <h3 className={styles.footerSectionTitle || "footer-section-title"}>MidAsiaRoutes</h3>
                  <ul className={styles.footerNav || "footer-nav"}>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/bespoke">Bespoke-For your Travel DNA</a>
                    </li>
                    <li>
                      <a href="/travel-groups">Small Group Boutique Expeditions</a>
                    </li>
                    {/* our story */}
                    <li><a href="/aboutus">Our Story</a></li>
                  </ul>
                </div>

                <div className={styles.footerLinksColumn || "footer-links-column"}>
                  <h3 className={styles.footerSectionTitle || "footer-section-title"}>Other Links</h3>
                  <ul className={styles.footerNav || "footer-nav"}>
                    <li>
                      <a href="/privacy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/booking-terms">Booking Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="/booking-form">Booking Forms</a>
                    </li>
                  </ul>
                </div>

                <div className={styles.footerLinksColumn || "footer-links-column"}>
                  <h3 className={styles.footerSectionTitle || "footer-section-title"}>Contact Us</h3>
                  <div className={styles.contactInfo || "contact-info"}>
                    {contactInformation.map((contact, index) => (
                      <div className={styles.contactItem || "contact-item"} key={contact.id || index}>
                        <div className={styles.contactIcon || "contact-icon"}>
                          <FontAwesomeIcon icon={contact.icon} />
                        </div>
                        <div className={styles.contactText || "contact-text"}>
                          {contact.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.additionalOffices || "additional-offices"}>
          <div className={styles.container || "container"}>
            <p className={styles.otherOfficesText || "other-offices-text"}>
              Other Offices:<br />
              {" "}
              {allOfficeLocations.join(" | ")}
            </p>
          </div>
        </div>

        <div className={styles.footerMiddle || "footer-middle"}>
          <div className={styles.container || "container"}>
            <div className={styles.footerMiddleWrapper || "footer-middle-wrapper"}>
              <div className={styles.newsletter || "newsletter"}>
                <h4 className={styles.newsletterTitle || "newsletter-title"}>Subscribe to Our Newsletter</h4>
                <form className={styles.newsletterForm || "newsletter-form"} onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    className={styles.newsletterInput || "newsletter-input"}
                    placeholder="Your Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <button type="submit" className={styles.newsletterButton || "newsletter-button"}>
                    Subscribe
                  </button>
                </form>
              </div>

              <div className={styles.socialLinks || "social-links"}>
                <a
                  href="https://www.facebook.com/midasia/"
                  className={styles.socialLink || "social-link"}
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com/midasiaroutes"
                  className={styles.socialLink || "social-link"}
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://www.instagram.com/midasia_routes?igsh=dHBudmYzMTEzNXJj&utm_source=qr"
                  className={styles.socialLink || "social-link"}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://linkedin.com/company/midasiaroutes"
                  className={styles.socialLink || "social-link"}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://youtube.com/midasiaroutes"
                  className={styles.socialLink || "social-link"}
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom || "footer-bottom"}>
          <div className={styles.container || "container"}>
            <p className={styles.copyright || "copyright"}>
              © {new Date().getFullYear()} <a href="/">MIDASIAROUTES</a> All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
