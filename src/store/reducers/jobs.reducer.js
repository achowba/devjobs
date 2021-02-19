import * as actionTypes from "../../constants/actions";

const initialState = {
    jobs: null,
    error: false,
    next_page: 2,
    job_detail: null,
    fetching_more_jobs: false,
};

export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISPLAY_JOBS:
            return {
                ...state,
                jobs: action.jobs,
            };
        case actionTypes.DISPLAY_MORE_JOBS:
            return {
                ...state,
                jobs: state.jobs.concat(action.jobs),
                next_page: action.next_page,
            };
        case actionTypes.UPDATE_LOADING_MORE_JOBS_STATUS:
            return {
                ...state,
                fetching_more_jobs: action.fetching_more_jobs,
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
