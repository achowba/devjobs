import { BrowserRouter, Route, Switch } from "react-router-dom";

import Jobs from "./pages/Jobs/Jobs";
import Job from "./pages/Jobs/Job/Job";
import Header from "./components/Navigation/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/job/:id" component={Job} />
                <Route path="/" exact component={Jobs} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
