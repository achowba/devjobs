import axios from "../helpers/axios.helpers";
import * as actionTypes from "../constants/actions";

export const setJobs = (jobs) => {
    return {
        type: actionTypes.SET_JOBS,
        jobs,
    };
};

export const fetchJobs = () => {
    return dispatch => {
        axios
            .get(`/`, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then((response) => {
                dispatch(setJobs(response.data));
            })
            .catch((err) => {
                console.log("---------------An Error Occured!---------------");
                console.log(err);
                console.log("-----------------------------------------------");
            });
    };
};
