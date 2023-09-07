import React, { useState } from "react";
import "../../css/Navbar.css";
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
        <a href="#">Majestic Cruising</a>
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
        <a href="#">Majestic Cruising</a>
        <a href="#">Our Story</a>
        <button className="btn-a btn-a-outline">Start Planning</button>
      </div>
    </div>
  );
}
