import React, { useState } from "react";
import "../../css/Navbar.css";
import "../../css/Navbar_by_destination.css";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ModalCom from "../Enquire/ModalCom";
import { Box, Button, Modal } from "@mui/material";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "98%",
  bgcolor: "background.paper",
  boxShadow: 24,
  // p: 4,
  height: "98%",
  overflowY: "scroll",
  m: "auto",
};

const destinations = [
  { text: "Armenia", link: "/armenia" },
  { text: "Azerbaijan", link: "/azerbaijan" },
  { text: "Bangladesh", link: "/bangladesh" },
  { text: "Bhutan", link: "/bhutan" },
  { text: "Borneo", link: "/borneo" },
  { text: "Brunei", link: "/brunei" },
  { text: "Cambodia", link: "/cambodia" },
  { text: "China", link: "/china" },
  { text: "India", link: "/india" },
  { text: "Indonesia", link: "/indonesia" },
  { text: "Iran", link: "/iran" },
  { text: "Iraq", link: "/iraq" },
  { text: "Japan", link: "/japan" },
  { text: "Kazakhstan", link: "/kazakhstan" },
  { text: "Kyrgyzstan", link: "/kyrgyzstan" },
  { text: "Laos", link: "/laos" },
  { text: "Malaysia", link: "/malaysia" },
  { text: "Maldives", link: "/maldives" },
  { text: "Mongolia", link: "/mongolia" },
  { text: "Myanmar (Burma)", link: "/myanmar" },
  { text: "Nepal", link: "/nepal" },
  { text: "Pakistan", link: "/pakistan" },
  { text: "Philippines", link: "/philippines" },
  { text: "Singapore", link: "/singapore" },
  { text: "South Korea", link: "/south-korea" },
  { text: "Sri Lanka", link: "/sri-lanka" },
  { text: "Taiwan", link: "/taiwan" },
  { text: "Tajikistan", link: "/tajikistan" },
  { text: "Thailand", link: "/thailand" },
  { text: "Tibet", link: "/tibet" },
  { text: "Turkmenistan", link: "/turkmenistan" },
  { text: "UAE", link: "/uae" },
  { text: "Uzbekistan", link: "/uzbekistan" },
  { text: "Vietnam", link: "/vietnam" },
  { text: "Egypt", link: "/egypt" },
  { text: "Israel", link: "/israel" },
  { text: "Jordan", link: "/jordan" },
  { text: "Lebanon", link: "/lebanon" },
  { text: "Oman", link: "/oman" },
  { text: "Palestine", link: "/palestine" },
  { text: "Saudi Arabia", link: "/saudi-arabia" },
  { text: "United Arab Emirates", link: "/uae" },
  { text: "Yemen", link: "/yemen" },
  { text: "Algeria", link: "/algeria" },
  { text: "Botswana", link: "/botswana" },
  { text: "Burkina Faso", link: "/burkina-faso" },
  { text: "Burundi", link: "/burundi" },
  { text: "Cameroon", link: "/cameroon" },
  { text: "Chad", link: "/chad" },
  { text: "Comoros", link: "/comoros" },
  { text: "Congo", link: "/congo" },
  { text: "Djibouti", link: "/djibouti" },
  { text: "Eritrea", link: "/eritrea" },
  { text: "Ethiopia", link: "/ethiopia" },
  { text: "Kenya", link: "/kenya" },
  { text: "Madagascar", link: "/madagascar" },
  { text: "Malawi", link: "/malawi" },
  { text: "Mali", link: "/mali" },
  { text: "Mauritius", link: "/mauritius" },
  { text: "Morocco", link: "/morocco" },
  { text: "Mozambique", link: "/mozambique" },
  { text: "Namibia", link: "/namibia" },
  { text: "Reunion", link: "/reunion" },
  { text: "Rwanda", link: "/rwanda" },
  { text: "Seychelles", link: "/seychelles" },
  { text: "Sierra Leone", link: "/sierra-leone" },
  { text: "Somalia", link: "/somalia" },
  { text: "South Africa", link: "/south-africa" },
  { text: "South Sudan", link: "/south-sudan" },
  { text: "Sudan", link: "/sudan" },
  { text: "Tanzania", link: "/tanzania" },
  { text: "Tunisia", link: "/tunisia" },
  { text: "Uganda", link: "/uganda" }
];



const destinationItems = destinations.map((destination, index) => (
  <div className="all_destinations_li" key={index}>
    <Link className="all_destination_Link" to={`country${destination.link}`}>{destination.text}</Link>
  </div>
));


const sidedestinationItems = destinations.map((destination, index) => (
  <Link className="side_destination_Link" to={`country${destination.link}`} key={index}>
    <div className="side_destinations_li" >
      {destination.text}
    </div>
  </Link>
));




export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [displayContactInNavbar, setDisplayContactInNavbar] = useState(false);
  const [displayLogoInNavbar, setDisplayLogoInNavbar] = useState(true);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [showBespokeDropdown, setShowBespokeDropdown] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  document.addEventListener("scroll", () => {
    if (window.scrollY >= 70) {
      setDisplayContactInNavbar(true);
      setDisplayLogoInNavbar(false);
    } else if (window.scrollY < 70) {
      setDisplayContactInNavbar(false);
      setDisplayLogoInNavbar(true);
    }
  });

  const openMenu = () => {
    setShowDestinationDropdown(false);
    document.getElementById("responsiveNavbar").style.right = "0%";
  };
  const closeMenu = () => {
    document.getElementById("responsiveNavbar").style.right = "-150%";

  };
  return (
    <div className="navbar">
      {displayLogoInNavbar && <img src={logo} alt="" className="navbar-logo" />}
      {displayContactInNavbar && (
        <div className="call-and-home-nav-item">
          <CallIcon />
          <p>+91 123 456 789 0</p>
          <p>|</p>
          <Link to="/">
            <HomeIcon />
          </Link>
        </div>
      )}
      <div className="nav-items">
        <li className="to_drop"  >
          <Link to="/">Home</Link>
        </li>
        <li className="to_drop">
          <Link to="/bespoke">Bespoke-For your Travel DNA</Link>
        </li>
        <li className="to_drop">
          <Link to="/"> Small Group Boutique Expeditions </Link>
          <div className="small_group">
            <Link className="small_group_Link" to="#">Asia Pacific</Link>
            <Link className="small_group_Link" to="#">Middle East/ Africa</Link>
          </div >
        </li>
        <li className="to_drop" >
          <Link to="/"> By Destination </Link>

          <div id="id_R_by_destination">
            <div class="R_by_destination">

              <div class="all_destinations_container">
                <h4 class="all_destinations_h4">All Destinations</h4>
                <ul class="all_destinations_ul" >
                  {destinationItems}
                </ul>
              </div>

              <div class="regional_destinations_container">
                {/* <h4 class="regional_destinations_h4">Regional Destinations</h4>
                <ul className="regional_destinations_ul">{regionalDestinationItems}</ul> */}
              </div>

              <div class="all_itineraries_container">
                <div class="divvv">
                  <Link to="#">
                    <div class="img_B_D">
                      <h4 class="all_itineraries_h4">
                        <span>All Itineraries</span>
                      </h4>
                      <p>Browse more than 400 sample itineraries across Asia.
                      </p>
                    </div>
                  </Link>

                </div>
              </div>

            </div>


            {/* <Link to="/">Home</Link>
            <Link to="/bespoke">Bespoke-For your Travel DNA</Link>
            <div className="drop-down-item">
              <p>Small Group Boutique Expeditions</p>
              <div className="drop-down-menu">
                <Link to="/asia-pacific">Asia Pacific</Link>
                <Link to="/middle-east-africa">Middle East/ Africa</Link>
              </div>
            </div>
            <Link to="/">By Destination</Link>
            <Link to="/our-story">Our Story</Link> */}
          </div>


        </li>
        <li>
          <button className="btn-a btn-a-outline" onClick={handleOpen}>Start Planning</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box
              sx={style}
            >
              <ModalCom handleClose={handleClose} />
            </Box>
          </Modal>
        </li>


      </div >
      <div>
        <MenuIcon className="menu-icon" onClick={openMenu} />

        <div className="responsive-navbar" id="responsiveNavbar" >
          <CloseIcon className="close-icon" onClick={closeMenu} />
          <img src={logo} alt="" className="navbar-logo" />
          {!showDestinationDropdown && <>
            <div className="side_nav_link">
              <Link to="/">Home</Link>
            </div>
            <div className="side_nav_link">
              <Link to="/bespoke">Bespoke-For your Travel DNA</Link>
            </div>
            <div className="side_nav_link">
              <Link to="/" >Small Group Boutique Expeditions</Link>
            </div>
            <div className="side_nav_link" onClick={() => setShowDestinationDropdown(!showDestinationDropdown)}>
              <Link to="/">By Destination</Link>
            </div>

            <div className="side_nav_link">
              <Link to="/our-story">Our Story</Link>
            </div>

            {/* <ul>
            <li>
              <Link to="#">Asia Pacific</Link>
            </li>
            <li>
              <Link to="#">Middle East/ Africa</Link>
            </li>
          </ul> */}

            <div className="side_nav_link">
              <button className="btn-a btn-a-outline" onClick={handleOpen}>Start Planning</button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box
                  sx={style}
                >
                  <ModalCom handleClose={handleClose} />
                </Box>
              </Modal>
            </div></>}

          {showDestinationDropdown && (
            <div >
              <div class="side_by_destination">
                <h4 class="side_destinations_h4">All Destinations</h4>

                <div class="side_destinations_container">
                  <ul class="side_destinations_ul" >
                    {sidedestinationItems.slice(0, Math.ceil(destinationItems.length / 2))}
                  </ul>
                  <ul class="side_destinations_ul" >
                    {sidedestinationItems.slice(Math.ceil(destinationItems.length / 2))}
                  </ul>
                </div>
                {/* <div class="sideregional_destinations_container">
                  <h4 class="sideregional_destinations_h4">Regional Destinations</h4>
                  <ul className="sidenavregional_ul">{sideregionalDestination}</ul>
                </div> */}
                <div class="sideall_itineraries_container">
                  <div class="divvv">
                    <Link to="#">
                      <div class="img_B_D">
                        <h4 class="all_itineraries_h4">
                          <span>All Itineraries</span>
                        </h4>
                        <p>Browse more than 400 sample itineraries across Asia.
                        </p>
                      </div>
                    </Link>

                  </div>
                </div>



              </div>

            </div>
          )}

        </div >

      </div>
    </div>
  );
}
