const initialState = {
    travelPackages: [],
    itineraryTripData: []
};

export const travelPackagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRAVEL_PACKAGES':
            return {
                ...state,
                travelPackages: action.payload,
            };
        case 'SET_ITINERARY_TRIP':
            return {
                ...state,
                itineraryTripData: action.payload,
            };
        default:
            return state;
    }
};