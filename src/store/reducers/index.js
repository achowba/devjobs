import { combineReducers } from 'redux';

import { jobsReducer } from './jobs.reducer';
import { themeReducer } from './theme.reducer';

const rootReducer = combineReducers({
    theme: themeReducer, // redux add a level of nesting to the global state object, so state.counter becomes state.ctr.counter
    jobsState: jobsReducer,
});

export default rootReducer;
