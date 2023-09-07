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
import "./BespokeTravel.css";

const destinations = [
  { value: "paris", label: "Paris" },
  { value: "tokyo", label: "Tokyo" },
  { value: "new-york", label: "New York" },
  { value: "cape-town", label: "Cape Town" },
];

const groupCounts = [1, 2, 3, 4, 5];

const BespokeForm1 = ({ setCurrentStep1, setFormData1, handleCountNext }) => {
  console.log(
    "setCurrentStep1",
    setCurrentStep1,
    setFormData1,
    handleCountNext
  );
  const [BespokeFormData1, setBespokeFormData1] = useState({
    destination: "",
    travelDates: "",
    groupSize: "",
  });

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
    // handleCountNext(BespokeFormData1);
  };

  return (
    <form onSubmit={handleSubmit} sx={{ justifyContent: "center" }}>
      <Paper elevation={3} sx={{ padding: 3 }} className="bespoke-form-content">
        <Typography variant="h4" align="center" gutterBottom>
          Start Planning Your Trip
        </Typography>

        <Typography align="center" gutterBottom>
          Please provide us with the below information, and a B&amp;R Travel
          Advisor will be in touch shortly to confirm your trip details.
        </Typography>

        <FormControl fullWidth sx={{ width: "70%", marginBottom: 2 }}>
          <InputLabel id="destination-label">
            Where do you want to go?
          </InputLabel>
          <Select
            labelId="destination-label"
            id="destinationOfInterest"
            name="destination"
            label="Where do you want to go?"
            value={BespokeFormData1.destination}
            onChange={handleInputChange}
          >
            {destinations.map((destination) => (
              <MenuItem key={destination.value} value={destination.value}>
                {destination.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          component="fieldset"
          fullWidth
          sx={{ justifyContent: "center" }}
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
        <FormControl sx={{ width: "70%", marginBottom: 2 }}>
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
          justifyContent="space-between"
          alignItems="center"
          marginTop={2}
        >
          <Button variant="contained" color="secondary" disabled>
            Previous
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      </Paper>
    </form>
  );
};

export default BespokeForm1;
