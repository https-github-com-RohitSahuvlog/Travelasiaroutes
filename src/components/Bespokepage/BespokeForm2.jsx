import React from "react";
import {
  Container,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";

import "./BespokeTravel.css";

const centerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const BespokeForm2 = ({ prevClick, handleCountNext, formData }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={onSubmit} sx={{ justifyContent: "center" }}>
        <div style={{ maxWidth: 600, margin: "auto", color: "#494949" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Start Planning Your Trip
          </Typography>
        </div>
        <div
          style={{
            ...centerStyle,
            color: "rgb(73, 73, 73)",
            padding: "30px 0px",
            textAlign: "left",
            maxWidth: 600,
          }}
        >
          <div>
            <Typography variant="body1">
              Who are you travelling with?
            </Typography>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Solo" />
                <FormControlLabel control={<Checkbox />} label="Partner" />
                <FormControlLabel control={<Checkbox />} label="Young Kids" />
                <FormControlLabel control={<Checkbox />} label="Friends" />
                <FormControlLabel control={<Checkbox />} label="Couples" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Multi-Generational Family"
                />
                <FormControlLabel control={<Checkbox />} label="Other" />
              </FormGroup>
            </FormControl>
          </div>
          <div>
            <Typography variant="body1" style={{ marginBottom: 15 }}>
              How long do you want to travel?
            </Typography>
            <FormControl sx={{ width: "70%", marginBottom: 2 }}>
              <Select>
                <MenuItem>1 Week</MenuItem>
                <MenuItem>2 Weeks</MenuItem>
                <MenuItem>3 Weeks</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ marginLeft: "50px" }}>
            <Typography variant="body1" style={{ marginBottom: 15 }}>
              What's your budget per person, per day?
            </Typography>
            <FormControl sx={{ width: "70%", marginBottom: 2 }}>
              <Select>
                <MenuItem>$50 - $100</MenuItem>
                <MenuItem>$100 - $200</MenuItem>
                <MenuItem>$200 - $300</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          marginTop={2}
        >
          <Button variant="contained" color="secondary" onClick={prevClick}>
            Previous
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default BespokeForm2;
