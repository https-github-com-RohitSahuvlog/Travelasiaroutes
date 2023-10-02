import axios from "axios";


export const addEnquiry = async (Data) => {
    try {
        const response = await axios.post("http://localhost:8000/enquiry/addenquiries", Data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
