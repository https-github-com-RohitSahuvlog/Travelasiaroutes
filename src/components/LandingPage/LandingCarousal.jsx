import React, { useState, useEffect } from "react";
import Slider from "../Carousal/slider.js";
import { toast } from "react-toastify";
import Axios from "../../api";

const LandingCarousal = () => {
  const [carousalData, setCarousalData] = useState([]);

  const fetchCarousals = async () => {
    try {
      const response = await Axios.get('/api/carousels');
      setCarousalData(response.data);
    } catch (error) {
      console.log(error);
      toast.error('Error fetching carousals');
    }
  };

  useEffect(() => {
    fetchCarousals();
  }, []);

  return (
    <div className="landinglanding-carousal">
      <Slider carousalData={carousalData} />
    </div>
  );
};

export default LandingCarousal;