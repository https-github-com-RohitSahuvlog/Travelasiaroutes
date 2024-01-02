import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import styles from "../../css/Occassion.module.css";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";

function Occassion({ prevClick, handleCountNext }) {
  const [travelOccasion, setTravelOccasion] = useState("none");
  const [experiences, setExperiences] = useState([]);
  const [otherOccasion, setOtherOccasion] = useState([]);
  const [otherExperienceText, setOtherExperienceText] = useState("");
  const [otherAccommodation, setOtherAccommodation] = useState("");
  const [accommodationType, setAccommodationType] = useState([]);
  const [otherOccasionText, setOtherOccasionText] = useState("");
  const [experiencesOther, setexperiencesOther] = useState("");
  const [isOtherExperienceChecked, setIsOtherExperienceChecked] = useState(
    false
  );


  const handleTravelOccasionChange = (event) => {
    const selectedOccasion = event.target.value;
    setTravelOccasion(event.target.value);
    if (selectedOccasion !== "other") {
      setOtherOccasionText("");
    }
    setOtherOccasion((prevOccasion) => {
      if (!prevOccasion.includes(selectedOccasion)) {
        return [...prevOccasion, selectedOccasion];

      } else {
        return prevOccasion.filter((exp) => exp !== selectedOccasion);
      }
    });

  };

  const handleExperienceChange = (event) => {
    const value = event.target.name;
    if (value === "OtherExperience") {
      setIsOtherExperienceChecked(event.target.checked);
      setOtherExperienceText(experiencesOther);
    } else {
      setExperiences((prevExperiences) => {
        if (!experiences.includes(prevExperiences)) {
          return [...prevExperiences, value];
        }
      });


    }

  };
  const handleAccommodationTypeChange = (event) => {
    const value = event.target.name;
    if (value === "OtherAccommodation") {
      setOtherAccommodation(event.target.checked);
    } else {
      setAccommodationType((prevAccommodation) => {
        if (!prevAccommodation.includes(value)) {
          return [...prevAccommodation, value];

        } else {
          return prevAccommodation.filter((type) => type !== value);

        }
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveFormDataToLocalStorage();
    const selectedExperiences = experiences.includes("OtherExperience")
      ? [...experiences, otherExperienceText]
      : experiences;

    const selectedAccommodations = accommodationType.includes("OtherAccommodation")
      ? [...accommodationType, otherAccommodation]
      : accommodationType;
    const formData = {
      travelOccasion: travelOccasion === "other" ? otherOccasionText : travelOccasion,
      experiences: selectedExperiences,
      accommodationType: selectedAccommodations,
    };
    handleCountNext({ form3: formData });

  };

  const saveFormDataToLocalStorage = () => {
    const formData = {
      travelOccasion,
      experiences,
      otherOccasion,
      otherExperienceText,
      otherAccommodation,
      accommodationType,
      otherOccasionText,
      experiencesOther,
      isOtherExperienceChecked,
    };
    localStorage.setItem("OccassionFormData", JSON.stringify(formData));
  };

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("OccassionFormData"));
    if (storedFormData) {
      setTravelOccasion(storedFormData.travelOccasion || "none");
      setExperiences(storedFormData.experiences || []);
      setOtherOccasion(storedFormData.otherOccasion || []);
      setOtherExperienceText(storedFormData.otherExperienceText || "");
      setOtherAccommodation(storedFormData.otherAccommodation || "");
      setAccommodationType(storedFormData.accommodationType || []);
      setOtherOccasionText(storedFormData.otherOccasionText || "");
      setexperiencesOther(storedFormData.experiencesOther || "");
      setIsOtherExperienceChecked(storedFormData.isOtherExperienceChecked || false);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Box className={styles.subcontent}>
        <Box sx={{ maxWidth: "600px", color: "#494949" }}>
          <h2
            className={styles.Occasionheader}
          >
            Start Planning Your Trip
          </h2>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              maxWidth: "600px",
              color: "#494949",
              padding: "30px 0px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ marginBottom: "20px" }}>
              <Typography
                as="text"
                sx={{
                  textTransform: "uppercase",
                }}
              >
                What's the occasion?
              </Typography>
              <RadioGroup
                aria-label="travel-occasion"
                name="travelOccasion"
                value={travelOccasion}
                onChange={handleTravelOccasionChange}

                className={`${styles.radiogroup} ${styles.customRadioGroup}`}
              >
                <FormControlLabel
                  value="honeymoon"
                  control={<Radio />}
                  label="Honeymoon"
                />
                <FormControlLabel
                  value="anniversary"
                  control={<Radio />}
                  label="Anniversary"
                />
                <FormControlLabel
                  value="familyTime"
                  control={<Radio />}
                  label="Family Time"
                />
                <FormControlLabel
                  value="vocation"
                  control={<Radio />}
                  label="Vacation"
                />
                <FormControlLabel
                  value="milestone"
                  control={<Radio />}
                  label="Milestone"
                />
                <FormControlLabel
                  value="none"
                  control={<Radio />}
                  label="None"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  name="occasion"
                  onChange={handleTravelOccasionChange}
                />
              </RadioGroup>
              {travelOccasion === "other" && (
                <TextField
                  label="Please specify the occasion"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="occasionOther"
                  value={otherOccasionText}
                  onChange={(event) => setOtherOccasionText(event.target.value)}
                  className={styles.experiencesOther}
                />
              )}
            </Box>
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography as="text">
              What kind of experiences do you want to have?
            </Typography>
            <FormGroup style={{ width: "70%", margin: "auto" }}
              onChange={handleExperienceChange}
            >
              <Grid
                container
                spacing={1}
                style={{
                  textAlign: "left",
                  maxWidth: "500px",
                  marginLeft: "5%",
                }}
              >
                <Grid item xs={6} sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Art & Culture"
                    name="Art & Culture"
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Biking"
                    name="Biking"
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Food & Drink"
                    name="Food & Drink"
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Walking"
                    name="Walking"
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Multi-Active"
                    name="Multi-Active"
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Family"
                    name="Family"
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Wellness"
                    name="Wellness"
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Snow-Based"
                    name="Snow-Based"
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Safari"
                    name="Safari"
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="By Sea"
                    name="By Sea"
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Extended Journey"
                    name="Extended Journey"
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Nature & Wildlife"
                    name="Nature & Wildlife"
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Expedition"
                    name="Expedition"
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Other"
                    name="OtherExperience"
                    value="OtherExperience"
                    onChange={handleExperienceChange}
                  />
                </Grid>
              </Grid>
            </FormGroup>
            {isOtherExperienceChecked && (
              <TextField
                label="Please specify the experience you want to have"
                variant="outlined"
                fullWidth
                margin="normal"
                name="experiencesOther"
                value={experiencesOther}
                onChange={(event) => setexperiencesOther(event.target.value)}
                className={styles.experiencesOther}
              />
            )}

          </Box>
          <Box sx={{ marginBottom: "25px" }}>
            <Typography as="text">
              What types of accommodation do you prefer?
            </Typography>
            <FormGroup>
              <div className={styles.MuiFormGroup_root}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="5 Star Hotels"
                  name="5 Star Hotels"
                  onChange={handleAccommodationTypeChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Boutique Hotels"
                  name="Boutique Hotels"
                  onChange={handleAccommodationTypeChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Villa"
                  name="Villa"
                  onChange={handleAccommodationTypeChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Yacht"
                  name="Yacht"
                  onChange={handleAccommodationTypeChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Private Home"
                  name="Private Home"
                  onChange={handleAccommodationTypeChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Other"
                  name="OtherAccommodation"
                  value="OtherAccommodation"
                  onChange={handleAccommodationTypeChange}
                />
              </div>
              {accommodationType.includes("OtherAccommodation") && (
                <TextField
                  label="Please specify the type of accomodations you want to have"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="otherAccommodationText"
                  value={otherOccasionText}
                  onChange={(event) => setAccommodationType(event.target.value)}
                />
              )}
            </FormGroup>
          </Box>

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            marginTop={2}
            spacing={3}
            className={styles.containerbtn}
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
        </Box>
      </Box>
    </form>
  );
}

export default Occassion;
