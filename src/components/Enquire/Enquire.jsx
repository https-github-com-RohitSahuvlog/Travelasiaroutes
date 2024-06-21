import "./equires.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { InputLabel, TextField } from "@mui/material";
import { addEnquiry } from "../../redux/action/enquiry";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "azerbaijan", "bangladesh", "bhutan", "brunei", "cambodia", "china", "japan", "india", "indonesia",
  "kazakhstan", "kyrgyzstan", "laos", "malaysia", "maldives", "mongolia", "myanmar", "nepal",
  "pakistan", "philippines", "singapore", "south-korea", "sri-lanka", "taiwan", "tajikistan",
  "thailand", "tibet", "turkmenistan", "uzbekistan", "vietnam", "egypt", "iran", "israel",
  "iraq", "jordan", "lebanon", "oman", "palestine", "saudi-arabia", "uae", "yemen", "algeria",
  "botswana", "cameroon", "chad", "congo", "djibouti", "eritrea", "ethiopia", "kenya",
  "madagascar", "malawi", "mali", "mauritius", "morocco", "namibia", "rwanda", "seychelles",
  "somalia", "south-sudan", "sudan", "tanzania", "tunisia", "uganda"
];


const countryNames = [
  'Afghanistan',
  'Aland Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Congo, Democratic Republic of the Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote DIvoire',
  'Croatia',
  'Cuba',
  'Curacao',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands (Malvinas)',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and Mcdonald Islands',
  'Holy See (Vatican City State)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran, Islamic Republic of',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, Democratic People\'s Republic of',
  'Korea, Republic of',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Lao People\'s Democratic Republic',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libyan Arab Jamahiriya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Macedonia, the Former Yugoslav Republic of',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia, Federated States of',
  'Moldova, Republic of',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestinian Territory, Occupied',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'Saint Barthelemy',
  'Saint Helena',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan, Province of China',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'United States Minor Outlying Islands',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Viet Nam',
  'Virgin Islands, British',
  'Virgin Islands, U.s.',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];
const travelAdviser = [
  "Virtuoso",
  "Signature",
  "Ensemble",
  "Srandipians",
  "American Express",
  "Travel Leaders",
  "Internova",
  "Smartflyer"
];

const menuItems = travelAdviser.map((label, index) => (
  <MenuItem key={index} value={label}>
    {label}
  </MenuItem>
));


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Enquire = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    isAgencyCheck: false,
    advisorName: "",
    agencyName: "",
    email: "",
    country: "",
    phone: "",
    destinations: [],
    startMonth: "",
    startYear: "",
    tripLength: "",
    budget: "",
    travelers: "",
    enquiryDetails: "",
    subscribe: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAgencyCheck, setIsAgencyCheck] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDestinationsChange = (event) => {
    const selectedDestinations = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      destinations: selectedDestinations,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      addEnquiry(formData)
      setIsSubmitted(true);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    if (!data.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }

    if (!data.country) {
      errors.country = "Home Country is required";
    }

    // You can add more validation rules here

    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleTravelChecked = (e) => {
    setIsAgencyCheck(e.target.checked);
  };


  return (
    <div className="enquire_container">
      <p>
        Please fill out the information below or speak to your travel advisor.
        Required fields are marked with an asterisk (*).
      </p>
      <form action="" onSubmit={handleSubmit} className="enquire_form">
        <div className="enquire_form_left">
          <div>
            <label>First Name *</label>
            <input type="text"
              className="inputenquire"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {formErrors.firstName && (
              <div className="error">{formErrors.firstName}</div>
            )}
          </div>
          <div>
            <label>Last Name *</label>
            <input type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {formErrors.lastName && (
              <div className="error">{formErrors.lastName}</div>
            )}
          </div>

          <div className="enquire_agency_checkbox">
            {" "}
            <label>
              <input
                type="checkbox"
                checked={isAgencyCheck}
                onChange={handleTravelChecked}

              /> I am a
              travel advisor
            </label>
            <br />
          </div>
          {
            isAgencyCheck &&
            <span
              className={"enquire_agency_container"}
            >
              <input type="text"
                name="agencyName"
                checked={formData.agencyName}
                onChange={handleChange}
                placeholder="Agency Name*"
                required />
              <FormControl
                sx={{
                  m: 1,
                  minWidth: { xl: 80, lg: 80, md: 80, sm: "30%", xs: "30%" },
                }}
                size="small">
                <InputLabel
                  sx={{
                    " &.MuiInputLabel-shrink": {
                      color: "#3C3D3D",
                    },
                  }}>
                  Type
                </InputLabel>
                <Select
                  sx={{
                    bgcolor: "#f1f0f3",
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  label="Travel Advisor"
                  name="advisorName"
                  value={formData.advisorName}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {menuItems}

                </Select>
              </FormControl>
            </span>
          }


          <div>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && (
              <div className="error">{formErrors.email}</div>
            )}
          </div>
          <div>
            <label>Home Country *</label>

            <FormControl sx={{ m: 1, minWidth: 260, mr: "-1px" }} size="small">
              <InputLabel
                id="demo-simple-select-autowidth-label"
                sx={{
                  " &.MuiInputLabel-shrink": {
                    color: "#3C3D3D",
                  },
                }}>
                Your Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                label="Your Country"
                sx={{
                  bgcolor: "#f1f0f3",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                }}
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                error={!!formErrors.country}
              >
                <MenuItem value="">
                  <em>Your Country</em>
                </MenuItem>
                {countryNames.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, formData.country, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}

              </Select>
              {formErrors.country && (
                <div className="error">{formErrors.country}</div>
              )}
            </FormControl>
          </div>
          <div className="enquire_phone_container">
            <label>Phone *</label>
            <div>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required

              />
              {formErrors.phone && (
                <div className="error">{formErrors.phone}</div>
              )}
            </div>
          </div>
        </div>
        <div className="enquire_form_right">
          <div>
            <label>Desired Destinations</label>
            <FormControl
              sx={{
                m: 1,
                width: { xl: 300, lg: 300, md: 300, sm: "100%", xs: "100%" },
              }}>
              <InputLabel
                id="demo-multiple-chip-label"
                size="small"
                sx={{
                  " &.MuiInputLabel-shrink": {
                    color: "#3C3D3D",
                  },
                }}>
                Select Countries
              </InputLabel>
              <Select
                sx={{
                  bgcolor: "#f1f0f3",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                }}
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                size="small"
                multiple
                input={
                  <OutlinedInput
                    id="select-multiple-chip"
                    label="Select Countries"
                    size="small"
                  />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} size="small" />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
                name="destinations"
                value={formData.destinations}
                onChange={handleDestinationsChange}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, formData.destinations, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <label>Estimated Start Date</label>
            <div className="months_year_container">
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel
                  sx={{
                    " &.MuiInputLabel-shrink": {
                      color: "#3C3D3D",
                    },
                  }}>
                  Months
                </InputLabel>
                <Select
                  sx={{
                    bgcolor: "#f1f0f3",
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  label="Months"
                  name="startMonth"
                  value={formData.startMonth}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Months</em>
                  </MenuItem>
                  <MenuItem value="January">January</MenuItem>
                  <MenuItem value="February">February</MenuItem>
                  <MenuItem value="March">March</MenuItem>
                  <MenuItem value="April">April</MenuItem>
                  <MenuItem value="May">May</MenuItem>
                  <MenuItem value="June">June</MenuItem>
                  <MenuItem value="July">July</MenuItem>
                  <MenuItem value="August">August</MenuItem>
                  <MenuItem value="September">September</MenuItem>
                  <MenuItem value="October">October</MenuItem>
                  <MenuItem value="November">November</MenuItem>
                  <MenuItem value="December">December</MenuItem>

                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel
                  id="demo-simple-select-autowidth-label"
                  sx={{
                    " &.MuiInputLabel-shrink": {
                      color: "#3C3D3D",
                    },
                  }}>
                  Year
                </InputLabel>
                <Select
                  sx={{
                    bgcolor: "#f1f0f3",
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  label="Year"
                  type="number"
                  name="startYear"
                  value={formData.startYear}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Year</em>
                  </MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2024">2024</MenuItem>
                  <MenuItem value="2025">2025</MenuItem>

                </Select>
              </FormControl>
            </div>
          </div>
          <div>
            <label>Trip Length</label>
            <input
              type="text"
              name="tripLength"
              value={formData.tripLength}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Total Budget for All Travellers *</label>
            <FormControl sx={{ m: 1, minWidth: 260, mr: "-1px" }} size="small">
              <InputLabel
                id="demo-simple-select-autowidth-label"
                sx={{
                  " &.MuiInputLabel-shrink": {
                    color: "#3C3D3D",
                  },
                }}>
                All Prices
              </InputLabel>
              <Select
                sx={{
                  bgcolor: "#f1f0f3",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                }}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>All Prices are in USD</em>
                </MenuItem>
                <MenuItem value="10,000-20,000">$10,000-$20,000</MenuItem>
                <MenuItem value="20,000-30,000">$20,000-$30,000</MenuItem>
                <MenuItem value="30,000-50,000">$30,000-$50,000</MenuItem>
                <MenuItem value="50,000-75,000">$50,000-$75,000</MenuItem>
                <MenuItem value="75,000-100,000">$75,000-$100,000</MenuItem>
                <MenuItem value="100,000-150,000">$100,000-$150,000</MenuItem>
                <MenuItem value="greater-than-150,000">Greater than $150,000</MenuItem>

              </Select>
            </FormControl>
          </div>
          <div>
            <label>Number of Travellers</label>
            <input
              type="number"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Enquiry Details</label>
            <textarea
              cols="20"
              rows="6"
              placeholder="Tell us about your interests, passions, needs, and any other details relevant to your trip."
              name="enquiryDetails"
              value={formData.enquiryDetails}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "3px",
              }}>
              <input type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
              /> Subscribe to newsletter
            </label>
            <button type="submit" className="enquire_right_btn">ENQUIRE</button>
          </div>
        </div>
      </form>
      {isSubmitted && (
        <div className="success-message">
          Thank you for your inquiry! We will get in touch with you shortly.
        </div>
      )}
    </div>
  );
};

export default Enquire;
