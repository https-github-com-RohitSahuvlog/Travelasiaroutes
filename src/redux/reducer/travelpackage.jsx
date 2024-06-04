const initialState = {
    travelPackages: [],
    itineraryTripData: []
};

export const travelPackagesReducer = (state = initialState, action) => {
    console.log("TravelPackagesReducer", action.payload)
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