import "./moalcom.css";
import { useState } from "react";
import Enquire from "./Enquire";
import Callus from "./Callus";
import Findus from "./Findus";
import CloseIcon from "@mui/icons-material/Close";

function ModalCom({ handleClose }) {
  const [component, setComponent] = useState("enquire");

  return (
    <div
      style={{
        textAlign: "center",
      }}>
      <CloseIcon
        sx={{
          position: "absolute",
          right: 1,
          top: 0,
          cursor: "pointer",
          color: "grey",
        }}
        onClick={handleClose}
      />
      <h1>Logo</h1>
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
