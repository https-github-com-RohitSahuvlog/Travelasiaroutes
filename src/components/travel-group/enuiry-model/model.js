import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Grid, TextField, Button } from '@mui/material';

import { toast } from 'react-toastify';
import { addFormEnquiry } from '../../../redux/action/enquiry';

const Modal = ({ open, handleClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        nationality: '',
        age: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        const { firstName, lastName, email, contactNumber, nationality, age, message } = formData;

        if (!firstName || !lastName || !email || !contactNumber || !nationality || !age || !message) {
            toast.error('All fields are required', {
                position: 'top-right',
                autoClose: 3000,
            });
            return;
        }

        try {
            await addFormEnquiry(formData);
            handleClose();
            toast.success('Form submitted successfully', {
                position: 'top-right',
                autoClose: 3000,
            });
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                contactNumber: '',
                nationality: '',
                age: '',
                message: '',
            })
        } catch (error) {
            console.error('Error:', error);
            toast.error('Form submission failed', {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md">
            <DialogTitle>Plan Your Adventure</DialogTitle>
            <DialogContent>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                name="firstName"
                                label="First Name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="lastName"
                                label="Last Name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="email"
                                label="Email"
                                type='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="contactNumber"
                                label="Contact Number"
                                type="number"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="nationality"
                                label="Nationality"
                                value={formData.nationality}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="age"
                                label="Age"
                                type='number'
                                value={formData.age}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="message"
                                label="Your Message"
                                value={formData.message}
                                onChange={handleInputChange}
                                fullWidth
                                multiline
                                rows={4}
                                required
                            />
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                <Button variant="contained" onClick={handleClose}>
                    Close
                </Button>
            </div>
        </Dialog>
    );
};

export default Modal;