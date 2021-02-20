import * as actionTypes from "../../constants/Actions";

const initialState = {
    error: false,
    job_detail: null,
};

const JobDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISPLAY_JOB_DETAIL:
            return {
                ...state,
                job_detail: action.job_detail,
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

export default JobDetailReducer;
