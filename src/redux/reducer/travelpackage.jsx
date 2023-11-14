const initialState = {
    travelPackages: [],
};

export const travelPackagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRAVEL_PACKAGES':
            return {
                ...state,
                travelPackages: action.payload,
            };
        default:
            return state;
    }
};