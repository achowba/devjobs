import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Jobs from "./pages/Jobs/Jobs";
import Filter from "./components/UI/Filter/Filter";
import JobDetail from "./pages/Jobs/JobDetail/JobDetail";
import Header from "./components/Navigation/Header/Header";

import { GlobalStyles } from "./theme/Global";
import { darkTheme, lightTheme } from "./theme/Theme";

function App({ theme }) {
    return (
        <BrowserRouter>
            <Switch>
                <ThemeProvider
                    theme={theme === "light" ? lightTheme : darkTheme}
                >
                    <GlobalStyles />
                    <Header />
                    <Route path="/job/:id" component={JobDetail} />
                    <Route path="/" exact>
                        <Filter />
                        <Jobs />
                    </Route>
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
