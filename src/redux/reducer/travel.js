// reducers.js

import { ADD_TRAVEL_FORM, DELETE_TRAVEL_FORM } from '../action/travel';

const initialState = {
    travelForms: [],
};

function travelReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TRAVEL_FORM:
            return {
                ...state,
                travelForms: [...state.travelForms, action.payload],
            };
        case DELETE_TRAVEL_FORM:
            return {
                ...state,
                travelForms: state.travelForms.filter(
                    (form) => form._id !== action.payload
                ),
            };
        default:
            return state;
    }
}

export default travelReducer;
