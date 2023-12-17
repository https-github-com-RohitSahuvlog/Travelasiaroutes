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
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const destinations = [
  // Countries in Asia
  { value: "azerbaijan", label: "Azerbaijan", link: "/azerbaijan" },
  { value: "bangladesh", label: "Bangladesh", link: "/bangladesh" },
  { value: "bhutan", label: "Bhutan", link: "/bhutan" },
  { value: "brunei", label: "Brunei", link: "/brunei" },
  { value: "cambodia", label: "Cambodia", link: "/cambodia" },
  { value: "china", label: "China", link: "/china" },
  { value: "japan", label: "Japan", link: "/japan" },
  { value: "india", label: "India", link: "/india" },
  { value: "indonesia", label: "Indonesia", link: "/indonesia" },
  { value: "kazakhstan", label: "Kazakhstan", link: "/kazakhstan" },
  { value: "kyrgyzstan", label: "Kyrgyzstan", link: "/kyrgyzstan" },
  { value: "laos", label: "Laos", link: "/laos" },
  { value: "malaysia", label: "Malaysia", link: "/malaysia" },
  { value: "maldives", label: "Maldives", link: "/maldives" },
  { value: "mongolia", label: "Mongolia", link: "/mongolia" },
  { value: "myanmar", label: "Myanmar (Burma)", link: "/myanmar" },
  { value: "nepal", label: "Nepal", link: "/nepal" },
  { value: "pakistan", label: "Pakistan", link: "/pakistan" },
  { value: "philippines", label: "Philippines", link: "/philippines" },
  { value: "singapore", label: "Singapore", link: "/singapore" },
  { value: "south-korea", label: "South Korea", link: "/south-korea" },
  { value: "sri-lanka", label: "Sri Lanka", link: "/sri-lanka" },
  { value: "taiwan", label: "Taiwan", link: "/taiwan" },
  { value: "tajikistan", label: "Tajikistan", link: "/tajikistan" },
  { value: "thailand", label: "Thailand", link: "/thailand" },
  { value: "tibet", label: "Tibet", link: "/tibet" },
  { value: "turkmenistan", label: "Turkmenistan", link: "/turkmenistan" },
  { value: "uzbekistan", label: "Uzbekistan", link: "/uzbekistan" },
  { value: "vietnam", label: "Vietnam", link: "/vietnam" },

  // Countries in the Middle East
  { value: "egypt", label: "Egypt", link: "/egypt" },
  { value: "iran", label: "Iran", link: "/iran" },
  { value: "israel", label: "Israel", link: "/israel" },
  { value: "iraq", label: "Iraq", link: "/iraq" },
  { value: "jordan", label: "Jordan", link: "/jordan" },
  { value: "lebanon", label: "Lebanon", link: "/lebanon" },
  { value: "oman", label: "Oman", link: "/oman" },
  { value: "palestine", label: "Palestine", link: "/palestine" },
  { value: "saudi-arabia", label: "Saudi Arabia", link: "/saudi-arabia" },
  { value: "uae", label: "United Arab Emirates", link: "/uae" },
  { value: "yemen", label: "Yemen", link: "/yemen" },

  // Countries in Africa
  { value: "algeria", label: "Algeria", link: "/algeria" },
  { value: "botswana", label: "Botswana", link: "/botswana" },
  { value: "cameroon", label: "Cameroon", link: "/cameroon" },
  { value: "chad", label: "Chad", link: "/chad" },
  { value: "congo", label: "Congo", link: "/congo" },
  { value: "djibouti", label: "Djibouti", link: "/djibouti" },
  { value: "eritrea", label: "Eritrea", link: "/eritrea" },
  { value: "ethiopia", label: "Ethiopia", link: "/ethiopia" },
  { value: "kenya", label: "Kenya", link: "/kenya" },
  { value: "madagascar", label: "Madagascar", link: "/madagascar" },
  { value: "malawi", label: "Malawi", link: "/malawi" },
  { value: "mali", label: "Mali", link: "/mali" },
  { value: "mauritius", label: "Mauritius", link: "/mauritius" },
  { value: "morocco", label: "Morocco", link: "/morocco" },
  { value: "namibia", label: "Namibia", link: "/namibia" },
  { value: "rwanda", label: "Rwanda", link: "/rwanda" },
  { value: "seychelles", label: "Seychelles", link: "/seychelles" },
  { value: "somalia", label: "Somalia", link: "/somalia" },
  { value: "south-sudan", label: "South Sudan", link: "/south-sudan" },
  { value: "sudan", label: "Sudan", link: "/sudan" },
  { value: "tanzania", label: "Tanzania", link: "/tanzania" },
  { value: "tunisia", label: "Tunisia", link: "/tunisia" },
  { value: "uganda", label: "Uganda", link: "/uganda" }
];



const BespokeForm1 = ({ setCurrentStep1, setFormData1, handleCountNext }) => {
  const [BespokeFormData1, setBespokeFormData1] = useState({
    destination: "",
    travelDates: "",
    groupSize: "",
    startDate: null, // Add start date to state
    endDate: null,
  });
  const [showDatePickers, setShowDatePickers] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBespokeFormData1({
      ...BespokeFormData1,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCountNext({ form1: BespokeFormData1 });
  };

  const handleDateChange = (dateType, date) => {
    let formattedDate;
    if (dayjs.isDayjs(date)) {
      formattedDate = date.format("MM/DD/YYYY");
    } else {
      formattedDate = dayjs(date).format("MM/DD/YYYY");
    }
    setBespokeFormData1({
      ...BespokeFormData1,
      [dateType]: formattedDate,
    });
  };

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    const optionValue = event.target.value;
    console.log(`Checking ${optionValue}`, event.target.checked);

    setShowDatePickers(isChecked);

    // if (!isChecked && optionValue === "flexible") {
    //   setBespokeFormData1({
    //     ...BespokeFormData1,
    //     startDate: null,
    //     endDate: null,
    //   });
    // }
  };

  const handleDestinationChange = (event) => {
    const selectedDestination = event.target.value;
    setBespokeFormData1({
      ...BespokeFormData1,
      destination: selectedDestination,
    });
  }
  console.log("BespokeFormData1", BespokeFormData1)

  return (
    <form onSubmit={handleSubmit} sx={{ justifyContent: "center" }}>
      <Paper elevation={3} sx={{ padding: 3 }} className="bespoke-form-content">
        <h2
          className={styles.tripDetailsheader}
        >
          Start Planning Your Trip
        </h2>

        <Typography align="center" gutterBottom maxWidth={"600px"}>
          Please provide us with the below information, and a MidAsia Routes Travel
          Advisor will be in touch shortly to confirm your trip details.
        </Typography>

        <FormControl fullWidth sx={{ maxWidth: "50%", margin: 2 }}>
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
            sx={{ justifyContent: "center" }}
          >
            <FormGroup fullWidth sx={{ maxWidth: "100%", marginBottom: 2 }}>
              <FormControlLabel
                value="I know my dates"
                label="I know my dates"
                control={<Radio onChange={handleCheckboxChange} />}
              />
              {showDatePickers && (<LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    label="Start Date"
                    value={BespokeFormData1.startDate}
                    format="DD/MM/YYYY"
                    onChange={(date) => handleDateChange("startDate", date)}
                  />
                </DemoContainer>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    label="End Date"
                    value={BespokeFormData1.endDate}
                    format="DD/MM/YYYY"
                    onChange={(date) => handleDateChange("endDate", date)}
                  />
                </DemoContainer>
              </LocalizationProvider>)
              }
            </FormGroup>
            <FormControlLabel
              value="I'm flexible with my dates"
              control={<Radio onChange={() => setShowDatePickers(false)} />}
              label="I'm flexible with my dates"
            />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth sx={{ maxWidth: "50%", marginBottom: 2 }}>

          <TextField
            id="group-size"
            name="groupSize"
            label="How many people are you travelling with?"
            type="number"
            value={BespokeFormData1.groupSize}
            onChange={handleInputChange}
          />
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
