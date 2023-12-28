// Form.js
import React, { useEffect, useState } from 'react';
import '../../css/tripuserinfo.css'; // Import your CSS file
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTravelForm } from '../../redux/action/travel';
function TripuserInfo({ prevClick, handleCountNext, formData }) {
    const dispatch = useDispatch();
    const initialFormData = JSON.parse(localStorage.getItem("TripuserInfoFormData")) || {
        FirstName: '',
        LastName: '',
        Email: '',
        Phone: '',
        PostalCode: '',
        Nationality: '',
        Country: '',
    };
    const [formInfoData, setformInfoData] = useState(initialFormData)

    const { FirstName, LastName, Email, Phone, PostalCode, Nationality,
        Country } = formInfoData;
    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformInfoData({ ...formInfoData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mappedData = mapFormDataToSchema({
            FirstName,
            LastName,
            Email,
            Phone,
            PostalCode,
            Nationality,
            Country,
            form1: formData.form1,
            form2: formData.form2,
            form3: formData.form3,
        });
        addTravelForm(mappedData)
        handleCountNext();

    };

    useEffect(() => {
        localStorage.setItem("TripuserInfoFormData", JSON.stringify(formInfoData));
    }, [formInfoData]);

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
                <div className="form-control">
                    <label htmlFor="nationality">Nationality <strong>*</strong></label>
                    <input
                        id="nationality"
                        name="Nationality"
                        type="text"
                        className="form-input"
                        value={Nationality}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="country">Country <strong>*</strong></label>
                    <input
                        id="country"
                        name="Country"
                        type="text"
                        className="form-input"
                        value={Country}
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


const mapFormDataToSchema = (formData) => {
    const {
        FirstName,
        LastName,
        Email,
        Phone,
        PostalCode,
        Nationality,
        Country,
        form1,
        form2,
        form3,
    } = formData;

    const travelForm = {
        destination: form1.destination,
        travelDates: form1.travelDates === "I'm flexible with my dates" ? "I know my dates" : form1.travelDates,
        groupSize: form1.groupSize,
        travelWith: {
            solo: form2.travelWith.solo,
            partner: form2.travelWith.partner,
            youngKids: form2.travelWith.youngKids,
            friends: form2.travelWith.friends,
            couples: form2.travelWith.couples,
            multiGenerationalFamily: form2.travelWith.multiGenerationalFamily,
            other: form2.travelWith.other,
        },
        travelDuration: form2.travelDuration,
        budgetPerDay: form2.budgetPerDay,
        travelOccasion: form3.travelOccasion,
        experiences: form3.experiences,
        accommodationType: form3.accommodationType,
    };

    const personalInfo = {
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        phone: Phone,
        postalCode: PostalCode,
        nationality: Nationality,
        country: Country,
    };

    return {
        ...personalInfo,
        travelForms: [travelForm],
    };
};
