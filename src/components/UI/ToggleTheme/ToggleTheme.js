import { connect } from "react-redux";
import React, { Component } from "react";

import {
    ThemeIcon,
    ThemeWrapper,
    ToggleButton,
    ToggleWrapper,
} from "./ToggleTheme.styles";
import * as actionTypes from '../../../constants/Actions';
import darkThemeIcon from "../../../assets/img/desktop/icon-moon.svg";
import lightThemeIcon from "../../../assets/img/desktop/icon-sun.svg";

class ToggleTheme extends Component {
    render() {
        return (
            <ThemeWrapper>
                <ThemeIcon src={lightThemeIcon} alt="Light Theme Icon" />
                <ToggleWrapper onClick={this.props.onThemeToggled}>
                    <ToggleButton isDark={this.props.theme === "light"} />
                </ToggleWrapper>
                <ThemeIcon src={darkThemeIcon} alt="Dark Theme Icon" />
            </ThemeWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.theme,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onThemeToggled: () => dispatch({ type: actionTypes.TOGGLE_THEME }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTheme);
