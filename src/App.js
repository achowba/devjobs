import { BrowserRouter, Route, Switch } from "react-router-dom";

import Jobs from "./pages/Jobs/Jobs";
import Job from "./pages/Jobs/Job/Job";
import Header from "./components/Navigation/Header/Header";
import Filter from "./components/UI/Filter/Filter";
import { GlobalStyles } from "./theme/Global";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/Theme";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <ThemeProvider
                    theme={
                        "light" === "light" ? lightTheme : darkTheme
                    }
                >
                    <GlobalStyles />
                    <Header />
                    <Filter />
                    <Route path="/job/:id" component={Job} />
                    <Route path="/" exact component={Jobs} />
                </ThemeProvider>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
