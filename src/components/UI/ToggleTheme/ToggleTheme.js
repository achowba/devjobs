import React, { Component } from "react";
import { ThemeIcon, ThemeWrapper, ToggleButton, ToggleWrapper } from "./Styles";

import lightThemeIcon from "../../../assets/img/desktop/icon-sun.svg";
import darkThemeIcon from "../../../assets/img/desktop/icon-moon.svg";

class ToggleTheme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "light",
        };
    }

    componentDidMount() {
        const theme = this.getTheme();
        this.setTheme(theme);
    }

    getTheme = () => {
        let theme = window.localStorage.getItem("app-theme");
        return theme || this.state.theme;
    };

    setTheme = (value = this.state.theme) => {
        this.setState({
            theme: value,
        });
        window.localStorage.setItem("app-theme", value);
    };

    themeToggledHandler = () => {
        this.getTheme() === "light"
            ? this.setTheme("dark")
            : this.setTheme("light");
    };

    render() {
        return (
            <ThemeWrapper>
                <ThemeIcon src={lightThemeIcon} alt="Light Theme Icon" />
                <ToggleWrapper onClick={this.themeToggledHandler}>
                    <ToggleButton isDark={this.state.theme === "light"} />
                </ToggleWrapper>
                <ThemeIcon src={darkThemeIcon} alt="Dark Theme Icon" />
            </ThemeWrapper>
        );
    }
}

export default ToggleTheme;
