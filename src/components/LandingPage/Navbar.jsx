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
  { text: "Armenia", link: "#" },
  { text: "Azerbaijan", link: "#" },
  { text: "Bangladesh", link: "#" },
  { text: "Bhutan", link: "#" },
  { text: "Brunei", link: "#" },
  { text: "Cambodia", link: "#" },
  { text: "China", link: "#" },
  { text: "Georgia", link: "#" },
  { text: "Hong Kong", link: "#" },
  { text: "India", link: "#" },
  { text: "Indonesia", link: "#" },
  { text: "Japan", link: "#" },
  { text: "Kazakhstan", link: "#" },
  { text: "Kyrgyzstan", link: "#" },
  { text: "Laos", link: "#" },
  { text: "Macao", link: "#" },
  { text: "Malaysia", link: "#" },
  { text: "Maldives", link: "#" },
  { text: "Mongolia", link: "#" },
  { text: "Myanmar", link: "#" },
  { text: "Nepal", link: "#" },
  { text: "Oman", link: "#" },
  { text: "Papua New Guinea", link: "#" },
  { text: "Philippines", link: "#" },
  { text: "Qatar", link: "#" },
  { text: "Saudi Arabia", link: "#" },
  { text: "Siberia & Russian Far East", link: "#" },
  { text: "Singapore", link: "#" },
  { text: "South Korea", link: "#" },
  { text: "Sri Lanka", link: "#" },
  { text: "Taiwan", link: "#" },
  { text: "Tajikistan", link: "#" },
  { text: "Thailand", link: "#" },
  { text: "Tibet", link: "#" },
  { text: "Turkmenistan", link: "#" },
  { text: "UAE", link: "#" },
  { text: "Uzbekistan", link: "#" },
  { text: "Vietnam", link: "#" },
];


const regionalDestinations = [
  { text: "Abu Dhabi", link: "#" },
  { text: "Bali", link: "#" },
  { text: "Borneo", link: "#" },
  { text: "Dubai", link: "#" },
  { text: "Kamchatka", link: "#" },
];

const destinationItems = destinations.map((destination, index) => (
  <li className="all_destinations_li" key={index}>
    <Link className="all_destination_Link" to={destination.link}>{destination.text}</Link>
  </li>
));

const regionalDestinationItems = regionalDestinations.map((destination, index) => (
  <li className="regional_destinations_li" key={index}>
    <Link regional_destinations_Link to={destination.link}>{destination.text}</Link>
  </li>
));


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [displayContactInNavbar, setDisplayContactInNavbar] = useState(false);
  const [displayLogoInNavbar, setDisplayLogoInNavbar] = useState(true);
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
    document.getElementById("responsiveNavbar").style.right = "0%";
  };
  const closeMenu = () => {
    document.getElementById("responsiveNavbar").style.right = "-100%";
  };
  return (
    <div className="navbar">
      {displayLogoInNavbar && <img src={logo} alt="" className="navbar-logo" />}
      {displayContactInNavbar && (
        <div className="call-and-home-nav-item">
          <CallIcon />
          <p>+91 123 456 789 0</p>
          <p>|</p>
          <Link to="#">
            <HomeIcon />
          </Link>
        </div>
      )}
      <div className="nav-items">
        <li className="to_drop"  >
          <Link to="#">Home</Link>
        </li>
        <li className="to_drop">
          <Link to="#">Bespoke-For your Travel DNA</Link>
        </li>
        <li className="to_drop">
          <Link to="#"> Small Group Boutique Expeditions </Link>
          <div className="small_group">
            <Link className="small_group_Link" to="#">Asia Pacific</Link>
            <Link className="small_group_Link" to="#">Middle East/ Africa</Link>
          </div >
        </li>
        <li className="to_drop" >
          <Link to="#"> By Destination </Link>

          <div id="id_R_by_destination">
            <div class="R_by_destination">

              <div class="all_destinations_container">
                <h4 class="all_destinations_h4">All Destinations</h4>
                <ul class="all_destinations_ul" >
                  {destinationItems}
                </ul>
              </div>

              <div class="regional_destinations_container">
                <h4 class="regional_destinations_h4">Regional Destinations</h4>
                <ul className="regional_destinations_ul">{regionalDestinationItems}</ul>
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


            <Link to="/">Home</Link>
            <Link to="/bespoke">Bespoke-For your Travel DNA</Link>
            <div className="drop-down-item">
              <p>Small Group Boutique Expeditions</p>
              <div className="drop-down-menu">
                <Link to="/asia-pacific">Asia Pacific</Link>
                <Link to="/middle-east-africa">Middle East/ Africa</Link>
              </div>
            </div>
            <Link to="/">By Destination</Link>
            <Link to="/our-story">Our Story</Link>
          </div>
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
          <MenuIcon className="menu-icon" onClick={openMenu} />

          <div className="responsive-navbar" id="responsiveNavbar">
            <CloseIcon className="close-icon" onClick={closeMenu} />
            <img src={logo} alt="" className="navbar-logo" />


            <Link to="/">Home</Link>
            <Link to="/bespoke">Bespoke-For your Travel DNA</Link>
            <p>Small Group Boutique Expeditions</p>
            <ul>
              <li>
                <Link to="#">Asia Pacific</Link>
              </li>
              <li>
                <Link to="#">Middle East/ Africa</Link>
              </li>
            </ul>

            <Link to="/">By Destination</Link>
            <Link to="/our-story">Our Story</Link>
            <button className="btn-a btn-a-outline">Start Planning</button>
          </div >
        </li>
      </div >
    </div>
  );
}
