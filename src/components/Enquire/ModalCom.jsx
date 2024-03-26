import "./moalcom.css";
import { useState } from "react";
import Enquire from "./Enquire";
import Callus from "./Callus";
import Findus from "./Findus";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function ModalCom({ handleClose }) {
  const [component, setComponent] = useState("enquire");

  return (
    <div
      style={{
        textAlign: "center"
      }}>

      <div className="Logo_design">
        <Link to="/"><img src={logo} alt="" className="navbar-logo" /></Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "black",
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          <span >Close</span>
          {/* <CloseIcon fontSize="15px" marginLeft="5px" /> */}

        </div>
      </div>

      <div className="main_container">
        <div className="buttons_container">
          <button
            onClick={() => setComponent("callus")}
            className={
              component === "callus" ? "button_active" : "button_inactive"
            }>
            CALL US
          </button>
          <button
            onClick={() => setComponent("enquire")}
            className={
              component === "enquire" ? "button_active" : "button_inactive"
            }>
            ENQUIRE ONLINE
          </button>
          <button
            onClick={() => setComponent("findus")}
            className={
              component === "findus" ? "button_active" : "button_inactive"
            }>
            FIND US
          </button>
        </div>
        <div className="content_container">
          {component === "callus" ? (
            <Callus setComponent={setComponent} />
          ) : component === "findus" ? (
            <Findus />
          ) : (
            <Enquire />
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalCom;
