import axios from "../helpers/axios.helpers";
import * as actionTypes from "../constants/actions";
import { JOBS_URL, JOB_DETAIL_URL } from "../constants/jobs";

const displayJobs = (jobs) => {
    return {
        type: actionTypes.DISPLAY_JOBS,
        jobs,
    };
};

const displayJobDetail = (job) => {
    return {
        type: actionTypes.DISPLAY_JOB_DETAIL,
        job,
    };
};

const displayMoreJobs = (jobs, next_page) => {
    return {
        type: actionTypes.DISPLAY_MORE_JOBS,
        jobs,
        next_page,
    };
};

const setLoadingStatus = (loading) => {
    return {
        type: actionTypes.UPDATE_LOADING_MORE_JOBS_STATUS,
        fetching_more_jobs: loading,
    };
};

export const fetchJobs = () => {
    return (dispatch) => {
        axios
            .get(`${JOBS_URL}/?page=0`)
            .then((response) => {
                dispatch(displayJobs(response.data));
            })
            .catch((err) => {
                console.log("---------------An Error Occured!---------------");
                console.log(err);
                console.log("-----------------------------------------------");
            });
    };
};

export const loadMoreJobs = (page) => {
    return (dispatch) => {
        dispatch(setLoadingStatus(true));
        axios
            .get(`${JOBS_URL}/?page=${page}`)
            .then((response) => {
                dispatch(displayMoreJobs(response.data, page + 1));
                dispatch(setLoadingStatus(false));
            })
            .catch((err) => {
                console.log("---------------An Error Occured!---------------");
                console.log(err);
                console.log("-----------------------------------------------");
            });
    };
};

export const fetchJobDetail = (id) => {
    return (dispatch) => {
        // dispatch(setLoadingStatus(true));
        axios
            .get(`${JOB_DETAIL_URL}/${id}.json`)
            .then((response) => {
                console.log(response.data);
                // dispatch(displayJobDetail(response.data));
                // dispatch(setLoadingStatus(false));
            })
            .catch((err) => {
                console.log("---------------An Error Occured!---------------");
                console.log(err);
                console.log("-----------------------------------------------");
            });
    };
};
