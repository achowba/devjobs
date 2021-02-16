import * as actionTypes from "../../constants/actions";

const initialState = {
    jobs: null,
    error: false,
};

export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_JOBS:
            return {
                ...state,
                jobs: action.jobs,
            };
        case actionTypes.FETCH_JOBS_FAILED:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};
