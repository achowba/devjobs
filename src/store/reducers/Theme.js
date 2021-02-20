import * as actionTypes from "../../constants/Actions";
import { getTheme, setTheme } from "../../helpers/theme.helpers";

const initialState = {
    theme: getTheme(),
};

const ThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_THEME:
            const toggledTheme = state.theme === "light" ? "dark" : "light";
            setTheme(toggledTheme);

            return {
                ...state,
                theme: toggledTheme,
            };
        default:
            return state;
    }
};

export default ThemeReducer;
