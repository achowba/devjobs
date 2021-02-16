import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { GlobalStyles } from "./Theme/Global";
import { darkTheme, lightTheme } from "./Theme/Theme";

import Jobs from "./pages/Jobs/Jobs";
import JobCard from "./components/Job/Job";
import Filter from "./components/UI/Filter/Filter";
import Header from "./components/Navigation/Header/Header";

function App({ theme }) {
    return (
        <BrowserRouter>
            <Switch>
                <ThemeProvider
                    theme={theme === "light" ? lightTheme : darkTheme}
                >
                    <GlobalStyles />
                    <Header />
                    <Filter />
                    <Route path="/job/:id" component={JobCard} />
                    <Route path="/" exact component={Jobs} />
                </ThemeProvider>
            </Switch>
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => {
    return {
        ...state.theme,
    };
};

export default connect(mapStateToProps, null)(App);
