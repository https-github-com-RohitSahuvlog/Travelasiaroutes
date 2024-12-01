import Axios from "../../api";


export const addEnquiry = async (Data) => {
    try {
        const response = await Axios.post("/enquiry/addenquiries", Data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const addFormEnquiry = async (Data) => {
    try {
        const response = await Axios.post("/api/enquiryform/submit", Data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const addBookingForm = async (Data) => {
    try {
        const response = await Axios.post("/enquiry/enquiries/booking", Data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
