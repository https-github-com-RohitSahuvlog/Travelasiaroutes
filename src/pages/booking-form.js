import React, { useState } from 'react';
import "../css/booking-form.css"
import { addBookingForm } from '../redux/action/enquiry';

const TravelForm = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        destination: '',
        travelPlans: '',
        title: '',
        firstName: '',
        lastName: '',
        country: '',
        email: '',
        phone: '',
        prompted: '',
        news: false,
    });

    // Handler for form field changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        addBookingForm(formData)
    };

    return (
        <form className="travel_form" onSubmit={handleSubmit}>
            <div className="form_section">
                <div className="form_field form-align is-required">
                    <label htmlFor="destination">Destination</label>
                    <input
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                    />
                    {/* Render destination options */}
                </div>

                <div className="form_field form-align is-required">
                    <label htmlFor="travelPlans">Travel Plans</label>
                    <textarea
                        id="travelPlans"
                        name="travelPlans"
                        value={formData.travelPlans}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
            </div>

            <div className="form_section">
                <div className="form_field form-align">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    {/* Render title options */}
                </div>

                <div className="form_field form-align is-required">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form_field form-align is-required">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form_section">
                <div className="form_field form-align is-required">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form_field form-align is-required">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form_field form-align">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form_section">
                <div className="form_field form-align">
                    <label htmlFor="prompted">Prompted By</label>
                    <input
                        type="text"
                        id="prompted"
                        name="prompted"
                        value={formData.prompted}
                        onChange={handleChange}
                    />
                </div>

                <div className="form_field form-aligncheckbox">
                    <label>
                        <input
                            type="checkbox"
                            name="news"
                            checked={formData.news}
                            onChange={handleChange}
                        />
                        Subscribe to newsletter
                    </label>
                </div>
            </div>

            {/* Submit button */}
            <div className="form-ctrl">
                <button type="submit" className="btn btn--cta js-submit">
                    Send Enquiry
                </button>
            </div>
        </form>
    );
};

export default TravelForm;
