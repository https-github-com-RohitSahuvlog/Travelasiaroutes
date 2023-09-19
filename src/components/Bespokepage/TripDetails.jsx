import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Grid,
  Checkbox,
  FormGroup,
} from "@mui/material";
import styles from "../../css/tripDetails.module.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const destinations = [
  { value: "india", label: "India", link: "/india" },
  { value: "paris", label: "Paris", link: "/india" },
  { value: "tokyo", label: "Tokyo", link: "/india" },
  { value: "new-york", label: "New York", link: "/india" },
  { value: "cape-town", label: "Cape Town", link: "/india" },
];

const groupCounts = [1, 2, 3, 4, 5];

const BespokeForm1 = ({ setCurrentStep1, setFormData1, handleCountNext }) => {
  const navigate = useNavigate();
  const [BespokeFormData1, setBespokeFormData1] = useState({
    destination: "",
    travelDates: "",
    groupSize: "",
  });

  const location = useLocation();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBespokeFormData1({
      ...BespokeFormData1,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("setCurrentStep1", setCurrentStep1);
    handleCountNext({ form1: BespokeFormData1 });
  };

  const handleDestinationChange = (event) => {
    const selectedDestination = event.target.value;
    setBespokeFormData1({
      ...BespokeFormData1,
      destination: selectedDestination,
    });
    localStorage.setItem("selectedDestination", selectedDestination);
    navigate(`/country${destinations.find((d) => d.value === selectedDestination)?.link}`, {
      state: { destination: selectedDestination },
    });;
  }


  useEffect(() => {

    const selectedDestination = localStorage.getItem("selectedDestination");
    if (selectedDestination) {
      setBespokeFormData1((prevData) => ({
        ...prevData,
        destination: selectedDestination,
      }));
    }
  }, []);

  console.log(location, "location")
  return (
    <form onSubmit={handleSubmit} sx={{ justifyContent: "center" }}>
      <Paper elevation={3} sx={{ padding: 3 }} className="bespoke-form-content">
        <h2
          className={styles.tripDetailsheader}
        >
          Start Planning Your Trip
        </h2>

        <Typography align="center" gutterBottom maxWidth={"600px"}>
          Please provide us with the below information, and a B&amp;R Travel
          Advisor will be in touch shortly to confirm your trip details.
        </Typography>

        <FormControl fullWidth sx={{ maxWidth: "50%", marginBottom: 2 }}>
          <InputLabel id="destination-label">
            Where do you want to go?
          </InputLabel>
          <Select
            labelId="destination-label"
            id="destinationOfInterest"
            name="destination"
            label="Where do you want to go?"
            value={BespokeFormData1.destination}
            className={styles.custom_select}
            onChange={handleDestinationChange}
          >
            {destinations.map((destination) => (

              <MenuItem key={destination.value} value={destination.value} className={styles.custom_menu_item} >

                {destination.label}
              </MenuItem>

            ))}
          </Select>
        </FormControl>
        <FormControl
          component="fieldset"
          fullWidth
          sx={{ justifyContent: "center", maxWidth: "50%", marginBottom: 2 }}
        >
          <FormLabel
            component="legend"
            sx={{
              textAlign: "center",
            }}
          >
            What are your travel dates?
          </FormLabel>
          <RadioGroup
            row
            name="travelDates"
            value={BespokeFormData1.travelDates}
            onChange={handleInputChange}
            sx={{ justifyContent: "center" }}
          >
            <FormControlLabel
              value="I know my dates"
              control={<Radio />}
              label="I know my dates"
            />
            <FormControlLabel
              value="I'm flexible with my dates"
              control={<Radio />}
              label="I'm flexible with my dates"
            />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth sx={{ maxWidth: "50%", marginBottom: 2 }}>
          <InputLabel id="group-size-label">
            How many people are you travelling with?
          </InputLabel>
          <Select
            labelId="group-size-label"
            id="flexFieldGroupSize"
            name="groupSize"
            label="How many people are you travelling with?"
            value={BespokeFormData1.groupSize}
            onChange={handleInputChange}
          >
            {groupCounts.map((count) => (
              <MenuItem key={count} value={count}>
                {count}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          marginTop={2}
          className="containerbtn"
        >

          <button type="submit" variant="contained" color="primary" className="buttonform">
            Next
          </button>
        </Grid>
      </Paper>
    </form>
  );
};

export default BespokeForm1;
