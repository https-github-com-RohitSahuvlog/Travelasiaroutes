import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Modal } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../images/logo.svg";
import ModalCom from "../Enquire/ModalCom";
import "../../css/Navbar.css";
import "../../css/Navbar_by_destination.css";
import styled from "styled-components";
// import Tooltip from "react-tooltip";



const SwiperContainer = styled.div`
    min-height: 40px;
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5000;
    word-break: break-word;
    padding: 0 20px;
    background-color: rgb(95, 207, 128);
    color: white;

    a{
      color: white;
      font-size: 0.9rem;
      font-weight: bold;
      margin-right: 0.5rem;
      }
`;

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
  // Countries in Asia
  { text: "Azerbaijan", link: "/azerbaijan" },
  { text: "Bangladesh", link: "/bangladesh" },
  { text: "Bhutan", link: "/bhutan" },
  { text: "Brunei", link: "/brunei" },
  { text: "Cambodia", link: "/cambodia" },
  { text: "China", link: "/china" },
  { text: "Japan", link: "/japan" },
  { text: "India", link: "/india" },
  { text: "Indonesia", link: "/indonesia" },
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
  { text: "Uzbekistan", link: "/uzbekistan" },
  { text: "Vietnam", link: "/vietnam" },

  // Countries in the Middle East
  { text: "Egypt", link: "/egypt" },
  { text: "Iran", link: "/iran" },
  { text: "Israel", link: "/israel" },
  { text: "Iraq", link: "/iraq" },
  { text: "Jordan", link: "/jordan" },
  { text: "Lebanon", link: "/lebanon" },
  { text: "Oman", link: "/oman" },
  { text: "Palestine", link: "/palestine" },
  { text: "Saudi Arabia", link: "/saudi-arabia" },
  { text: "United Arab Emirates", link: "/uae" },
  { text: "Yemen", link: "/yemen" },

  // Countries in Africa
  { text: "Algeria", link: "/algeria" },
  { text: "Botswana", link: "/botswana" },
  { text: "Cameroon", link: "/cameroon" },
  { text: "Chad", link: "/chad" },
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
  { text: "Namibia", link: "/namibia" },
  { text: "Rwanda", link: "/rwanda" },
  { text: "Seychelles", link: "/seychelles" },
  { text: "Somalia", link: "/somalia" },
  { text: "South Sudan", link: "/south-sudan" },
  { text: "Sudan", link: "/sudan" },
  { text: "Tanzania", link: "/tanzania" },
  { text: "Tunisia", link: "/tunisia" },
  { text: "Uganda", link: "/uganda" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const openMenu = () => {
    setShowDestinationDropdown(false);
    document.getElementById("responsiveNavbar").style.right = "0%";
  };
  const closeMenu = () => {
    document.getElementById("responsiveNavbar").style.right = "-150%";

  };

  const handleDestinationClick = () => {
    setShowDestinationDropdown(!showDestinationDropdown);
  };

  const destinationItems = destinations.map((destination, index) => (
    <div className="all_destinations_li" key={index} onClick={() => { setShowDestinationDropdown(false); closeMenu(); }}>
      <Link className="all_destination_Link" to={`country${destination.link}`}>{destination.text}</Link>
    </div>
  ));


  const sidedestinationItems = destinations.map((destination, index) => (
    <Link className="side_destination_Link" to={`country${destination.link}`} key={index}>
      <div className="side_destinations_li" onClick={() => { setShowDestinationDropdown(false); closeMenu(); }} >
        {destination.text}
      </div>
    </Link>
  ));

  return (
    <>
      <SwiperContainer>
        <div className="w-100" style={{ width: "100%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "flex" }}>
          {/* <div style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            <a className="d-flex" href="mailto:mailto:sumit.steve@yahoo.com">
              sumit.steve@yahoo.com
            </a>
          </div> */}


          <div className="w-100" style={{ width: "100%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <div style={{ fontSize: ".9rem", fontWeight: "bold" }}>


            </div>
            <div style={{ fontSize: ".9rem", fontWeight: "bold" }}>
              Talk to our Travel Expert  :
            </div>

            <div>
              <a className=" d-flex align-items-center text-black" href="tel:+1(888)449-0977">
                +1(888)449-0977
              </a>
              (USA/Canada)</div>

            <div>
              <a className="d-flex align-items-center text-white" href="tel:+918750970676">+918750970676 </a>
              (International)
            </div>

          </div>
        </div>
      </SwiperContainer >
      <div className="navbar">


        <div className="call-and-home-nav-item">
          <Link to="/"><img src={logo} alt="MidAsia logo" className="navbar-logo img-fluid" /></Link>

          <a href="mailto:sumit.steve@yahoo.com" className="call-and-home-nav-item d-flex align-items-center text-black">
            <EmailIcon />
          </a>
        </div>
        <div className="nav-items">
          <li className="to_drop"  >
            <Link to="/">Home</Link>
          </li>
          <li className="to_drop">
            <Link to="/bespoke">Bespoke-For your Travel DNA</Link>
          </li>
          <li className="to_drop">
            <Link to="/travel-groups"> Small Group Boutique Expeditions </Link>
          </li>
          <li className="to_drop"  >
            <Link to="/product/rugs">Rugs</Link>
          </li>
          <li className="to_drop" >
            <Link to="/" onClick={() => setShowDestinationDropdown(!showDestinationDropdown)}> By Destination </Link>

            {!showDestinationDropdown && <div id="id_R_by_destination">
              <div className="R_by_destination">

                <div className="all_destinations_container">
                  <h4 className="all_destinations_h4">All Destinations</h4>
                  <ul className="all_destinations_ul" >
                    {destinations.map((destination, index) => (
                      <div key={index} onClick={handleDestinationClick} className="all_destinations_li">
                        <Link className="all_destination_Link" to={`country${destination.link}`}>
                          {destination.text}
                        </Link>
                      </div>
                    ))}
                  </ul>
                </div>

                <div className="all_itineraries_container">
                  <div className="divvv">
                    <Link to="#">
                      <div className="img_B_D">
                        <h4 className="all_itineraries_h4">
                          <span>All Itineraries</span>
                        </h4>
                      </div>
                    </Link>

                  </div>
                </div>

              </div>
            </div>}



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
            <div className="flex sidedivheader">
              <div> <CloseIcon className="close-icon" onClick={closeMenu} /></div>
              <div>
                <h3 className="navbar-logo">Welcome to MidAsia Routes</h3>
              </div>

            </div>


            {!showDestinationDropdown && <>
              <div className="side_nav_link" onClick={() => { setShowDestinationDropdown(false); closeMenu(); }}>
                <Link to="/">Home</Link>
              </div>
              <div className="side_nav_link" onClick={() => { setShowDestinationDropdown(false); closeMenu(); }}>
                <Link to="/bespoke">Bespoke-For your Travel DNA</Link>
              </div>
              <div className="side_nav_link" onClick={() => { setShowDestinationDropdown(false); closeMenu(); }}>
                <Link to="/travel-groups" >Small Group Boutique Expeditions</Link>
              </div>
              <div className="side_nav_link" onClick={() => setShowDestinationDropdown(!showDestinationDropdown)}>
                <Link to="/">By Destination</Link>
              </div>

              <div className="side_nav_link">
                <Link to="/aboutus">Our Story</Link>
              </div>

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
                <div className="side_by_destination">
                  <h4 className="side_destinations_h4">All Destinations</h4>

                  <div className="side_destinations_container">
                    <ul className="side_destinations_ul" >
                      {sidedestinationItems.slice(0, Math.ceil(destinationItems.length / 2))}
                    </ul>
                    <ul className="side_destinations_ul" >
                      {sidedestinationItems.slice(Math.ceil(destinationItems.length / 2))}
                    </ul>
                  </div>
                  <div className="sideall_itineraries_container">
                    <div className="divvv">
                      <Link to="#">
                        <div className="img_B_D">
                          <h4 className="all_itineraries_h4">
                            <span>All Itineraries</span>
                          </h4>
                          <p>
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
    </>
  );
}
