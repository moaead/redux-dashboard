import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {PATH_NAME} from "../../utils/enums/pathname";

class RedirectToLoginIfNoAuthorized extends Component {
    render() {
        if (!this.props.auth.user) {
            return (
                <Redirect to={{
                    pathname: PATH_NAME.LOGIN
                }}/>
            );
        }
        return this.props.children;
    }
}

RedirectToLoginIfNoAuthorized.propTypes = {};
RedirectToLoginIfNoAuthorized.defaultProps = {};

export default withRouter(connect(state => ({
    auth: state.auth
}), dispatch => ({}))(RedirectToLoginIfNoAuthorized));
