import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {loginUser} from "./actions/authActions";

class AppContainer extends Component {
    static propTypes = {
        auth: PropTypes.object,
        loginUser: PropTypes.func
    };

    componentDidMount() {
        const user = localStorage.getItem("user");
        if (!user) {
            this.props.loginUser(null);
            return;
        }
        this.props.loginUser(JSON.parse(user));
    }

    render() {
        const {user} = this.props.auth;
        if (user === undefined) {
            return (
                <div>
                    Loading...
                </div>
            );
        }
        return this.props.children;
    }
}

export default connect(state => ({
    auth: state.auth
}), dispatch => ({
    loginUser: (user) => dispatch(loginUser(user))
}))(AppContainer);
