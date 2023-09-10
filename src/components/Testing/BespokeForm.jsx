import React, { useState } from "react";
import styled from "@emotion/styled";
import "../../css/BespokeTravel.css";
import BespokeForm1 from "./TripDetails";
import BespokeForm2 from "./Travelingwith";
import Occassion from "./Occasion";
import TripuserInfo from "./tripuserInfo";
const Container = styled.div`
        maxWidth: 650,
        margin: "auto",
        background: "#fff",
        borderRadius: 8,
        padding: "45px 0px",
        background-color: red;
`;

const BespokeForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  let handleCountNext = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
    console.log("handleCountNext", data);
    setCurrentStep(currentStep + 1);
  };

  const prevClick = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Container className="bespoke-form-container">
      {currentStep == 1 && (
        <BespokeForm1
          setFormData={setFormData}
          handleCountNext={handleCountNext}
        />
      )}
      {currentStep === 2 && (
        <BespokeForm2
          prevClick={prevClick}
          handleCountNext={handleCountNext}
          formData={formData}
        />
      )}
      {currentStep === 3 && (
        <Occassion
          prevClick={prevClick}
          handleCountNext={handleCountNext}
          formData={formData}
        />
      )}
      {currentStep === 4 && (
        <TripuserInfo
          prevClick={prevClick}
          handleCountNext={handleCountNext}
          formData={formData}
        />
      )}
    </Container>
  );
};

export default BespokeForm;
