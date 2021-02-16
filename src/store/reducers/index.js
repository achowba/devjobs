import { combineReducers } from 'redux';

import { themeReducer } from './theme.reducer';
import { jobsReducer } from './jobs.reducer';

const rootReducer = combineReducers({
    theme: themeReducer, // redux add a level of nesting to the global state object, so state.counter becomes state.ctr.counter
    jobs: jobsReducer,
});

export default rootReducer;
