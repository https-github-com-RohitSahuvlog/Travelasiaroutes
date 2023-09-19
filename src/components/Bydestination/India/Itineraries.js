// import React from "react";
// import styles from "../sigin/Styles";
import styles from "./india.module.css";

import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

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
    'Amazing Landscapes',
    'Architecture',
    'Beaches',
    'Glamping',
    'Heritage',
    'Luxury Cruises',
    'Off the Grid',
    'Romance',
    'Spirituality',
    'Sports',
    'Tribal',
    'Unesco',
    'Wellbeing',
    'Wildlife'
];

const names2 = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    "December",
];
function getStyles(name, personName1, theme) {
    return {
        fontWeight:
            personName1.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
function getStyles2(name2, personName2, theme) {
    return {
        fontWeight:
            personName2.indexOf(name2) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
const Itineraries = ({ itineryheading, listing }) => {
    console.log("item", itineryheading);
    const theme = useTheme();
    const [personName1, setPersonName1] = React.useState([]);
    const [personName2, setPersonName2] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName1(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );

    };

    const handleChange2 = (event) => {
        const {
            target: { value },
        } = event;

        setPersonName2(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <>
            <div>
                <div className={styles.Itineraties}>
                    <div className={styles.row}>
                        <div className={styles["col-12"]}>

                            <h3 className={styles.itineraryh3}>{itineryheading}</h3>
                        </div>
                        <div className={styles["col-12"]}>
                            <div>
                                <div className={styles.row1}>
                                    {/* <div className={styles["col-12 col-md-6 "]}> */}
                                    <div className={styles.interest}>
                                        <FormControl sx={{ m: 0, width: '100%', borderRadius: "5px" }}>
                                            <InputLabel id="demo-multiple-chip-label">By Interest</InputLabel>
                                            <Select
                                                labelId="demo-multiple-chip-label"
                                                id="demo-multiple-chip"
                                                multiple
                                                value={personName1}
                                                onChange={handleChange}
                                                input={<OutlinedInput id="select-multiple-chip" label="By Interest" />}
                                                renderValue={(selected) => (
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                        {selected.map((value) => (
                                                            <Chip key={value} label={value} />
                                                        ))}
                                                    </Box>
                                                )}
                                                MenuProps={MenuProps}
                                            >
                                                {names.map((name) => (
                                                    <MenuItem
                                                        key={name}
                                                        value={name}
                                                        style={getStyles(name, personName1, theme)}
                                                    >
                                                        {name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    {/* </div> */}
                                    {/* <div className={styles["col-12 col-md-6"]}> */}
                                    <div className={styles.interest}>
                                        <FormControl sx={{
                                            m: 0, width: '100%', borderRadius: "2px",
                                            '&:hover': {
                                                borderColor: 'black !important', // Change the border color to black on hover
                                            },
                                        }}>
                                            <InputLabel id="demo-multiple-chip-label"
                                                sx={{ textAlign: 'center' }}>By Date</InputLabel>
                                            <Select

                                                labelId="demo-multiple-chip-label"
                                                id="demo-multiple-chip"
                                                multiple
                                                value={personName2}
                                                onChange={handleChange2}
                                                input={<OutlinedInput id="select-multiple-chip" label="By Date" />}
                                                renderValue={(selected) => (
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, height: "30px" }} >
                                                        {selected.map((value) => (
                                                            <Chip key={value} label={value} />
                                                        ))}
                                                    </Box>
                                                )}
                                                MenuProps={MenuProps}

                                            >
                                                {names2.map((name2) => (
                                                    <MenuItem
                                                        key={name2}
                                                        value={name2}
                                                        style={getStyles2(name2, personName2, theme)}
                                                    >
                                                        {name2}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>

                                    {/* <select className={styles.filter_dropdown}>
                                            <option value> By Interest</option>
                                        </select> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["warp-t mb-4"]}>
                        <div id="show_itin_area">
                            <div className={styles["nav-md-12"]}>
                                <div className={styles.row2}>
                                    <div className={styles["col-3 nav-col cursor:pointer"]}>
                                        <a className={styles['active']}>ALL ITNERARIES</a>
                                    </div>
                                    {/* <div className={styles["col-3 nav-col cursor:pointer"]}>
                                        <a className={styles['active']}>MULTI COUNTRY</a>
                                    </div>
                                    <div className={styles["col-3 nav-col cursor:pointer"]}>
                                        <a className={styles['active']}>ULTRA LUXE</a>
                                    </div>
                                    <div className={styles["col-3 nav-col cursor:pointer"]}>
                                        <a className={styles['active']}>INTREPID</a>
                                    </div> */}
                                </div>
                            </div>
                            <div className={`${styles.stab_itin_area} ${styles["display:block"]} `}>

                                {listing?.map((ele) => {
                                    return <div className={`${styles["row mb-12 md:mb-17"]} ${styles.rowBox}`}>
                                        <div className={`${styles["col-12 col-sm-3 col-md-4 mb-6 md:mb-0"]} ${styles.rowfis}`}>
                                            <a>
                                                <img className={styles.images} src={ele.image} alt="" width="375" height="250" />
                                            </a>
                                        </div>
                                        <div className={`${styles["col-12 col-sm-3 col-md-4 mb-6 md:mb-0"]} ${styles.rowMid}`}>
                                            <h2 className={styles.heading}>
                                                {ele.heading}
                                            </h2>
                                            <div className={styles["text-small my-6 hidden md:block"]}>
                                                <p className={styles.ptext}>
                                                    {ele.text}
                                                </p>
                                            </div>
                                            <div className={styles["font-heading-book text-xsmall hidden md:block"]}>
                                                <div className={styles.ptext}>
                                                    <span className={styles.text_gold}> DESTINATION </span>
                                                    {ele.destination}
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`${styles.rowdiv3} ${styles["col-12 col-sm-3 col-md-4 mb-6 md:mb-0"]}`}>

                                            <div className={`${styles.rowdiv}`}>
                                                <dl className={`${styles["col-6 col-sm-12"]}`}>
                                                    <dt className={`${styles["h4 text-gold mb-1"]} ${styles.text_gold}`}>DURATION</dt>
                                                    <dd className={styles["text-small"]}>{ele.duration}</dd>
                                                </dl>
                                                <dl className={styles["col-6 col-sm-12"]}>
                                                    <dt className={`${styles["h4 text-gold mb-1"]} ${styles.text_gold}`}>PRICE PER PERSON</dt>
                                                    <dd className="text-small">{
                                                        ele.priceperperson
                                                    }</dd>
                                                </dl>
                                            </div>
                                            <div className="w-full h-full flex justify-center items-center text-center">
                                                <div className={`${styles["btn btn-sm btn-outline-gold mt-1"]} ${styles.bttn}`}>SEE ITINERARY</div>
                                            </div>
                                        </div>
                                    </div>
                                })
                                }

                            </div>
                        </div>
                    </div>
                    <div >
                        <input type="hidden" name="txttotalitin" value="33" />
                        <div className={styles.nav_bar}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Itineraries;