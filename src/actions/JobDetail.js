import axios from "../helpers/axios.helpers";
import * as actionTypes from "../constants/Actions";
import { JOB_DETAIL_URL } from "../constants/Jobs.constant";

const displayJobDetail = (job_detail) => {
    return {
        type: actionTypes.DISPLAY_JOB_DETAIL,
        job_detail,
    };
};

const setLoadingStatus = (loading) => {
    return {
        type: actionTypes.UPDATE_LOADING_MORE_JOBS_STATUS,
        fetching_more_jobs: loading,
    };
};

export const fetchJobDetail = (id) => {
    return (dispatch) => {
        // dispatch(setLoadingStatus(true));
        axios
            .get(`${JOB_DETAIL_URL}/${id}.json`)
            .then((response) => {
                // console.log(response.data);
                dispatch(displayJobDetail(response.data));
                // dispatch(setLoadingStatus(false));
            })
            .catch((err) => {
                console.log("---------------An Error Occured!---------------");
                console.log(err);
                console.log("-----------------------------------------------");
            });
    };
};
