// Form.js
import React, { useState } from 'react';
import '../../css/tripuserinfo.css'; // Import your CSS file
import { Grid } from '@mui/material';
function TripuserInfo({ prevClick, handleCountNext, formData }) {
    const [formInfoData, setformInfoData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Phone: '',
        PostalCode: '',
    });
    const { FirstName, LastName, Email, Phone, PostalCode } = formInfoData;
    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformInfoData({ ...formInfoData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...formData, ...formInfoData });
        handleCountNext();
    };
    return (
        <div className="form-container">
            <div className="form-header">
                <h2 className="form-title">Personal Information</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="first-name">First Name <strong>*</strong></label>
                    <input
                        id="first-name"
                        name="FirstName"
                        type="text"
                        className="form-input"
                        value={FirstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="last-name">
                        Last Name <strong>*</strong>
                    </label>
                    <input id="last-name" name="LastName" type="text" className="form-input"
                        value={LastName}
                        onChange={handleInputChange}
                        required
                    />

                </div>

                <div className="form-control">
                    <label htmlFor="Email">
                        Email <strong>*</strong>
                    </label>
                    <input id="Email" name="Email" type="text" className="form-input"
                        value={Email}
                        onChange={handleInputChange}
                        required />

                </div>

                <div className="form-control">
                    <label htmlFor="Phone">
                        Phone Number <strong>*</strong>
                    </label>
                    <input id="Phone" name="Phone" type="text" className="form-input"
                        value={Phone}
                        onChange={handleInputChange}
                        required
                    />

                </div>

                <div className="form-control">
                    <label htmlFor="PostalCode">
                        Zip/Postal Code <strong>*</strong>
                    </label>
                    <input id="PostalCode" name="PostalCode" type="text" className="form-input"
                        value={PostalCode}
                        onChange={handleInputChange}
                        required
                    />

                </div>

                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    marginTop={2}
                    spacing={3}
                    className={"containerbtn"}
                >
                    <button
                        variant="contained"
                        color="secondary"
                        onClick={prevClick}
                        className="buttonform"
                    >
                        Previous
                    </button>
                    <button type="submit" variant="contained" color="primary" className={`buttonsubmitform`}>
                        Submit
                    </button>
                </Grid>
            </form>
        </div>
    );
}

export default TripuserInfo;
