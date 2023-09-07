import React, { useState } from "react";
import BespokeForm2 from "./BespokeForm2";
import BespokeForm1 from "./BespokeForm1";

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
    <>
      {currentStep === 1 && (
        <BespokeForm1
          setCurrentStep1={setCurrentStep}
          setFormData1={setFormData}
          handleCountNext={handleCountNext}
        />
      )}

      {/* {currentStep === 2 && (
        <BespokeForm2
          prevClick={prevClick}
          handleCountNext={handleCountNext}
          formData={formData}
        />
      )} */}
    </>
  );
};

export default BespokeForm;
