import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { addBookingForm } from '../redux/action/enquiry';
import img from "../../src/images/background.jpg"

const Box = styled.div`
  width: 100%;
  background-image: url(${img});
   background-size: cover;
  background-position: center;

`;

const Form = styled.form`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 10rem auto;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  transform: scale(1.2);
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const TravelForm = () => {
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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBookingForm(formData);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box>
            <Form onSubmit={handleSubmit}>
                <FormSection>
                    <FormField>
                        <Label htmlFor="destination">Destination</Label>
                        <Input
                            id="destination"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                        />
                    </FormField>

                    <FormField>
                        <Label htmlFor="travelPlans">Travel Plans</Label>
                        <TextArea
                            id="travelPlans"
                            name="travelPlans"
                            value={formData.travelPlans}
                            onChange={handleChange}
                            required
                        ></TextArea>
                    </FormField>
                </FormSection>

                <FormSection>
                    <FormField>
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </FormField>

                    <FormField>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </FormField>

                    <FormField>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </FormField>
                </FormSection>

                <FormSection>
                    <FormField>
                        <Label htmlFor="country">Country</Label>
                        <Input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        />
                    </FormField>

                    <FormField>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </FormField>

                    <FormField>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </FormField>
                </FormSection>

                <FormSection>
                    <FormField>
                        <Label htmlFor="prompted">Prompted By</Label>
                        <Input
                            type="text"
                            id="prompted"
                            name="prompted"
                            value={formData.prompted}
                            onChange={handleChange}
                        />
                    </FormField>

                    <CheckboxLabel>
                        <Checkbox
                            type="checkbox"
                            name="news"
                            checked={formData.news}
                            onChange={handleChange}
                        />
                        Subscribe to newsletter
                    </CheckboxLabel>
                </FormSection>

                <Button type="submit">Send Enquiry</Button>
            </Form>
        </Box>
    );
};

export default TravelForm;
