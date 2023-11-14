import React, { useState } from "react";
import {
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

import "../../css/BespokeTravel.css";
import styles from "../../css/travelingwith.module.css"

const centerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const BespokeForm2 = ({ prevClick, handleCountNext }) => {
  const [formData, setFormData] = useState({
    travelWith: {
      solo: false,
      partner: false,
      youngKids: false,
      friends: false,
      couples: false,
      multiGenerationalFamily: false,
      other: false,
    },
    travelDuration: "",
    budgetPerDay: "",
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      travelWith: {
        ...prevState.travelWith,
        [name]: checked,
      },
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCountNext({ form2: formData });
  };
  console.log(formData)
  const renderImportStatement = formData.travelWith.other ? (
    <div>
      <Typography variant="body1" style={{ marginBottom: 15 }}>
        How long do you want to travel?
      </Typography>
      <FormControl sx={{ width: "70%", marginBottom: 2 }}>
        <Select
          value={formData.travelDuration}
          onChange={handleSelectChange}
          name="travelDuration"
        >
          <MenuItem value="1 Week">1 Week</MenuItem>
          <MenuItem value="2 Weeks">2 Weeks</MenuItem>
          <MenuItem value="3 Weeks">3 Weeks</MenuItem>
        </Select>
      </FormControl>
    </div>
  ) : null;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        sx={{ justifyContent: "center" }}
        className="bespoke-form-content"
      >

        <h2
          className={styles.travelingwithsheader}
        >
          Start Planning Your Trip
        </h2>
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
            <Typography variant="body1">Who are you traveling with?</Typography>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.travelWith.solo}
                      onChange={handleCheckboxChange}
                      name="solo"
                    />
                  }
                  label="Solo"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.travelWith.partner}
                      onChange={handleCheckboxChange}
                      name="partner"
                    />
                  }
                  label="Partner"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.travelWith.youngKids}
                      onChange={handleCheckboxChange}
                      name="youngKids"
                    />
                  }
                  label="Young Kids"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.travelWith.friends}
                      onChange={handleCheckboxChange}
                      name="friends"
                    />
                  }
                  label="Friends"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.travelWith.couples}
                      onChange={handleCheckboxChange}
                      name="couples"
                    />
                  }
                  label="Couples"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.travelWith.multiGenerationalFamily}
                      onChange={handleCheckboxChange}
                      name="multiGenerationalFamily"
                    />
                  }
                  label="Multi-Generational Family"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.travelWith.other}
                      onChange={handleCheckboxChange}
                      name="other"
                    />
                  }
                  label="Other"
                />
              </FormGroup>
            </FormControl>
          </div>
          {renderImportStatement}
          <div style={{ marginLeft: "50px" }}>
            <Typography variant="body1" style={{ marginBottom: 15 }}>
              What's your budget per person, per day?
            </Typography>
            <FormControl sx={{ width: "70%", marginBottom: 2 }}>
              <Select
                value={formData.budgetPerDay}
                onChange={handleSelectChange}
                name="budgetPerDay"
              >
                <MenuItem value="$50 - $100">$50 - $100</MenuItem>
                <MenuItem value="$100 - $200">$100 - $200</MenuItem>
                <MenuItem value="$200 - $300">$200 - $300</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          marginTop={2}
          spacing={3}
          className="containerbtn"
        >
          <button
            variant="contained"
            color="secondary"
            onClick={prevClick}
            className="buttonform"
          >
            Previous
          </button>
          <button type="submit" variant="contained" color="primary" className="buttonform">
            Next
          </button>
        </Grid>
      </form>
    </>
  );
};

export default BespokeForm2;
