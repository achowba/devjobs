import { combineReducers } from "redux";

import JobsReducer from "./Jobs";
import ThemeReducer from "./Theme";
import JobDetailReducer from "./JobDetail";

const rootReducer = combineReducers({
    theme: ThemeReducer,
    jobsState: JobsReducer,
    jobsDetailState: JobDetailReducer,
});

export default rootReducer;
