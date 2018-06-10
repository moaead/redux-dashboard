import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import RedirectToLoginIfNoAuthorized from "./layout/AuthCommon/RedirectToLoginIfNoAuthorized";
import Main from "./layout/Main";
import RedirectIfAuthorized from "./layout/AuthCommon/RedirectIfAuthorized";
import AppContainer from "./AppContainer";


class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <AppContainer>
                        <Route exact path="/" render={() =>
                            <RedirectToLoginIfNoAuthorized>
                                <Main>
                                    <Dashboard/>
                                </Main>
                            </RedirectToLoginIfNoAuthorized>
                        }/>

                        <Route exact path="/login" render={() =>
                            <RedirectIfAuthorized>
                                <Main>
                                    <Login/>
                                </Main>
                            </RedirectIfAuthorized>
                        }/>
                    </AppContainer>
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;
