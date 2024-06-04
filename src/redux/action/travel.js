import axios from "axios";
import Axios from "../../api";

export const ADD_TRAVEL_FORM = 'ADD_TRAVEL_FORM';
export const DELETE_TRAVEL_FORM = 'DELETE_TRAVEL_FORM';

export const addTravelForm = async (travelFormData) => {
    try {
        const response = await Axios.post("/travel/addtraveldata", travelFormData);
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

export const setTravelPackages = (packages) => ({
    type: 'SET_TRAVEL_PACKAGES',
    payload: packages,
});

export const getItineraryTrip = async () => {
    try {
        const response = await Axios.get("/api/itinerary/trips");
        return response.data;

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
