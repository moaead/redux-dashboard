import React, {Component} from 'react';
import {Provider} from "react-redux";
import AppRouter from "./AppRouter";
class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <AppRouter/>
            </Provider>
        );
    }
}

export default App;
