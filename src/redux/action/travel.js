import axios from "axios";

export const ADD_TRAVEL_FORM = 'ADD_TRAVEL_FORM';
export const DELETE_TRAVEL_FORM = 'DELETE_TRAVEL_FORM';

export const addTravelForm = async (travelFormData) => {
    try {
        const response = await axios.post("http://localhost:8000/travel/addtraveldata", travelFormData);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};


// export function deleteTravelForm(travelFormId) {
//     return {
//         type: DELETE_TRAVEL_FORM,
//         payload: travelFormId,
//     };
// }
