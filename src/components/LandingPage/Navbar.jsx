import React, { useState } from "react";
import "../../css/Navbar.css";
import "../../css/Navbar_by_destination.css";

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
          <a href="#">
            <HomeIcon />
          </a>
        </div>
      )}
      <div className="nav-items">
        <a href="#">Home</a>
        <a href="#">Bespoke-For your Travel DNA</a>
        <div className="drop-down-item">
          <p>Small Group Boutique Expeditions</p>
          <div className="drop-down-menu">
            <a href="#">Asia Pacific</a>
            <a href="#">Middle East/ Africa</a>
          </div>
        </div>
        <li className="to_drop" >
          <a href="#"> By Destination </a>

            <div id="id_R_by_destination">
        <div class="R_by_destination">

            <div class="all_destinations_container">
                <h4 class="all_destinations_h4">All Destinations</h4>
                <ul class="all_destinations_ul" >
                    <li class="all_destinations_li">
                    <a href="#">
                            Armenia
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Azerbaijan
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Bangladesh
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Bhutan
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Brunei
                        </a>
                    </li>
                    <li class="all_destinations_li">
                      <a href="#">
                            Cambodia
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            China
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Georgia
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Hong Kong
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            India
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Indonesia
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Japan
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Kazakhstan
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Kyrgyzstan
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Laos
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Macao
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Malaysia
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Maldives
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Mongolia
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Myanmar
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Nepal
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Oman
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Papua New Guinea
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Philippines
                        </a>
                    </li>
                    <li class="all_destinations_li">
                        <a href="#">
                            Qatar
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Saudi Arabia
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Siberia &amp; Russian Far East
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Singapore
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            South Korea
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Sri Lanka
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Taiwan
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Tajikistan
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Thailand
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Tibet
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Turkmenistan
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            UAE
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Uzbekistan
                        </a>
                    </li>
                    <li class="all_destinations_li">
                    <a href="#">
                            Vietnam
                        </a>
                    </li>
                </ul>
            </div>

            <div class="regional_destinations_container">
                <h4 class="regional_destinations_h4">Regional Destinations</h4>
                <ul class="regional_destinations_ul">
                    <li class="regional_destinations_li">
                    <a href="#">
                            Abu Dhabi
                        </a>
                    </li>
                    <li class="regional_destinations_li">
                    <a href="#">
                            Bali
                        </a>
                    </li>
                    <li class="regional_destinations_li">
                    <a href="#">
                            Borneo
                        </a>
                    </li>
                    <li class="regional_destinations_li">
                    <a href="#">
                            Dubai
                        </a>
                    </li>
                    <li class="regional_destinations_li">
                    <a href="#">
                            Kamchatka
                        </a>
                    </li>
                </ul>
            </div>

            <div class="all_itineraries_container">
                <div class="divvv">
                    <a  href="#">
                        <div class="img_B_D">
                            <h4 class="all_itineraries_h4">
                                <span>All Itineraries</span>
                            </h4>
                            <p>Browse more than 400 sample itineraries across Asia.
                            </p>
                        </div>
                    </a>

                </div>
            </div>

        </div>

            </div>
        </li>
        <a href="#">Our Story</a>
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
        <a href="#">Home</a>
        <a href="#">Bespoke-For your Travel DNA</a>
        <p>Small Group Boutique Expeditions</p>
        <ul>
          <li>
            <a href="#">Asia Pacific</a>
          </li>
          <li>
            <a href="#">Middle East/ Africa</a>
          </li>
        </ul>
        <a href="#">By Destination</a>
        <a href="#">Our Story</a>
        <button className="btn-a btn-a-outline">Start Planning</button>
      </div>
    </div>
  );
}
