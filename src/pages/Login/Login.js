import LoginForm from "./Components/LoginForm";
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions";
import {DEMO_EMAIL, DEMO_PASSWORD} from "../../utils/loginUtils";
import {SubmissionError} from "redux-form";

class Login extends Component {
    static propTypes = {
        loginUser: PropTypes.func
    };

    loginUser = (values) => {
        if (values.email !== DEMO_EMAIL || values.password !== DEMO_PASSWORD) {
            throw new SubmissionError({
                _error: "Invalid Login..."
            })
        }

        const user = {
            //Other user info
            email: values.email
        };
        localStorage.setItem("user", JSON.stringify(user));
        this.props.loginUser(user);
    };

    render() {
        return (
            <div>
                <LoginForm onSubmit={this.loginUser}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({}),
    (dispatch, ownProps) => ({
        loginUser: (user) => dispatch(loginUser(user))
    })
)(Login);
